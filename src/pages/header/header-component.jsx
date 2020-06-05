import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand" to="/">
            <img src="../../assets/logo.png" alt="" className='logo w-50'/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/content">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" tabIndex={-1} aria-disabled="true">Login</Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav nav-flex-icons">
        <li className="nav-item avatar">
          <Link className="nav-link p-0" href="#">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0 w-50" alt="avatarimage" height={45} />
          </Link>
        </li>
      </ul> */}
        </div>
      </nav>
)

export default Header