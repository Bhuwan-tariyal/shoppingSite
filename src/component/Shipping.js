import React from 'react'
import './myStyle.css'

function Shipping() {
  return (
    <>
      {/* <div className='container bg-secondary'>Shipping and Information</div> */}
      <div className='flex-column me-3'>
        <div className='d-flex my-4'>
          <h6 className='border bg_color rounded-pill mx-3' >LOG IN</h6>
          <h6 className='border rounded-pill mx-3'>SIGN UP</h6>
        </div>
        <p className='fw-bold'>Shipping Information</p>
        <div >
          <form action="">
            <div className='d-flex'>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email' />
            <input type="text" className="form-control" id="address" placeholder='Address' />

            </div>
            <div className='d-flex'>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='First name' />
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='City' />

            </div>
            <div className='d-flex'>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Last name' />
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Postal Code/ ZIP' />

            </div>
            <div className='d-flex'>

            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Phone number' />
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Poland' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Shipping