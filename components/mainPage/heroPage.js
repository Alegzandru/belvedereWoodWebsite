import styles from "../../styles/mainPage/heroPage.module.css"
import Image from 'next/image'
import React, {useState, useEffect} from "react"

export function HeroPage(){

    const [mouseHide, setMouseHide] = useState(false)
    const [slide, setSlide] = useState(0)

    const scrollPosition = () => {
        setMouseHide(window.scrollY < 100 ? false : true)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    return(
        <div 
            className={`
            ${styles.heroPageWrapper} 
            ${slide == 0 ? styles.background1 : ""}
            ${slide == 1 ? styles.background2 : ""}
            ${slide == 2 ? styles.background3 : ""}
            `}
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
                        <div className={styles.button1}>
                            Produse
                        </div>
                        <div className={styles.button2}>
                            Proiecte
                        </div>
                    </div>
                    
                    <div 
                        className={mouseHide ? styles.scrollWrapperHide : styles.scrollWrapper}
                    >
                        <div className={styles.mouseImg}>
                            <Image
                                src="/mainPage/mouse.svg"
                                alt="Mouse"
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className={styles.scrollText}>
                            Scroll
                        </div>
                    </div>

                    <div className={styles.slideButtonsWrapper}>
                        <div 
                            className={ slide==0 ? styles.slideButtonActive : styles.slideButtonInactive}
                            onClick={ ()=> setSlide(0) }
                        ></div>
                        <div 
                            className={ slide==1 ? styles.slideButtonActive : styles.slideButtonInactive}
                            onClick={ ()=> setSlide(1) }
                        ></div>
                        <div 
                            className={ slide==2 ? styles.slideButtonActive : styles.slideButtonInactive}
                            onClick={ ()=> setSlide(2) }
                        ></div>
                    </div>
                </div>
            </section>
        </div>
    )
}