import { TOGGLE_CART_DROPDOWN } from '../types';

export const toggleCartDropdown = () => dispatch => {
  dispatch({
    type: TOGGLE_CART_DROPDOWN
  });
};
