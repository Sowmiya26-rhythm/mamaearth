import React from 'react'
import free from '../image/free.avif';
import free01 from '../image/free01.avif';
import free02 from '../image/free02.avif';
import free03 from '../image/free03.avif';
import free04 from '../image/free04.avif';
import './Face.css';
const Face = () => {
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
    </div>
  )
}

export default Face