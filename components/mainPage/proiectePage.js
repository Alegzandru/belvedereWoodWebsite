import styles from "../../styles/mainPage/proiectePage.module.css"
import { useState} from "react"
import {proiecteSlider} from "./sliderContent"
import {text} from "../text"
import Image from 'next/image'
import Slider from "react-slick";

export function ProiectePage(props){
    const [slide, setSlide] = useState(0)

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
                <div className={styles.rightContainer}>
                    <Slider 
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay
                        afterChange={(index) => {setSlide(index)}}        
                        autoplaySpeed={70000}  
                        style={{width: '100%', height: '100%'}}
                        arrows={false}
                    >
                        <img src={slide1} className={`${styles.image} projects`} />
                        <img src={slide2} className={`${styles.image} projects`} />
                        <img src={slide3} className={`${styles.image} projects`} />
                        <img src={slide4} className={`${styles.image} projects`} />
                        <img src={slide5} className={`${styles.image} projects`} />
                        <img src={slide6} className={`${styles.image} projects`} />
                        <img src={slide7} className={`${styles.image} projects`} />
                    </Slider>
                    <div className={styles.projectWrapper}>
                        <p className={styles.projectName}>
                            {proiecteSlider[props.lang][slide].heading}
                        </p>
                        <p className={styles.projectText}>
                            {proiecteSlider[props.lang][slide].subheading}
                        </p>
                        <a 
                            href={`${props.langStr}/proiecte/#${proiecteSlider[props.lang][slide].href}`} 
                            style={{textDecoration : "none"}}
                        >
                            <div className={styles.button1}>
                                {text.mainPage.projectsPage[props.lang].button}
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}