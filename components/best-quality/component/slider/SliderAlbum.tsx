import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rectangle from '../../../../images/Rectangle.svg'
import React, {FunctionComponent, useState} from "react";
import {CardOfAlbum, NextArrow, PrevArrow, QuantityWrapper, WrapperSlider} from "./styles";


const SampleNextArrow: FunctionComponent<{ currentSlide?: number, slideCount?: number, children?: any }> = ({currentSlide, slideCount, children, ...props}) => (
    <NextArrow {...props}> {children}</NextArrow>);


const SamplePrevArrow: FunctionComponent<{ currentSlide?: number, slideCount?: number, children?: any }> = ({currentSlide, slideCount, children, ...props}) => (
    <PrevArrow {...props}> {children} </PrevArrow>
);


export const ChangeResolution = (url: String) => {
    const str = url;
    const res = str.replace("100x100", "600x600")
    return res;
}
// @ts-ignore
export const SliderAlbum = ({albums}) => {
    console.log(albums)
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(1);


    // @ts-ignore
    var settings = {
        infinite: true,
        slidesToShow: 2,
        focusOnSelect: true,
        speed: 800,
        dots: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        className: 'center',
        beforeChange: (current: any, next: any) => {
            setOldSlide(current + 1);
            setActiveSlide(next + 1);
        },
    };


    return (
        <>
            <QuantityWrapper>
                <span>0{activeSlide}</span><Rectangle/> <span>0{albums.resultCount}</span>
            </QuantityWrapper>
            <WrapperSlider>
                <Slider {...settings}>
                    {albums.results.map((albums: any) => (
                            <CardOfAlbum key={albums.key}>
                                <img src={ChangeResolution(albums.artworkUrl100)}></img>
                                <div>
                                    <p className='collection-name'>{albums.collectionCensoredName}</p>
                                    <p className='artist-name'>{albums.artistName}</p>
                                </div>
                                <div>
                                    <span className='genre-date'>{albums.primaryGenreName} • {albums.releaseDate.substring(0, 4)}</span>
                                </div>
                            </CardOfAlbum>
                        )
                    )}
                </Slider>
                {ChangeResolution('')}
            </WrapperSlider>
        </>
    )
}

