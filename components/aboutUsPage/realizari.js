import styles from "../../styles/despreNoi/realizari.module.css"
import CountUp from 'react-countup';
import {useState} from "react"
import {text} from "../text"

export function Realizari(props){

    const [showStats, setShowStats] = useState(false)

    const scrollPosition = () => {
        setShowStats(window.scrollY > 1300)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>
                        {text.aboutUsPage.realizariPage[props.lang].heading}
                    </h2>

                    <div className={styles.realizariRow}>
                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={11}
                                        duration={7}
                                    />
                                    :
                                    <span>
                                        11
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement1}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={380000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        380.000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement2}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement4Number}
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement4}
                            </div>
                        </div>
                    </div>

                    <div className={styles.realizariRow}>
                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={6000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        6000
                                    </span>
                                } m3
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement3}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={400000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        400.000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement5}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={3000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        3000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement6}
                            </div>
                        </div>
                    </div>

                    <div className={styles.realizariRowMobile}>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={11}
                                        duration={7}
                                    />
                                    :
                                    <span>
                                        11
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement1}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={380000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        380000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement2}
                            </div>
                        </div>

                    </div>

                    <div className={styles.realizariRowMobile}>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={6000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        6000
                                    </span>
                                } m3
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement3}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement4Number}
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement4}
                            </div>
                        </div>

                    </div>

                    <div className={styles.realizariRowMobile}>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={400000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        400000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement5}
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={3000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        3000
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                {text.aboutUsPage.realizariPage[props.lang].achievement6}
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
        </div>
    )
}