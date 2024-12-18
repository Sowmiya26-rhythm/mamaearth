import React from 'react'
import './Navbar.css';
import logo01 from '../image/logo01.avif';
import { IoMdSearch } from "react-icons/io";
import logo02 from '../image/logo02.svg';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <section class="heading">
            <div class="heading01">
            <div class="containerfluid">
  <div class="row">
    <div class="col-lg-6">
      <div class="msg">Asia's 1st Brand with MADE SAFE Cerficated Products</div>
    </div>
    <div class="col-lg-6">
      <div class="msg01">OMG Sales is Live | Buy 1 Get 1 FREE | Coupons:OMG | Click to Shop</div>
    </div>
  </div>
</div>
            </div>
        </section>
        <section class="image">
            <div class="image01">
           
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
     <img src={logo01}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <form class="d-flex hello">
      < input class="form-control me-2 hello01" type="search" placeholder="Search" aria-label="Search"/>
      
        <button class="btn hello02" type="submit"> <div class="search"><IoMdSearch /></div>Search</button>
      </form>
      <img src={logo02}/>
    </div>
    <div class="cart"><MdOutlineShoppingCart /></div>
    <div class="cart01">Cart</div>
    <div class="login"><IoPersonOutline /></div>
    <div class="login01">Login</div>
  </div>
</nav>
  
            </div>
        </section>
        <section class="list">
            <div class="list01">
                <ol>
                   <Link to="/"> <li>HOME</li></Link>
                    <Link to="/face"><li>FACE</li></Link>
                    <li>HAIR</li>
                    <li>MAKEUP</li>
                    <li>BODY</li>
                    <li>BABY</li>
                    <li>COMBOS</li>
                    <li>NEW LAUNCHES</li>
                    <li>INGREDIENT</li>
                    <li>ALL PRODUCTS</li>
                    <li>BLOG</li>
                    <li>PLANTS GOODNESS</li>
                    <li>STORE LOCATOR</li>
                </ol>
            </div>
        </section>
    </div>
  )
}

export default Navbar