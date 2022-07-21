import React from 'react'
import './myStyle.css'

function Proceed_payment() {
  return (
    <div className='d-flex w-100'>
        <a href="#" className='ms-2'><img  className='arrow_size' src={require('../image/arrow.png')} alt="arrow" /></a>
        <p  className=' mx-4'>back</p>
        <div className='d-flex justify-content-end w-100'>
        <p className='border border-dark rounded-pill mx-4 px-4'>CONTINUE SHOPPING</p>
        <p className='border rounded-pill bg_color px-4' >PROCCED TO PAYMENT</p>
        </div>

    </div>
  )
}

export default Proceed_payment