import {
  CREATE_BASKET,
  DELETE_BASKET,
  GET_BASKET,
  SET_TOKEN,
  SET_USER,
  SHOW_AUTH,
  SHOW_LOGIN_ACTIVE,
  UPDATE_BASKET
} from './types';

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const setUser = (userId) => {
  return {
    type: SET_USER,
    payload: userId
  }
}

export const setIsAuth = (isAuth) => {
  return{
    type: SHOW_AUTH,
    payload: isAuth
  }
}

export const setLoginModalActive = (loginActive) => {
  return{
    type: SHOW_LOGIN_ACTIVE,
    payload: loginActive
  }
}

export const getBasket = (basket) => {
  return{
    type: GET_BASKET,
    payload: basket
  }
}

export const createBasket = (basket) => {
  return{
    type: CREATE_BASKET,
    payload: basket
  }
}

export const deleteBasket = () => {
  return{
    type: DELETE_BASKET,
  }
}

export const updateBasket = (basket) => {
  return{
    type: UPDATE_BASKET,
    payload: basket
  }
}

export const getProducts = (products) => {
  return{
    type: GET_BASKET,
    payload: products
  }
}