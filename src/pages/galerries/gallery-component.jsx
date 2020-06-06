import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.styles.scss'


const Gallery = () => {
    return(
        <div className="discovery-index-layout">
            <div className="container-fluid py-5">
                <div className="discovery-header-region">
                    <div className="discovery-header">
                        <h1 className='bold'>Featured Galleries</h1>
                        <p className='larg'>Browse through some of the best galleries in Yellow.</p>
                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="discovery-navigation fix-width">
                        <div className="feature-region">
                            <div className="feature-picker">
                                <div className="tab-wrapper">
                                    <div className="px-tabs-fade"></div>
                                    <ul className="px-tabs">
                                        <li data-feature='popular'><Link to='#'>Popular</Link></li>
                                        <li data-feature='upcoming'><Link to='#'>Upcoming</Link></li>
                                        <li data-feature='fresh'><Link to='#'>Fresh</Link></li>
                                        <li data-feature='editors'><Link to='#'>Editors' Choice</Link></li>
                                        <li data-feature='galleries' className='active'><Link to='/gallery'>Galleries</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/1.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/4.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/5.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/28.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/41.1.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/35.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/8.jpeg" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/6.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/9.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/18.1.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/11.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                        <div className="col-sm-4 py-3">
                        <div className="card">
                        <div className="view overlay">
                            <img className='card-img-top' src="../../../assets/images/12.png" alt=""/>
                        <Link className='link'>
                            <div className="mask rgba-white-slight" />
                        </Link>
                        </div>
                        <div className="card-body text-center">
                        <Link className='link'>
                        <h4 className="card-title">Portraite Shot | June</h4>
                        </Link>
                        {/* Text */}
                        <p className="card-text">By Ty-Bello</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery