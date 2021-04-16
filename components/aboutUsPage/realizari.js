import styles from "../../styles/despreNoi/realizari.module.css"
import CountUp from 'react-countup';
import {useState} from "react"

export function Realizari(){

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
                        Realizările companiei
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
                                ani de activitate
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
                                Metri pătrați de parchet montați
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                TOȚI
                            </div>
                            <div className={styles.realizareText}>
                                Clienții - Satisfăcuți
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
                                Volumul de lemn prelucrat
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
                                Metri pătrați de parchet produs
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
                                Metri Patrați de parchet restaurați
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
                                ani de activitate
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
                                Metri pătrați de parchet montați
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
                                Volumul de lemn prelucrat
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                TOȚI
                            </div>
                            <div className={styles.realizareText}>
                                Clienții - satifacuți
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
                                Metri pătrați de parchet produs
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
                                Metri Patrați de parchet restaurați
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
        </div>
    )
}