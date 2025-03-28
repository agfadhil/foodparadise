import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="my-footer">
    <div className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h5>About FoodParadise</h5>
            <ul>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Suppert</h5>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Help Desk</a>
              </li>
              <li>
                <a href="/#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center">
            <h5>Download App</h5>
            <ul>
              <li>
                <a href="/#">Google Play</a>
              </li>
              <li>
                <a href="/#">App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks">
        <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
        <a href="/#" className="facebook"><i className="fa fa-facebook-official"></i></a>
        <a href="/#" className="google"><i className="fa fa-google-plus"></i></a>
      </div>
      <p className="footer-copyright">Copyright &copy; 2019 FoodParadise</p>
    </div>
  </footer>
)

export default Footer