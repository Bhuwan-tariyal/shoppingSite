import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './component/Navbar';
import reportWebVitals from './reportWebVitals';
import Cart from './component/Cart';
import Payment_method from './component/Payment_method';
import Shipping from './component/Shipping';
import Proceed_payment from './component/Proceed_payment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <hr />
    <h5 className='ms-3'>Shipping and Payment</h5>
    <div className='d-flex ms-3 mt-5'>
    <Shipping/>
    <Payment_method/>
    <Cart/>
    </div>
    <Proceed_payment/>
  </React.StrictMode>
);

reportWebVitals();
