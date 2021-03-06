import styles from "../../styles/proiecte/parteneri.module.css"
import Link from 'next/link'
import {text} from "../text"


export function Parteneri(props){

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h3 className={styles.h3}>
                        {text.proiectePage[props.lang].parteneri}
                    </h3>
                    <div className={styles.line1}>
                    </div>
                    <div className={styles.scroller}>
                        <a target="blank" href="http://www.tover.com/?lang=en">
                            <img
                                src="/proiecte/logo1.png"
                                alt="Tover"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.giancol.it/">
                            <img
                                src="/proiecte/logo2.png"
                                alt="Giancol"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.iwparquet.it/en/">
                            <img
                                src="/proiecte/logo3.png"
                                alt="Iw parquet"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.ticinoparquet.ch/">
                            <img
                                src="/proiecte/logo5.png"
                                alt="Ticino Parquet"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="http://www.artizana.md/">
                            <img
                                src="/proiecte/logo6.png"
                                alt="Artizana"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://veroceramica.md/">
                            <img
                                src="/proiecte/logo7.png"
                                alt="Vero ceramics"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://amelylux.md/">
                            <img
                                src="/proiecte/logo8.png"
                                alt="Amelyux"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.arutindecor.com/">
                            <img
                                src="/proiecte/logo9.png"
                                alt="Arutin"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://abandpartners.net/">
                            <img
                                src="/proiecte/logo10.png"
                                alt="AB and partners"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="http://www.tover.com/?lang=en">
                            <img
                                src="/proiecte/logo1.png"
                                alt="Tover"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.giancol.it/">
                            <img
                                src="/proiecte/logo2.png"
                                alt="Giancol"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.iwparquet.it/en/">
                            <img
                                src="/proiecte/logo3.png"
                                alt="Iw parquet"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://www.ticinoparquet.ch/">
                            <img
                                src="/proiecte/logo5.png"
                                alt="Ticino Parquet"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="http://www.artizana.md/">
                            <img
                                src="/proiecte/logo6.png"
                                alt="Artizana"
                                className={styles.img}
                            />
                        </a>
                        <a target="blank" href="https://veroceramica.md/">
                            <img
                                src="/proiecte/logo7.png"
                                alt="Vero ceramics"
                                className={styles.img}
                            />
                        </a>
                    </div>
                    <div className={styles.line2}>
                    </div>

                    <h3 className={styles.h3}>
                        {text.proiectePage[props.lang].ctaHeading}
                    </h3>

                    <div className={styles.buttonsWrapper}>
                        <Link target="blank" href={`${props.langStr}/catalog`}>
                            <a
                                style={{textDecoration:"none"}}
                                className={styles.button1}
                            >
                                {text.proiectePage[props.lang].button1}
                            </a>
                        </Link>
                        <Link target="blank"  href={`${props.langStr}/contacte`}>
                            <a 
                                style={{textDecoration:"none"}}
                                className={styles.button2}
                            >
                                {text.proiectePage[props.lang].button2}
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}