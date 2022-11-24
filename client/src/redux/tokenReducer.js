import {
  CREATE_BASKET,
  DELETE_BASKET,
  GET_BASKET, SET_PRODUCTS,
  SET_TOKEN,
  SET_USER,
  SHOW_AUTH,
  SHOW_LOGIN_ACTIVE,
  UPDATE_BASKET,

} from './types';

const userId = localStorage.getItem('user') ?? ''
const token = localStorage.getItem('token') ?? ''

const initialState = {
  token,
  userId,
  isAuth: !!userId,
  loginActive: false,
  basket: null,
  products: null

}

export const tokenReducer = (state = initialState.token, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    default:
      return state;
  }
}

export const userReducer = (state = initialState.userId, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state;
  }
}

export const usAuthReducer = (state = initialState.isAuth, action) => {
  switch (action.type) {
    case SHOW_AUTH:
      return action.payload
    default:
      return state;
  }
}

export const loginModalActive = (state = initialState.loginActive, action) => {
  switch (action.type) {
    case SHOW_LOGIN_ACTIVE:
      return action.payload
    default:
      return state;
  }
}

export const globalBasket = (state = initialState.basket, action) => {
  switch (action.type) {
    case GET_BASKET:
    case CREATE_BASKET:
    case UPDATE_BASKET:
    case DELETE_BASKET:
      return action.payload
    default:
      return state;
  }
}

export const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload
    default:
      return state;
  }
}