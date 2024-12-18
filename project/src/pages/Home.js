import React from 'react'
import free from '../image/free.avif';
import free01 from '../image/free01.avif';
import free02 from '../image/free02.avif';
import free03 from '../image/free03.avif';
import free04 from '../image/free04.avif';
import './Home.css';
import homeimg from '../image/homeimg.avif';
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Glassskin from '../product/Glassskin';
import Lipstick from '../product/Lipstick';
import black from '../image/black.jpg';
import approved from '../image/approved.jpg';
import greentested from '../image/greentested.png';
const Home = () => {
  return (
    <div>
        <section class="buy">
            <div class="buy01">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={free} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={free01}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={free02}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={free03}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={free04}  class="d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </section>
        <section class="sell">
          <div class="sell01">
            <h5 class="sell02">Best Sellers<button class="all">VIEW ALL</button></h5>
            <p class="sell03">Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin,<br/>hair, and baby care journey.</p>
          </div>
        </section>
        <section class="facewash">
          <div class="facewash01">
          <div class="container">
  <div class="row">
    {Glassskin.map((item)=>(
      <div class="col-lg-3">
        <div class="card">
      <div class="card space"key={item.id}/>
      <img src={item.img} class="card-img-top" alt="..."/>
      <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
  <button class="best">Best Seller</button>
  </div>
  </div>
      <p class="skin01">{item.title}</p>
      <p class="skin02">{item.des}</p>
      <p class="ml01">150ml</p>
      
      <p class="skin03">₹{item.price}<p class="price00">₹399</p><button class="off01">15% off</button></p>
      <button class="skin04">Add To Cart</button>
      </div>
    </div>
    ))}
    
   
  </div>
</div>
          </div>
        </section>
        <section class="sell">
          <div class="sell01">
            <h5 class="sell02">Best Sellers<button class="all">VIEW ALL</button></h5>
            <p class="sell03">Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth. Get amazing deals and start your toxin-free skin,<br/>hair, and baby care journey.</p>
          </div>
        </section>
        <section class="lipstick00">
          <div class="lipstick01">
          <div class="container">
  <div class="row">
    {Lipstick.map((item)=>(
      <div class="col-lg-3">
        <div class="card">
      <div class="card space"key={item.id}/>
      <img src={item.img} class="card-img-top" alt="..."/>
      <div class="position-relative">
  <div class="position-absolute top-0 start-0 translate-middle">
  <button class="best">Best Seller</button>
  </div>
  </div>
      <p class="skin01">{item.title}</p>
      <p class="skin02">{item.des}</p>
      <p class="ml01">150ml</p>
      
      <p class="skin03">₹{item.price}<p class="price00">₹399</p><button class="off01">15% off</button></p>
      <button class="skin04">Add To Cart</button>
      </div>
    </div>
    ))}
    
   
  </div>
</div>
          </div>
        </section>
       <section class="color00">
        <div class="color01">
          <h5 class="safe">Super Safe Standards</h5>
        <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="green01"><img src={greentested}/></div>
    </div>
    <div class="col-lg-8">
    <p class="green02"><strong>Dermatologically Tested</strong><br/>We ensure each product is tested clinically on the sensitive human skin to ensure that it is not allergic.</p> 
    </div>
    
  </div>
</div>
    </div>
    <div class="col-lg-4">
    <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="approved01"><img src={approved}/></div>
    </div>
    <div class="col-lg-8">
    <p class="approved02"><strong> FDA Approved</strong><br/>MamaEarth is FDA approved, which means we are 100% safe to be used for babies as well as mamas.</p>
    </div>
  </div>
</div>
    
    </div>
    <div class="col-lg-4">
    <div class="container">
  <div class="row">
    <div class="col-lg-4">
    <div class="black01"><img src={black}/></div>
    </div>
    <div class="col-lg-8">
    <p class="black02"><strong>Made Safe Certified</strong><br/>The MADE SAFE (Made with Safe Ingredients™) seal means that a product is literally made with safe ingredients.</p>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
       </section>
    </div>
  )
}

export default Home