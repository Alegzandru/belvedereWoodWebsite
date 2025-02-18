import styles from "../../styles/despreNoi/istoria.module.css"
import {Fade} from 'react-awesome-reveal';
import {text} from "../text"


export function Istoria(props){

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>
                        {text.aboutUsPage.istoriaPage[props.lang].heading}
                    </h2>
                    <div className={styles.subheading}>
                        {text.aboutUsPage.istoriaPage[props.lang].subheading}
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
                                    {text.aboutUsPage.istoriaPage[props.lang].year1Event}
                                </div>
                                <div className={styles.eventYear}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year1}
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
                                    {text.aboutUsPage.istoriaPage[props.lang].year2}
                                </div>
                                <div className={styles.eventText}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year2Event}
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className={styles.eventWrapperLeft}>
                            <div className={styles.eventBoxLeft}>
                            <div className={styles.eventText}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year3Event}
                                </div>
                                <div className={styles.eventYear}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year3}
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
                                    {text.aboutUsPage.istoriaPage[props.lang].year4}
                                </div>
                                <div className={styles.eventText}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year4Event}
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className={styles.eventWrapperLeft}>
                            <div className={styles.eventBoxLeft}>
                                <div className={styles.eventText}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year5Event}
                                </div>
                                <div className={styles.eventYear}>
                                    {text.aboutUsPage.istoriaPage[props.lang].year5}
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