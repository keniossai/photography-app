import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.styles.scss'


const HomePage = () => (
    <div className="container-fluid">
        <div className="section">
            <div className="row upper-layer">
            <div className="col-8">
            <h1 className="title">
                <span>Discover the world and share the world's best photos</span>
            </h1>
            <p className="sub-title">
                <span>Get inspired with incredible photos from diverse styles and genre around the world. We're not guide by fads-just great photography.</span>
            </p>
            <div className="signup">
                <Link to='/signup' className='button'>
                    <span>Sign Up</span>
                </Link>
            </div>
            </div>
            </div>
        </div>
        <div className="container">
            <h2 className='title-2 text-center mb-5'>
                <span>What makes us different</span>
            </h2>
            <div className="card-group">
        {/* Card */}
        <div className="card mb-4">
          {/* Card image */}
          <div className="view overlay">
            <img className="card-img-top" src="https://www.alltechng.com/wp-content/uploads/2020/04/maxresdefault-73.jpg" alt="Card" />
            <Link href="#!">
              <div className="mask rgba-white-slight" />
            </Link>
          </div>
          {/* Card content */}
          <div className="card-body">
            {/* Title */}
            <h4 className="card-title"><b>Grow as a photographer</b></h4>
            {/* Text */}
            <p className="c-text">Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and 
            photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.</p>
            {/* Provides extra visual weight and identifies the primary action in Link set of buttons */}
          </div>
          {/* Card content */}
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/* Card image */}
          <div className="view overlay">
            <img className="card-img-top" src="https://www.honorsociety.org/sites/default/files/styles/large/public/build_your_career.jpeg?itok=sBojcUND" alt="Card" />
            <Link href="#!">
              <div className="mask rgba-white-slight" />
            </Link>
          </div>
          {/* Card content */}
          <div className="card-body">
            {/* Title */}
            <h4 className="card-title">Build Your Career</h4>
            {/* Text */}
            <p className="c-text">Present yourself as a professional. Get hired by displaying your services, 
            create a Directory listing, showcase the workshops you're holding, and create Galleries to highlight your work.</p>
            {/* Provides extra visual weight and identifies the primary action in Link set of buttons */}
          </div>
          {/* Card content */}
        </div>
        {/* Card */}
        {/* Card */}
        <div className="card mb-4">
          {/* Card image */}
          <div className="view overlay">
            <img className="card-img-top" src="https://lh3.googleusercontent.com/proxy/Sx1gu2hSnd9ztua4wmgXLHttcLBpxi3AGYJyvPY5MYUFLmSK-FL8yM9aKDRJN0dltKdOey83OUTW4xgexvwppwSSZodNiMRQdiTagqIjWvwzK67pbewhBKpJgmxT6FJcVECPjTaXm4iV" alt="Card" />
            <Link href="#!">
              <div className="mask rgba-white-slight" />
            </Link>
          </div>
          {/* Card content */}
          <div className="card-body">
            {/* Title */}
            <h4 className="card-title">See how you're performing</h4>
            {/* Text */}
            <p className="c-text">With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.</p>
            {/* Provides extra visual weight and identifies the primary action in Link set of buttons */}
          </div>
          {/* Card content */}
        </div>
        {/* Card */}
      </div>
        </div>
    </div>
    
)

export default HomePage