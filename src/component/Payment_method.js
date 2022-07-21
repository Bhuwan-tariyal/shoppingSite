import React from 'react'
import './myStyle.css'

function Payment_method() {
  return (
    <div className='flex-column container_size mt-5 me-3'> 
    <div className='flex-column'>
    <p>Payment method</p>
    <div className='d-flex' >
    <div className='border rounded-pill m-4 div_size ps-2'><img src={require('../image/paypal_logo.png')} className="img_size " alt="paypal" /></div>
    <div className='border rounded-pill m-4 div_size ps-2 '><img src={require('../image/Visa_logo.png')} className="img_size" alt="paypal" /></div>
    <div className='border rounded-pill m-4 div_size ps-2'><img src={require('../image/master_card.png')} className="img_size" alt="paypal" /></div>

    </div>
    <div  className='d-flex'>
    <div className='border rounded-pill m-4 div_size ps-2 ' ><img src={require('../image/maestro_logo.png')} className="img_size" alt="paypal" /></div>
    <div className='border rounded-pill m-4 div_size ps-2' ><img src={require('../image/discover_logo1.png')} className="img_size" alt="paypal" /></div>
    <div className='border rounded-pill m-4 div_size ps-2' ><img src={require('../image/IDEAL_Logo.png')} className="img_size" alt="paypal" /></div>
    </div>
    </div>
    <div className='flex-column'>
    <p>Delivery method</p>
    <div className='d-flex' >
    <div className='border rounded-pill m-4 div_size_delivary ps-2 pt-1 d-flex'><img src={require('../image/inpost_logo.png')} className="img_size " alt="paypal" /><p className='txt_size ms-2'>$20.00</p></div>
    <div className='border rounded-pill m-4 div_size_delivary ps-2 pt-1 d-flex'><img src={require('../image/dpd_logo.png')} className="img_size" alt="paypal" /><p className='txt_size ms-2'>$20.00</p></div>
    
    </div>
    <div  className='d-flex'>
    <div className='border rounded-pill m-4 div_size_delivary ps-2 pt-1 d-flex' ><img src={require('../image/DNL_logo.png')} className="img_size" alt="paypal" /><p className='txt_size ms-2'>$20.00</p></div>
    <div className='border rounded-pill m-4 div_size_delivary ps-2 pt-1 d-flex' ><img src={require('../image/FedEx_logo.png')} className="img_size" alt="paypal" /><p className='txt_size ms-2'>$20.00</p></div>
    </div>
    </div>
    </div>
  )
}

export default Payment_method