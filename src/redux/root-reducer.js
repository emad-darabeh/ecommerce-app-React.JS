import { combineReducers } from 'redux';

// reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default rootReducer;
