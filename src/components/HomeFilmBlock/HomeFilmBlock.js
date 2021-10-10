import React, { useEffect } from 'react';
import "./HomeFilmBlock.css";

import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../redux/actions/MovieAction';
import MultipleRowSlick from '../RSlick/MultipleRowSlick';


export default function HomeFilmBlock() {

  const { arrMovie } = useSelector(state => state.MovieReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getMovies();

    dispatch(action);
  }, [])

  return (
    <section id="filmBlock" className='mt-5'>
      <ul className="nav nav-tabs border-0 justify-center" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link border-0 active" id="present-tab" data-toggle="tab" href="#present" role="tab" aria-controls="present" aria-selected="true">
            Đang Chiếu
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link border-0" id="incoming-tab" data-toggle="tab" href="#incoming" role="tab" aria-controls="incoming" aria-selected="true">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="present" role="tabpanel" aria-labelledby="present-tab">
          <div className="container w-full md:w-4/5 lg:w-3/4 2xl:w-1/2">
            <MultipleRowSlick arrMovie={arrMovie}></MultipleRowSlick>
          </div>
        </div>
        <div className="tab-pane fade show" id="incoming" role="tabpanel" aria-labelledby="incoming-tab">
          <div className="container w-full md:w-4/5 lg:w-3/4 2xl:w-1/2">
            <MultipleRowSlick arrMovie={arrMovie}></MultipleRowSlick>
          </div>
        </div>
      </div>
    </section>
  )
}
