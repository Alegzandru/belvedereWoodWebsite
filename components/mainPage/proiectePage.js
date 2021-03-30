import styles from "../../styles/mainPage/proiectePage.module.css"
import {useState} from "react"

export function ProiectePage(){

    const[slide, setSlide] = useState(0)

    return(
        <div className={styles.proiectePageWrapper}>
            <section className={styles.proiectePageSection}>
                <div className={styles.leftContainer}>
                    <img
                        src="/mainPage/BWPlogoGold.png"
                        alt="Google"
                        width={150}
                        height={150}
                        className={styles.logo}
                    />
                    <p className={styles.leftContainerText}>
                        Proiecte
                    </p>
                </div>
                <div className={`${styles.rightContainer} ${
                    slide==0? styles.slide1 :
                    slide==1? styles.slide2 :
                    slide==2? styles.slide3 :
                    slide==3? styles.slide4 :
                    slide==4? styles.slide5 : styles.empty
                }`}>
                    <div 
                        className={styles.slideButtonWrapper}
                        onClick={ ()=> {
                            if(slide==0){
                                setSlide(4)
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
                            Manuc Bei
                        </p>
                        <p className={styles.projectText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis.
                        </p>
                        <div className={styles.button1}>
                            Descoperă proiectul
                        </div>

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
                        </div>

                    </div>
                    <div 
                        className={styles.slideButtonWrapper}
                        onClick={ ()=> {
                            if(slide==4){
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
                </div>
            </section>
        </div>
    )
}