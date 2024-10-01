
// /////////////////// correct for table only problem in multiple item 

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../redux/cartSlice'; // Adjust the path as needed

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   // Sort items by timestamp to show most recent first
//   const sortedCartItems = [...cartItems].sort((a, b) => b.timestamp - a.timestamp);

//   return (
//     <div className="p-4 container mt-36">
//       <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
//       {sortedCartItems.length === 0 ? (
//         <p className="text-lg">Your cart is empty.</p>
//       ) : (
//         <div>
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr className="w-full bg-gray-100 border-b">
//                 <th className="py-2 px-4 text-left text-gray-600">Image</th>
//                 <th className="py-2 px-4 text-left text-gray-600">Name</th>
//                 <th className="py-2 px-4 text-left text-gray-600">Quantity</th>
//                 <th className="py-2 px-4 text-left text-gray-600">Total</th>
//                 <th className="py-2 px-4 text-left text-gray-600">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sortedCartItems.map((item) => (
//                 <tr key={item.id} className="border-b">
//                   <td className="py-4 px-4">
//                     <img
//                       src={`http://localhost:3000/${item.thumbnail}`}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover"
//                     />
//                   </td>
//                   <td className="py-4 px-4 text-gray-800">{item.name}</td>
//                   <td className="py-4 px-4 text-gray-800">{item.quantity}</td>
//                   <td className="py-4 px-4 text-gray-800">${item.totalPrice.toFixed(2)}</td>
//                   <td className="py-4 px-4">
//                     <button
//                       className="text-red-600 hover:text-red-800"
//                       onClick={() => handleRemoveFromCart(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-6">
//             <h3 className="text-lg font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
//             <button
//               className="btn btn-danger"
//               onClick={handleClearCart}
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../redux/cartSlice'; // Adjust the path as needed
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <div className="container mx-auto p-4 mt-28">
//       <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p className="text-lg">Your cart is empty. <Link to="/gifts" className="text-blue-500">Go Shopping</Link></p>
//       ) : (
//         <>
//           <div className="bg-white shadow-md rounded-lg p-4 mb-4">
//             <table className="min-w-full bg-white">
//               <thead>
//                 <tr>
//                   <th className="py-2">Product</th>
//                   <th className="py-2 text-center">Quantity</th>
//                   <th className="py-2 text-center">Price</th>
//                   <th className="py-2 text-center">Total</th>
//                   <th className="py-2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="border-t">
//                     <td className="py-2 flex gap-2 justify-center items-center">
//                       <img
//                         src={`http://localhost:3000/${item.thumbnail}`}
//                         alt={item.name}
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
//                       <span>{item.name}</span>
//                     </td>
//                     <td className="py-2 text-center">{item.quantity}</td>
//                     <td className="py-2 text-center">${item.price.toFixed(2)}</td>
//                     <td className="py-2 text-center">${item.totalPrice.toFixed(2)}</td>
//                     <td className="py-2 text-center">
//                       <button
//                         className="bg-red-500 text-white px-4 py-2 rounded"
//                         onClick={() => handleRemove(item.id)}
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-between items-center">
//             <p className="text-xl font-semibold">Total Quantity: {totalQuantity}</p>
//             <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
//             <button
//               className="bg-green-500 text-white px-4 py-2 rounded"
//               onClick={handleClearCart}
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice'; // Adjust the path as needed
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 mt-28">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-none p-0">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4 p-4 border rounded-lg shadow-sm bg-white">
                <div className="flex items-center">
                  <img
                    src={`http://localhost:3000/${item.images[0]}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Total: ${(item.totalPrice).toFixed(2)}</p>
                  </div>
                </div>
                <button
                  className="btn btn-outline btn-sm ml-4"
                  style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <button
              className="btn btn-outline"
              style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="mt-6">
            <Link
              to="/checkout"
              className="btn btn-primary"
              style={{ backgroundColor: '#1EBEB6', color: '#fff' }}
            >
              Proceed to Checkout
            </Link>
          </div>
          </div>

        </>
      )}
    </div>
  );
};

export default Cart;

