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
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Discover</Link>
              <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="#">Upcoming Photo</Link>
                <Link className="dropdown-item" to="#">Fresh Photo</Link>
                <Link className="dropdown-item" to="#">Popular Photo</Link>
                <Link className="dropdown-item" to="/gallery">Gallery</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/content">Content</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" tabIndex={-1} aria-disabled="true">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
)

export default Header