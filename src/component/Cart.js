import React from 'react'
import './myStyle.css'

function Cart() {
  return (
    <div className='flex-column container_size'>
    <div className='d-flex justify-content-end me-3'>
      <img className='border rounded-circle img_cart border-success' src={require('../image/shopping_cart.png')}  alt="cart" />
      <hr className='line mx-2'/>
      <img className='border rounded-circle img_cart bg_color' src={require('../image/delivery_logo.png')} alt="delivery" />
    </div>
    <div className='mt-5' >
      <p>Your cart</p>
      <div className='d-flex mt-4'>
      <img className='border rounded-circle img_cart me-4 mt-2' src={require('../image/T_shirt.jpg')}  alt="img" />
      <div>
        <h5 className='h_cart'>T-Shirt</h5>
        <h5 className='h_cart'>Summer Vibes</h5>
        <p className='p_cart'>#23434</p>
      </div>
      <h6 className='ms-5'>$89.99</h6>
      </div>
      <div className='d-flex'>
      <img className='border rounded-circle img_cart me-4 mt-2' src={require('../image/basic_slim.jpg')}  alt="img" />
      <div>
        <h5 className='h_cart'>T-Shirt</h5>
        <h5 className='h_cart'>Summer Vibes</h5>
        <p className='p_cart'>#23434</p>
      </div>
      <h6 className='ms-5'>$69.99</h6>
      </div>
      <div className='d-flex border rounded-pill my-4 bg-light'>
        <p className='mx-5 mt-2'>Total Cost</p>
        <h5 className='mt-2'>$159,98</h5>
      </div>
      <div className='d-flex'>
        <img className='img_cart' src={require('../image/idelivery_logo.png')}  alt="delivary" />
        <p className='small'>You are <strong>$30,02</strong> away from free shipping!</p>
      </div>
      
    </div>
    </div>
  )
}

export default Cart