import React, { useEffect } from 'react';
import './HomeCarousel.css';

import { useSelector, useDispatch } from 'react-redux';
import { getBanner } from '../../redux/actions/BannerActions';

export default function HomeCarousel(props) {

  const { arrBanner } = useSelector(state => state.CarouselReducer);
  
  const dispatch = useDispatch();

  useEffect(() => {

    const action = getBanner();

    dispatch(action);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderBanner = () => {
    return arrBanner.map((item, index) => {
      var activeClass = '';
      if (index === 0) {
        activeClass = 'active';
      }

      return <div key={index} className={'carousel-item ' + activeClass}>
        <img className='d-block w-100' src={item.hinhAnh} alt='' />
      </div>
    })
  }

  const renderIndicators = () => {
    let result = [];
    for (let i = 0; i < arrBanner.length; i++) {
      var activeClass = '';
      if (i === 0) {
        activeClass = 'active';
      }
      result.push(<li data-target='#carouselExampleIndicators' key={i} data-slide-to={i} className={'owl-dots ' + activeClass} />);
    }
    return result;
  }

  return (
    <section id='myCarousel' className='mt-5'>
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          {renderIndicators()}
        </ol>
        <div className='carousel-inner'>
          {renderBanner()}
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
