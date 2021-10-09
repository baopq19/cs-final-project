/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.css';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import HomeTool from '../../components/HomeTool/HomeTool';
import HomeFilmBlock from '../../components/HomeFilmBlock/HomeFilmBlock';
import HomeCinema from '../../components/HomeCinema/HomeCinema';
import HomeNews from '../../components/HomeNews/HomeNews';
import HomeAppMobile from '../../components/HomeAppMobile/HomeAppMobile';

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
