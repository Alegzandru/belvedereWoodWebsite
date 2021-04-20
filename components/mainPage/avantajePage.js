import styles from "../../styles/mainPage/avantajePage.module.css"
import {Avantaj} from './avantaj.js'
import {text} from "../text"

export function AvantajePage(props){

    return(
        <div className={styles.avantajePageWrapper}>
            <section className={styles.avantajePageSection}>
                <div className={styles.avantajePageContainer}>
                    <h2 className={styles.h2}>
                        {text.mainPage.avantajePage[props.lang].heading}
                    </h2>
                        <div className={styles.avantajeRow}>
                            <Avantaj
                                imgSrc="/mainPage/icon.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj1}
                                hoverSrc="/mainPage/icon1White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj2.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj2}
                                hoverSrc="/mainPage/icon2White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj3.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj3}
                                hoverSrc="/mainPage/icon3White.svg"
                            ></Avantaj>
                        </div>
                        <div className={styles.avantajeRow}>
                            <Avantaj
                                imgSrc="/mainPage/avantaj4.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj4}
                                hoverSrc="/mainPage/icon4White.svg"
                            ></Avantaj>
                            
                            <Avantaj
                                imgSrc="/mainPage/avantaj5.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj5}
                                hoverSrc="/mainPage/icon5White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj6.svg"
                                text={text.mainPage.avantajePage[props.lang].avantaj6}
                                hoverSrc="/mainPage/icon6White.svg"
                            ></Avantaj>
                        </div>
                </div>
            </section>
        </div>
    )
}