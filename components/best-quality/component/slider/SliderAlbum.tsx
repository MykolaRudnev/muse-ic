import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rectangle from '../../../../images/Rectangle.svg'
import React, {FunctionComponent, useEffect, useState} from "react";
import {CardOfAlbum, NextArrow, PrevArrow, QuantityWrapper, WrapperSlider} from "./styles";
import {NextPageContext} from "next";
import {AlbumPost} from "interfaces/albums";





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

const ReadMore = ({children}: any) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className='description-album'>
            {isReadMore ? text.slice(0, 115) : text}
            <span onClick={toggleReadMore} className="read-or-hide">

          {isReadMore ? <p className="see-more">Find out more</p> : <p className="see-more">Find out less</p>}

      </span>
        </p>
    );
};

// @ts-ignore
export default  function SliderAlbum ({albums:serverAlbum}:AlbumPost)  {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(1);
    const [albums, setAlbums] = useState(serverAlbum)

    useEffect(() => {
        async function load() {
            const  res = await  fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`)
            const data = await  res.json()

            setAlbums(data)
        }
        if(!serverAlbum) {
            load()
        }
    },[])
    if (!albums) {
            return <>
            <p>Loading ...</p>
            </>
        }
    const settings = {
        infinite: true,
        slidesToShow: 2,
        focusOnSelect: true,
        speed: 800,
        dots: false,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        className: 'center',
        autoplay: true,
        autoplaySpeed: 10000,
        beforeChange: (current: any, next: any) => {
            setOldSlide(current + 1);
            setActiveSlide(next + 1);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }

        ]
    };


    return (
        <>
            <QuantityWrapper>
                <span>0{activeSlide}</span><Rectangle/> <span>0{ albums.resultCount}</span>
            </QuantityWrapper>
            <WrapperSlider>
                <Slider {...settings}>

                    {albums.results.map((albums: any) => (

                            <CardOfAlbum key={albums.collectionId}>
                                <img src={ChangeResolution(albums.artworkUrl100)}></img>
                                <div>
                                    <p className='collection-name'>{albums.collectionCensoredName}</p>
                                    <p className='artist-name'>{albums.artistName}</p>
                                </div>
                                <div>
                                    <span className='genre-date'>{albums.primaryGenreName} • {albums.releaseDate.substring(0, 4)}</span>
                                    <ReadMore>
                                        There’s an audacity to the way the Arctic Monkeys' fifth album gathers disparate musical threads—West Coast hip-hop, heavy ’70s rock—into something that
                                        feels so assured, inevitable and outrageously enjoyable. From biker-gang stomp of “Do I Wanna
                                    </ReadMore>
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

SliderAlbum.getInitialProps = async  ({req}: NextPageContext) => {
    const  res = await  fetch(`https://itunes.apple.com/search?term=arctic+monkeys&entity=album&limit=7`)
    const albums = await  res.json()
    return {
        albums
    }
}
