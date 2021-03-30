import styles from "../../styles/mainPage/avantajePage.module.css"
import {Avantaj} from './avantaj.js'

export function AvantajePage(){

    return(
        <div className={styles.avantajePageWrapper}>
            <section className={styles.avantajePageSection}>
                <div className={styles.avantajePageContainer}>
                    <h2 className={styles.h2}>
                        De ce să alegi BWP?
                    </h2>
                        <div className={styles.avantajeRow}>
                            <Avantaj
                                imgSrc="/mainPage/icon.svg"
                                text="Producători autohtoni și lideri la export"
                                hoverSrc="/mainPage/icon1White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj2.svg"
                                text="Echipă de meșteri experimentată"
                                hoverSrc="/mainPage/icon2White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj3.svg"
                                text="Responsabilitate față de mediu"
                                hoverSrc="/mainPage/icon3White.svg"
                            ></Avantaj>
                        </div>
                        <div className={styles.avantajeRow}>
                            <Avantaj
                                imgSrc="/mainPage/avantaj4.svg"
                                text="Tehnică performantă și utilaje italiene"
                                hoverSrc="/mainPage/icon4White.svg"
                            ></Avantaj>
                            
                            <Avantaj
                                imgSrc="/mainPage/avantaj5.svg"
                                text="Flexibilitate la elaborarea ofertei"
                                hoverSrc="/mainPage/icon5White.svg"
                            ></Avantaj>

                            <Avantaj
                                imgSrc="/mainPage/avantaj6.svg"
                                text="Calitate certificată la nivel european"
                                hoverSrc="/mainPage/icon6White.svg"
                            ></Avantaj>
                        </div>
                </div>
            </section>
        </div>
    )
}