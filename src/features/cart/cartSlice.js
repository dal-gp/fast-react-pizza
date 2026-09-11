import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  /**
   * cart: array of cart item objects:
   * Don't store: total cart price, item count - derive those with selectors.
   * Do store: totalPrice per item - synced inreducers so it's always correct.
   */
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * Adds a new item to the cart.
     *
     * @param {Object} state - The current state
     * @param {Object} action.payload - Full cart item {pizzaId, name, quantity,
     *                                  unitPrice, totalPrice}
     */
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    /**
     * Removes an item from the cart by pizzaId.
     *
     * @param {Object} state - The current state
     * @param {number} action.payload - pizzaId of the item to remove
     */
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    /**
     * Increase quantity of the cart by 1.
     * Syncs totalPrice in the same operation - keeps them consistent.
     *
     * @param {Object} state - The current state
     * @param {number} action.payload - pizzaId of the item to increment
     */
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    /**
     * Decrease quantity of the cart by 1.
     * Syncs totalprice in the same operation.
     *
     * @param {Object} state - The current state
     * @param {number} action.payload - pizzaId of the item to decrement
     */
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    /** Resets cart to empty array */
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

/**
 * Selectors - co-located in slice file so any component can import and reuse.
 * Convention: prefix with 'get'.
 *
 * Note: state.cart.cart because:
 *  state.cart = the cart slice (name: "cart" in configureStore)
 *  state.cart.cart = the cart array property in initialState
 */

/** Total number of pizza items across all cart entries */
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

/** Total price of all items in the cart */
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

/** The raw cart array */
export const getCart = (state) => state.cart.cart;
