import React from 'react'
import Wave from '../assets/Wave.svg'
const Footer = () => {
  return (
    <>
      <div class="shadow-line"></div>

      <div className="footer">
        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-column col1">
              <h1 className="rotate-text">Books</h1>
            </div>

            <div className="footer-column col2">
              <h2>Overview</h2>
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
            </div>

            <div className="footer-column col3">
              <h2>Community</h2>
              <p>Support</p>
              <p>Help</p>
              <p>Community Central</p>
            </div>
            
          </div>
        </div>
        <img src={Wave} alt="Wave" className="wave-image" />
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
