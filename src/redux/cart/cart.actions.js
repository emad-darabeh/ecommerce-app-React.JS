import {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  DELETE_ITEM_FROM_CART,
  DECREASE_ITEM
} from '../types';

export const toggleCartDropdown = () => dispatch => {
  dispatch({
    type: TOGGLE_CART_DROPDOWN
  });
};

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  });
};

export const increaseItem = item => dispatch => {
  dispatch(addItem(item));
};

export const deleteItem = item => dispatch => {
  dispatch({
    type: DELETE_ITEM_FROM_CART,
    payload: item
  });
};

export const decreaseItem = item => dispatch => {
  if (item.quantity === 1) {
    dispatch(deleteItem(item));
  } else {
    dispatch({
      type: DECREASE_ITEM,
      payload: item
    });
  }
};
