// adding an item to the cart
export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

// delete an item from the cart
export const deleteItemFromCart = (cartItems, itemToDelete) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
};

// decrease an item from the cart
export const decreaseItemFromCart = (cartItems, itemToDecrease) => {
  return cartItems.map(cartItem =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: --cartItem.quantity }
      : cartItem
  );
};
