import styles from "../../styles/despreNoi/istoria.module.css"
import Fade from 'react-reveal/Fade';


export function Istoria(){

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>
                        Istoria Companiei
                    </h2>
                    <div className={styles.subheading}>
                        Fondat în :
                    </div>
                    <div className={styles.line}>
                    </div>
                    <div className={styles.year}>
                        2011
                    </div>

                    <Fade left>
                        <div className={styles.eventWrapperLeft}>
                            <div className={styles.eventBoxLeft}>
                                <div className={styles.eventText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum augue. Aenean tincidunt.
                                </div>
                                <div className={styles.eventYear}>
                                    2011
                                </div>
                            </div>
                            <div className={styles.eventLine}>
                            </div>
                            <div className={styles.eventCircle}></div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className={styles.eventWrapperRight}>
                            <div className={styles.eventCircle}></div>
                            <div className={styles.eventLine}>
                            </div>
                            <div className={styles.eventBoxRight}>
                                <div className={styles.eventYear}>
                                    2011
                                </div>
                                <div className={styles.eventText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum augue. Aenean tincidunt.
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className={styles.eventWrapperLeft}>
                            <div className={styles.eventBoxLeft}>
                                <div className={styles.eventText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum augue. Aenean tincidunt.
                                </div>
                                <div className={styles.eventYear}>
                                    2011
                                </div>
                            </div>
                            <div className={styles.eventLine}>
                            </div>
                            <div className={styles.eventCircle}></div>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className={styles.eventWrapperRight}>
                            <div className={styles.eventCircle}></div>
                            <div className={styles.eventLine}>
                            </div>
                            <div className={styles.eventBoxRight}>
                                <div className={styles.eventYear}>
                                    2011
                                </div>
                                <div className={styles.eventText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum augue. Aenean tincidunt.
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className={styles.eventWrapperLeft}>
                            <div className={styles.eventBoxLeft}>
                                <div className={styles.eventText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed rutrum augue. Aenean tincidunt.
                                </div>
                                <div className={styles.eventYear}>
                                    2011
                                </div>
                            </div>
                            <div className={styles.eventLine}>
                            </div>
                            <div className={styles.eventCircle}></div>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    )
}