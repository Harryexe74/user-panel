import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('easyPaisa');
  const [transactionProof, setTransactionProof] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setTransactionProof(e.target.files[0]);
    }
  };

  const handleCheckout = async (event) => {
    event.preventDefault();
  
    // Retrieve cart data from local storage
    const storedCartData = localStorage.getItem('cart');
    const cartData = JSON.parse(storedCartData);
  
    // Prepare order data for submission
    const orderData = {
      userId: "66e51b2c99a4d62c31d1c4c2", // Replace with actual user ID
      products: cartData.items.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: cartData.totalPrice,
      shippingAddress: {
        name: shippingAddress.name,
        address: shippingAddress.address,
        city: shippingAddress.city,
        zipCode: shippingAddress.zipCode,
        country: shippingAddress.country
      },
      paymentMethod: paymentMethod, // Use selected payment method
    };
  
    try {
      const { data } = await axios.post('http://localhost:3000/api/orders/', orderData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Success toast notification
      toast.success('Order created successfully!', {
        position:'top-right',
      });

      // Clear cart from local storage
      localStorage.removeItem('cart');

      console.log('Order created successfully', data);
    } catch (error) {
      toast.error('Error during checkout. Please try again.', {
        position: 'top-right',
      });
      console.error('Error during checkout:', error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleCheckout} className="flex flex-col lg:flex-row items-center justify-center p-4 mt-28">
        <div className="lg:w-1/2 w-full max-w-md p-4 bg-white rounded-lg shadow-lg mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-center">Shipping Information</h2>
          <div className="space-y-4">
            {['name', 'address', 'city', 'zipCode', 'country'].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                <input
                  type="text"
                  name={field}
                  value={shippingAddress[field]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  required
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Payment Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select Payment Method</label>
            <select
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="easyPaisa">EasyPaisa</option>
              <option value="jazzCash">JazzCash</option>
              <option value="bank">Bank Account</option>
            </select>
          </div>
          
          {paymentMethod === 'easyPaisa' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">EasyPaisa Account Name</label>
                <p className="input input-bordered w-full flex items-center">{`Muhammad Awais`}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center">Phone Number</label>
                <p className="input input-bordered w-full">{`03496655862`}</p>
              </div>
            </div>
          )}

          {paymentMethod === 'jazzCash' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">JazzCash Account Name</label>
                <p className="input input-bordered w-full flex items-center">{`Muhammad Awais`}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 ">Phone Number</label>
                <p className="input input-bordered w-full flex items-center">{`03496655862`}</p>
              </div>
            </div>
          )}

          {paymentMethod === 'bank' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Bank Name</label>
                <p className="input input-bordered w-full flex items-center">{`ABC Bank`}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Account Name</label>
                <p className="input input-bordered w-full flex items-center">{`John Doe`}</p>
              </div>
            </div>
          )}

          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Upload Transaction Proof</label>
            <input
              type="file"
              name="transactionProof"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
              required
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="btn bg-[#119E8F] text-white w-full">
              Submit Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;