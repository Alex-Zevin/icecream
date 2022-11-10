const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})
  if (candidate) {
    // проверить пароль, пользыватель существует
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      //Генерация токена,пароли совпали

      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})
      res.status(200).json({
        token: `Bearer ${token}`,
        userId: candidate._id
      })
    } else {
      //пароли не совпали
      res.status(401).json({
        message: 'Пароли не совпадают. Попробуйте снова.'
      })
    }
  } else {
// пользывателя нет,ошибка
    res.status(404).json({
      message: 'Пользыватель с таким емаил не найден.'
    })
  }
}

module.exports.register = async function (req, res) {
  // email password
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // пользыватель существует,нужно отправить ошибку
    res.status(409).json({
      message: 'Такой email уже существует'
    })
  } else {
    //нужно созать пользывателя
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }

  }
}
