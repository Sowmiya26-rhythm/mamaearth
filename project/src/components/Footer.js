import React from 'react'
import './Footer.css';
import { FaShippingFast } from "react-icons/fa";
import { LuWalletCards } from "react-icons/lu";
import upi from '../image/upi.png';
import noun from '../image/noun.png';
import best from '../image/best.png';
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import appstore from '../image/appstore.png';
import playstore from '../image/playstore.png';
const Footer = () => {
  return (
    <div>
        <section class="insert">
            <div class="insert01">
            <div class="container">
              <div class="card">
  <div class="row">
  <div class="col-lg-3">
    
    
      <div class="shipping"><FaShippingFast /></div>
      <p class="shipping01">Free Shipping</p>
      <p class="shipping02">On Orders Above ₹399</p>
    
    </div>
    <div class="col-lg-3">
    
    
    <div class="card00"><LuWalletCards /></div>
      <p class="card01">COD Available</p>
      <p class="card02">@ ₹40 Per Order</p>
      
    
    </div>
    <div class="col-lg-6">
   
    
    <p class="have">Have Queries or Concerns?</p>
    <button class="us">CONTACT US</button>
    </div>
   
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="alt01">
          <div class="alt02">
            <div class="card">
              <h6 class="payment">PAYMENT</h6>
              <p class="payment01"><img src={noun}/>  100% Payment Protection, Easy Return Policy</p>
              <div class="upi01"><img src={upi}/></div>
            </div>
          </div>
        </section>
        <section class="useful">
          <div class="useful01">
          <div class="container">
            <div class="card">
  <div class="row">
    <div class="col-lg-3">
      <ol>
        <p class="ink01"><li>USEFUL LINKS</li></p>
        <li>Privacy Policy</li><br/>
        <li>Returns</li><br/>
        <li>Terms & Conditions</li><br/>
        <li>Terms & Conditions-Cashback</li><br/>
        <li>We're Safe </li><br/>
        <li>Track Order</li><br/>
        <li>Contact Us</li><br/>
        <li>Sitemap</li><br/>
        <li>About Us</li>
      </ol>
    </div>
    <div class="col-lg-3">
      <ol>
    <p class="ink01"><li>CATEGORIES</li></p>
        <li>Baby</li><br/>
        <li>Beauty</li><br/>
        <li>Hair</li><br/>
        <li>Face</li><br/>
        <li>Body</li><br/>
        <li>Makeup</li><br/>
        <li>Contact Us</li><br/>
        <li>Ingredient</li><br/>
        <li>Gift pack</li>
      </ol>
    </div>
    <div class="col-lg-3">
    <ol>
    <p class="ink01"><li>MY ACCOUNT</li></p>
        <li>Account</li><br/>
        <li>Order</li><br/>
        <li>Addresses</li><br/>
        
      </ol>
    </div>
    <div class="col-lg-3">
      <div class="best01"><img src={best}/></div>
    </div>
  </div>
  </div>
</div>
          </div>
        </section>
        <section class="on">
          <div class="on01">
            <div class="card">
              <div class="icons001"><FiFacebook />   <FaTwitter />   <FaInstagram />   <TfiYoutube />   <FaLinkedin />  <FaPinterest />  <MdEmail /></div>
              <div class="store01"><img src={playstore}/><img src={appstore}/></div>
              <p class="ltmd02">© 2024 Honasa Consumer Limited. All Rights Reserved</p>
             </div>
          </div>
        </section>
        
    </div>
  )
}

export default Footer