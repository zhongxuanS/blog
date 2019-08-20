import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const { urlList, className } = this.props;

    const styles = {
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    }

    return (
      <div className={className}>
        <Slider {...settings}>
          {
            urlList && urlList.map((item) => {
              return <div key={item.id}><img id="test1" style={styles} src={item.path} alt="logo"></img></div>
            })
          }
        </Slider>
      </div >
    );
  }

}

export default Carousel;