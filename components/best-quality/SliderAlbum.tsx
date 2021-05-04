import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import ArrowLeft from '../../assets/images/left-arrow.png'
import ArrowRight from '../../assets/images/right-arrow.png'
import Rectangle from '../../assets/images/Rectangle.svg'

export const WrapperSlider = styled.div`
  width: 100%;
  padding-left: 470px;
  margin-bottom: 5rem;
  background: linear-gradient(90deg, #27272E 78.53%, rgba(39, 39, 46, 0) 100%);
`

export const CardOfAlbum = styled.div`
  img {
    width: 242px;
    height: 242px;
    filter: drop-shadow(0px 25px 60px #18181D);
    border-radius: 20px;
    margin-bottom: 22px;
  }

  .collection-name {
    color: var(--white);
  }

  .collection-name, .artist-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    line-height: 140%;
    margin: 0;
  }

  .artist-name {
    color: #E7444F;
  }

  .genre-date {

  }
`

export const NextArrow = styled.div`

  left: -188px;

  &:before {
    font-size: 40px;
    content: url("${ArrowRight}");
    color: var(--purple);
    opacity: 1;
  }


`
export const PrevArrow = styled.div`

  left: -240px;

  &:before {
    font-size: 40px;
    content: url("${ArrowLeft}");
    opacity: 1;
  }
`
export const QuantityWrapper = styled.div`
  width: 100%;
  max-width: 136px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  bottom: 567px;
  left: 212px;
  position: absolute;
`

// @ts-ignore
function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <NextArrow
            className={className}
            onClick={onClick}
        />
    );
}

// @ts-ignore
function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
        <PrevArrow
            className={className}

            onClick={onClick}
        />
    );
}


export const ChangeResolution = (url: String) => {
    var str = url;
    var res = str.replace("100x100", "600x600")
    return res;
}
// @ts-ignore
export const SliderAlbum = ({music}) => {
    var settings = {
        infinite: false,
        slidesToShow: 2,
        focusOnSelect: true,
        speed: 800,
        dots: false,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        className: 'center'

    };

    return (
        <>
            <QuantityWrapper>
                <span>01</span><Rectangle/> <span>0{music.resultCount}</span>
            </QuantityWrapper>
            <WrapperSlider>
                {console.log(music.resultCount)}
                <Slider {...settings}>
                    {music.results.map((music: any) => (
                            <CardOfAlbum key={music.key}>
                                <img src={ChangeResolution(music.artworkUrl100)}></img>
                                <div>
                                    <p className='collection-name'>{music.collectionCensoredName}</p>
                                    <p className='artist-name'>{music.artistName}</p>
                                </div>
                                <div>

                                    <span className='genre-date'>{music.primaryGenreName} • {music.releaseDate.substring(0, 4)}</span>
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

