import React from 'react';
import './HomeCarousel.css';

export default function HomeCarousel() {
    return (
        <section id='myCarousel' className='mt-5'>
          <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active owl-dots' />
              <li data-target='#carouselExampleIndicators' data-slide-to='1' className='owl-dots' />
              <li data-target='#carouselExampleIndicators' data-slide-to='2' className='owl-dots' />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img className='d-block w-100' src='./images/trang-ti-16194117174325.jpg' alt='' />
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src='./images/ban-tay-diet-quy-evil-expeller-16177781815781.png' alt='' />
              </div>
              <div className='carousel-item'>
                <img className='d-block w-100' src='./images/lat-mat-48h-16177782153424.png' alt='' />
              </div>
            </div>
            <a href='./pages/details.html'>
              <div className='overlay' />
            </a>
            <a className='carousel-control-prev arrow-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next' >
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='sr-only'>Next</span>
            </a>
          </div>
          {/* Button trigger modal */}
          <div className='click' data-toggle='modal' data-target='#exampleModal' >
            <i className='fas fa-play' />
          </div>
          {/* Modal */}
          <div className='modal fade' id='exampleModal' tabIndex={-1} role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' >
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                {/*width='560' height='315'*/}
                <iframe
                  style={{
                    minWidth: 750,
                    minHeight: 500,
                    position: 'relative',
                  }}
                  src='https://www.youtube.com/embed/2Mi0CFBghiw'
                  title='YouTube video player'
                  frameBorder={0}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
                <button className='close' data-dismiss='modal'>
                  <img src='./images/close.png' alt='' />
                </button>
              </div>
            </div>
          </div>
        </section>
    )
}
