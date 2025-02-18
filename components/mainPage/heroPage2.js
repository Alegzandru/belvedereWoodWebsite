import React, {useContext, useState} from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import styles from "../../styles/mainPage/heroPage.module.css"
import Link from 'next/link'
import {text} from "../text"
import {WidthContext} from "../context"
import Slider from "react-slick";

// Images
const slide1 = "/mainPage/slider/slide1.jpg";
const slide2 = "/mainPage/slider/slide2.jpg";
const slide3 = "/mainPage/slider/slide3.jpg";
const slide4 = "/mainPage/slider/slide4.jpg";
const slide5 = "/mainPage/slider/slide5.jpg";


export const HeroPage2 = (props) => {

    const {width, setWidth} = useContext(WidthContext)
    const [slide, setSlide] = useState(0)

  return (
    <div className={styles.heroPageWrapper}>
      <Slider 
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay
        afterChange={(index) => { setSlide(index) }}        
        autoplaySpeed={70000}
        arrows={false}
      >
        <img src={slide1} className={`${styles.image} hero`} />
        <img src={slide2} className={`${styles.image} hero`} />
        <img src={slide3} className={`${styles.image} hero`} />
        <img src={slide4} className={`${styles.image} hero`} />
        <img src={slide5} className={`${styles.image} hero`} />
      </Slider>
      <div className={styles.heroPageContainer}>
          <h1 className={styles.h1}>
              {text.mainPage.heroPage[props.lang].heading}
          </h1>
          <p className={styles.subheading}>
              {text.mainPage.heroPage[props.lang].description}
          </p>
          <div className={styles.buttonsWrapper}>
              <Link href={`${props.langStr}/catalog`}>
                  <a 
                      style={{textDecoration: "none"}}
                      className={styles.link}
                  >
                      <div className={styles.button1}>
                          {text.mainPage.heroPage[props.lang].button1}
                      </div>
                  </a>
              </Link>
              <Link href={`${props.langStr}/proiecte`}>
                  <a 
                      style={{textDecoration: "none"}}
                      className={styles.link}
                  >
                      <div className={styles.button2}>
                          {text.mainPage.heroPage[props.lang].button2}
                      </div>
                  </a>
              </Link>
          </div>
      </div>
    </div>
  );
};