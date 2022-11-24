import { combineReducers } from 'redux';
import {
  globalBasket,
  loginModalActive,
  productsReducer,
  tokenReducer,
  usAuthReducer,
  userReducer
} from './tokenReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  userId: userReducer,
  isAuth: usAuthReducer,
  loginActive: loginModalActive,
  basket: globalBasket,
  products: productsReducer
})
