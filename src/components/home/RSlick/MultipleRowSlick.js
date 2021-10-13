import React, { Component } from 'react'
import Slider from 'react-slick';
import Film from '../HomeFilmBlock/Film/Film';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import './Custom.css'

export default class MultipleRowSlick extends Component {
    renderMovie = () => {
        return this.props.arrMovie.map((item, index) => {
            return <div key={index}>
                <Film item={item}/>
            </div>
        })
    }
    
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            rows: 2,
            slidesPerRow: 4,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        rows: 2,
                        slidesPerRow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesPerRow: 2,
                    }
                },
            ]
        };

        return (
            <Slider {...settings}>
                {this.renderMovie()}
            </Slider>
        )
    }
}
