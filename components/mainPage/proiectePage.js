import styles from "../../styles/mainPage/proiectePage.module.css"
import {useContext, useState} from "react"
import {proiecteSlider} from "./sliderContent"
import {Link as LinkScroll} from 'react-scroll'
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import {WidthContext} from "../context"
import styled from 'styled-components';
import {text} from "../text"
import Image from 'next/image'


export function ProiectePage(props){

    const {width, setWidth} = useContext(WidthContext)
    const [slide, setSlide] = useState(0)
    const tablet = width < 1080 ? 1 : 0
    const mobile = width < 528 ? 1 : 0

    const slide1 = "/catalog/patrateModule/ManucBei-12.jpg";
    const slide2 = "/proiecte/mimi3.jpg";
    const slide3 = "/mainPage/Aeroport-16.jpg";
    const slide4 = "/mainPage/KikuRestaurant-14.jpg";
    const slide5 = "/mainPage/veganClient.jpg";
    const slide6 = "/proiecte/muzeul2.jpg";
    const slide7 = "/proiecte/rozmarin4.jpg";


    return(
        <div className={styles.proiectePageWrapper}>
            <section className={styles.proiectePageSection}>
                <div className={styles.leftContainer}>
                    <div className={styles.logo}>
                        <Image
                            src="/mainPage/BWPlogoGold.png"
                            alt="Logo Belvedere Wood Parquet"
                            layout="fill"
                        />
                    </div>
                    <p className={styles.leftContainerText}>
                        {text.mainPage.projectsPage[props.lang].heading}
                    </p>
                </div>
                {/* <div className={`${styles.rightContainer} ${
                    slide==0? styles.slide0 :
                    slide==1? styles.slide1 :
                    slide==2? styles.slide2 :
                    slide==3? styles.slide3 :
                    slide==4? styles.slide4 :
                    slide==5? styles.slide5 :
                    slide==6? styles.slide6 : styles.empty
                }`}>
                    <div 
                        className={styles.slideButtonWrapper}
                        onClick={ ()=> {
                            if(slide==0){
                                setSlide(6)
                            }
                            else{
                                setSlide(slide-1)
                            }
                        }}
                    >
                        <img
                            src="/mainPage/leftArrow.svg"
                            alt="Google"
                            className={styles.arrow}
                        />
                    </div>
                    <div className={styles.projectWrapper}>
                        <p className={styles.projectName}>
                            {proiecteSlider[slide].heading}
                        </p>
                        <p className={styles.projectText}>
                            {proiecteSlider[slide].subheading}
                        </p>
                        <a 
                            href={`/proiecte/#${proiecteSlider[slide].href}`} 
                            style={{
                                textDecoration : "none"
                            }}
                            // smooth={true}
                        >
                            <div className={styles.button1}>
                                Descoperă proiectul
                            </div>
                        </a>

                        <div className={styles.buttonsWrapper}>
                            <div 
                                className={slide==0? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(0)}
                            ></div>
                            <div 
                                className={slide==1? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(1)}
                            ></div>
                            <div 
                                className={slide==2? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(2)}
                            ></div>
                            <div 
                                className={slide==3? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(3)}
                            ></div>
                            <div 
                                className={slide==4? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(4)}
                            ></div>
                            <div 
                                className={slide==5? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(5)}
                            ></div>
                            <div 
                                className={slide==6? styles.slideButtonActive : styles.slideButtonInactive}
                                onClick={() => setSlide(6)}
                            ></div>
                        </div>

                    </div>
                    <div 
                        className={styles.slideButtonWrapper}
                        onClick={ ()=> {
                            if(slide==6){
                                setSlide(0)
                            }
                            else{
                                setSlide(slide+1)
                            }
                        }}
                    >
                        <img
                            src="/mainPage/leftArrow.svg"
                            alt="Google"
                            className={styles.secondArrow}
                        />
                    </div>
                </div> */}
                <div className={styles.rightContainer}>
                    <HeroSlider
                        slidingAnimation="left_to_right"
                        orientation="horizontal"
                        initialSlide={1}
                        // onBeforeChange={
                        //     (previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)
                        // }
                        onChange={
                            nextSlide => {
                                setSlide(nextSlide-1)
                            }
                        }
                        // onAfterChange={
                        //     nextSlide => console.log("onAfterChange", nextSlide)
                        // }
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.33)"
                        }}
                        settings={{
                            slidingDuration: 250,
                            slidingDelay: 100,
                            shouldAutoplay: true,
                            shouldDisplayButtons: true,
                            autoplayDuration: 5000,
                            height: mobile ? "500px" : tablet ? "600px" : "700px",
                            width: tablet ? "100vw" : "50vw"
                        }}
                    >

                        <OverlayContainer
                            style={{
                                width: "80%",
                                left: "calc( ( 100% - 80% ) / 2 )"
                            }}
                        >
                            <div className={styles.projectWrapper}>
                                <p className={styles.projectName}>
                                    {proiecteSlider[props.lang][slide].heading}
                                </p>
                                <p className={styles.projectText}>
                                    {proiecteSlider[props.lang][slide].subheading}
                                </p>
                                <a 
                                    href={`${props.langStr}/proiecte/#${proiecteSlider[props.lang][slide].href}`} 
                                    style={{
                                        textDecoration : "none"
                                    }}
                                    // smooth={true}
                                >
                                    <div className={styles.button1}>
                                        {text.mainPage.projectsPage[props.lang].button}
                                    </div>
                                </a>
                            </div>
                        </OverlayContainer>

                        <Slide
                        background={{
                            backgroundImage: slide1,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}>
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide2,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide3,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide4,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide5,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide6,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Slide
                        background={{
                            backgroundImage: slide7,
                            backgroundColor: "black",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: "brightness(40%)",
                            backgroundAnimation: "zoom"
                        }}> 
                        </Slide>

                        <Nav></Nav>


                    </HeroSlider>
                </div>
            </section>
        </div>
    )
}