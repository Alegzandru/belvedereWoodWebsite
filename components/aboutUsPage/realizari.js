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
                                        end={9}
                                        duration={5}
                                    />
                                    :
                                    <span>
                                        9
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
                                        end={14000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        14000
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
                                        end={7500}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        7500
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                Metri pătrați exportați
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={2000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        2000
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
                                        end={9}
                                        duration={5}
                                    />
                                    :
                                    <span>
                                        9
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
                                        end={14000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        14000
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
                                        end={7500}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        7500
                                    </span>
                                }
                            </div>
                            <div className={styles.realizareText}>
                                Metri pătrați exportați
                            </div>
                        </div>

                        <div className={styles.realizareBox}>
                            <div className={styles.realizareNumber}>
                                {
                                    showStats?
                                    <CountUp
                                        end={2000}
                                        duration={10}
                                    />
                                    :
                                    <span>
                                        2000
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