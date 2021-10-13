/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.css';
import HomeCarousel from '../../components/home/HomeCarousel/HomeCarousel';
import HomeTool from '../../components/home/HomeTool/HomeTool';
import HomeFilmBlock from '../../components/home/HomeFilmBlock/HomeFilmBlock';
import HomeCinema from '../../components/home/HomeCinema/HomeCinema';
import HomeNews from '../../components/home/HomeNews/HomeNews';
import HomeAppMobile from '../../components/home/HomeAppMobile/HomeAppMobile';

export default function Home(props) {
    
    return (
      <div>

        <HomeCarousel />
        
        <HomeTool />

        <HomeFilmBlock />

        <HomeCinema />

        <HomeNews />

        <HomeAppMobile />
      </div>
    );
}
