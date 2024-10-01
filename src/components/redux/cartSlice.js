// import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// const initialState = {
//   items: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const newItem = {
//         ...action.payload,
//         id: uuidv4(), // Ensure each item has a unique id, even if it's the same product
//       };
//       state.items.push(newItem);
//       state.totalQuantity += newItem.quantity;
//       state.totalPrice += newItem.totalPrice;
//     },
//     removeFromCart: (state, action) => {
//       const itemId = action.payload;
//       const itemToRemove = state.items.find((item) => item.id === itemId);
//       if (itemToRemove) {
//         state.totalQuantity -= itemToRemove.quantity;
//         state.totalPrice -= itemToRemove.totalPrice;
//         state.items = state.items.filter((item) => item.id !== itemId);
//       }
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const itemToUpdate = state.items.find((item) => item.id === id);
//       if (itemToUpdate) {
//         state.totalQuantity += quantity - itemToUpdate.quantity;
//         state.totalPrice += (quantity - itemToUpdate.quantity) * itemToUpdate.price;
//         itemToUpdate.quantity = quantity;
//         itemToUpdate.totalPrice = quantity * itemToUpdate.price;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//     },
//   },
// });

// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// // Initial state of the cart
// const initialState = {
//   items: [], // Array to hold cart items
//   totalAmount: 0, // Total price of all items in the cart
// };

// // Create a slice of the Redux store for the cart
// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     // Add item to the cart
//     addToCart(state, action) {
//       const newItem = action.payload;

//       // Check if the item already exists in the cart
//       const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

//       if (existingItemIndex !== -1) {
//         // If item exists, update quantity and totalPrice
//         const existingItem = state.items[existingItemIndex];
//         existingItem.quantity += newItem.quantity;
//         existingItem.totalPrice = existingItem.quantity * existingItem.price;
//       } else {
//         // If item doesn't exist, add it to the cart
//         state.items.push(newItem);
//       }

//       // Update total amount
//       state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
//     },

//     // Remove item from the cart by its ID
//     removeFromCart(state, action) {
//       const idToRemove = action.payload;

//       // Remove the item with the specified ID
//       state.items = state.items.filter(item => item.id !== idToRemove);

//       // Recalculate total amount
//       state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
//     },

//     // Update the quantity of an item in the cart
//     updateQuantity(state, action) {
//       const { id, quantity } = action.payload;

//       // Find the item to update
//       const itemToUpdate = state.items.find(item => item.id === id);
//       if (itemToUpdate) {
//         // Update quantity and totalPrice
//         itemToUpdate.quantity = quantity;
//         itemToUpdate.totalPrice = quantity * itemToUpdate.price;

//         // Recalculate total amount
//         state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
//       }
//     },


//     // Clear all items from the cart
//     clearCart(state) {
//       state.items = [];
//       state.totalAmount = 0; 
//     },
//   },
// });

// // Export the actions for use in components
// export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// // Export the reducer to be used in the store
// export default cartSlice.reducer;


// ccoreeee

// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     totalQuantity: 0,
//     totalPrice: 0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       state.totalQuantity++;
//       if (!existingItem) {
//         state.items.push({
//           ...newItem,
//           quantity: 1,
//           totalPrice: newItem.price,
//         });
//       } else {
//         existingItem.quantity++;
//         existingItem.totalPrice = existingItem.totalPrice + newItem.price;
//       }
//       state.totalPrice += newItem.price;
//     },
//     removeFromCart: (state, action) => {
//       const id = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);
//       state.totalQuantity--;
//       state.totalPrice -= existingItem.price;
//       if (existingItem.quantity === 1) {
//         state.items = state.items.filter((item) => item.id !== id);
//       } else {
//         existingItem.quantity--;
//         existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// // Load cart from localStorage
// const loadCartFromLocalStorage = () => {
//   const cart = localStorage.getItem('cart');
//   return cart ? JSON.parse(cart) : { items: [], totalQuantity: 0, totalPrice: 0 };
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: loadCartFromLocalStorage(),
//   reducers: {
//     addToCart: (state, action) => {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       if (!existingItem) {
//         state.items.push({
//           ...newItem,
//           quantity: newItem.quantity,
//           totalPrice: newItem.price * newItem.quantity,
//         });
//         state.totalQuantity += newItem.quantity;
//         state.totalPrice += newItem.price * newItem.quantity;
//       } else {
//         existingItem.quantity += newItem.quantity;
//         existingItem.totalPrice = existingItem.price * existingItem.quantity;
//         state.totalQuantity += newItem.quantity;
//         state.totalPrice += newItem.price * newItem.quantity;
//       }
//       localStorage.setItem('cart', JSON.stringify(state));
//     },
//     removeFromCart: (state, action) => {
//       const id = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);
//       if (existingItem) {
//         state.totalQuantity -= existingItem.quantity;
//         state.totalPrice -= existingItem.totalPrice;
//         state.items = state.items.filter((item) => item.id !== id);
//         localStorage.setItem('cart', JSON.stringify(state));
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.totalQuantity = 0;
//       state.totalPrice = 0;
//       localStorage.setItem('cart', JSON.stringify(state));
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : { items: [], totalQuantity: 0, totalPrice: 0 };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Item already exists in the cart
        // No need to add, just update quantities
        return { ...state, existingItem };
      } else {
        // Item does not exist in the cart, add new item
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
        state.totalQuantity += newItem.quantity;
        state.totalPrice += newItem.price * newItem.quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter((item) => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;



