import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import styles from "../../styles/mainPage/heroPage.module.css"
import Link from 'next/link'


// Images
const slide1 = "/mainPage/slider/slide1.jpg";
const slide2 = "/mainPage/slider/slide2.jpg";
const slide3 = "/mainPage/slider/slide3.jpg";
const slide4 = "/mainPage/slider/slide4.jpg";
const slide5 = "/mainPage/slider/slide5.jpg";

export const HeroPage2 = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >

        <Slide
        background={{
            backgroundImage: slide1,
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(40%)",
            backgroundAnimation: "zoom"
        }}
        >
            <section className={styles.heroPageSection}>
                <div className={styles.heroPageContainer}>
                    <h1 className={styles.h1}>
                        Confort natural la fiecare pas
                    </h1>
                    <p className={styles.subheading}>
                        Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor
                        din parquet, pereților și scărilor din lemn.                    
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link href="/catalog">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button1}>
                                    Produse
                                </div>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button2}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Slide>

        <Slide
        background={{
            backgroundImage: slide2,
            backgroundAnimation: "zoom",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)",
            backgroundSize: "cover",
            backgroundAnimation: "zoom"
        }}
        >
                <section className={styles.heroPageSection}>
                <div className={styles.heroPageContainer}>
                    <h1 className={styles.h1}>
                        Confort natural la fiecare pas
                    </h1>
                    <p className={styles.subheading}>
                        Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor
                        din parquet, pereților și scărilor din lemn.                    
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link href="/catalog">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button1}>
                                    Produse
                                </div>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button2}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Slide>

        <Slide
        background={{
            backgroundImage: slide3,
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)",
            backgroundSize: "cover",
            backgroundAnimation: "zoom"
        }}>
                <section className={styles.heroPageSection}>
                <div className={styles.heroPageContainer}>
                    <h1 className={styles.h1}>
                        Confort natural la fiecare pas
                    </h1>
                    <p className={styles.subheading}>
                        Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor
                        din parquet, pereților și scărilor din lemn.                    
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link href="/catalog">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button1}>
                                    Produse
                                </div>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button2}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Slide>

        <Slide
        background={{
            backgroundImage: slide4,
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)",
            backgroundSize: "cover",
            backgroundAnimation: "zoom"
        }}>
                <section className={styles.heroPageSection}>
                <div className={styles.heroPageContainer}>
                    <h1 className={styles.h1}>
                        Confort natural la fiecare pas
                    </h1>
                    <p className={styles.subheading}>
                        Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor
                        din parquet, pereților și scărilor din lemn.                    
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link href="/catalog">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button1}>
                                    Produse
                                </div>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button2}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Slide>

        <Slide
        background={{
            backgroundImage: slide5,
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(40%)",
            backgroundSize: "cover"
        }}>
                <section className={styles.heroPageSection}>
                <div className={styles.heroPageContainer}>
                    <h1 className={styles.h1}>
                        Confort natural la fiecare pas
                    </h1>
                    <p className={styles.subheading}>
                        Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor
                        din parquet, pereților și scărilor din lemn.                    
                    </p>
                    <div className={styles.buttonsWrapper}>
                        <Link href="/catalog">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button1}>
                                    Produse
                                </div>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a 
                                style={{textDecoration: "none"}}
                                className={styles.link}
                            >
                                <div className={styles.button2}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </Slide>

      <Nav />
    </HeroSlider>
  );
};