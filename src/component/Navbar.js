import React from 'react'

function Navbar() {
  return (
    <div className='mt-3'>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img className="mx-3" src={require('../image/shopping_logo.png')} alt="logo" />
          <a className="navbar-brand" href="#"><strong className='text-warning'>E-</strong>Shope</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link active" aria-current="page" href="#">Men</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">Kids</a>
              </li>
            </ul>
            <div className="d-flex " role="search">
              <a href="#"><img className="mx-4" src={require('../image/search.png')} alt="search" /></a>
              <a href="#"><img  className="mx-4" src={require('../image/shopping_cart.png')} alt="shopping_cart" /></a>
              <a href="#"><img  className="mx-4" src={require('../image/profile.png')} alt="profile" /></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar