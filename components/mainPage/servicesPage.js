import styles from "../../styles/mainPage/servicesPage.module.css"

export function ServicesPage(){

    return(
        <div className={styles.servicesPageWrapper}>
            <section className={styles.servicesPageSection}>
                <div 
                    className={styles.servicesPageContainer}
                >

                    <div className={styles.row}>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service1.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Producerea parchetului
                            </div>
                        </div>

                        <h2 className={styles.h2}>
                            Serviciile noastre
                        </h2>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service2.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Restaurarea parchetului
                            </div>
                        </div>

                    </div>

                    <div className={styles.row}>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service3.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Executarea pereților din lemn natural
                            </div>
                        </div>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service4.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Montarea plăcilor de parchet
                            </div>
                        </div>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service3.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Realizarea scărilor din lemn masiv
                            </div>
                        </div>

                    </div>

                    <h2 className={styles.h2Mobile}>
                        Serviciile noastre
                    </h2>

                    <div className={styles.rowMobile}>

                        <div
                            className={styles.service}
                            style={{marginRight: "20px"}}
                        >
                            <img 
                                src="/mainPage/service1.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Producerea parchetului
                            </div>
                        </div>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service2.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Restaurarea parchetului
                            </div>
                        </div>

                    </div>

                    <div className={styles.rowMobile}>

                        <div
                            className={styles.service}
                            style={{marginRight: "20px"}}
                        >
                            <img 
                                src="/mainPage/service3.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Realizarea scărilor din lemn masiv
                            </div>
                        </div>

                        <div className={styles.service}>
                            <img 
                                src="/mainPage/service4.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Montarea plăcilor de parchet
                            </div>
                        </div>

                    </div>

                    <div className={styles.rowMobile}>

                        <div 
                            className={styles.service}
                            style={{
                                marginLeft : "calc( ( 100% - ( ( 100% - 16px ) / 2 ) )/2 )",
                                marginRight : "calc( ( 100% - ( ( 100% - 16px ) / 2 ) )/2 )"
                            }}
                        >
                            <img 
                                src="/mainPage/service3.png"
                                className={styles.serviceImg}
                            />
                            <div className={styles.line}>
                            </div>
                            <div className={styles.serviceName}>
                                Executarea pereților din lemn natural
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}