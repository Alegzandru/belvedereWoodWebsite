import styles from "../../styles/proiecte/descriereaProiectelor.module.css"

export function DescriereaProiectelor(){

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>

                    <div name="muzeul" className={styles.projectRowLeft}>
                        <img
                            src="/proiecte/muzeulNationalDeArta.jpg"
                            alt="Muzeul Național de Artă"
                            className={styles.projectImgLeft}
                        />
                        <div className={styles.textWrapper}>
                            <h2 className={styles.h2}>
                                Muzeul Național de Artă
                            </h2>
                            <p className={styles.subheading}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                    <div name="castelMimi" className={styles.projectRowRight}>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.h2}>
                                Castel Mimi
                            </h2>
                            <p className={styles.subheading}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                        <img
                            src="/proiecte/castelMimi.jpg"
                            alt="Castel Mimi"
                            className={styles.projectImgRight}
                        />
                    </div>

                    <div name="manucBei" className={styles.projectRowLeft}>
                        <img
                            src="/proiecte/ManucBei.png"
                            alt="Manuc Bei"
                            className={styles.projectImgLeft}
                        />
                        <div className={styles.textWrapper}>
                            <h2 className={styles.h2}>
                                Manuc Bei
                            </h2>
                            <p className={styles.subheading}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                    <div name="porteryard" className={styles.projectRowRight}>
                        <div className={styles.textWrapper}>
                            <h2 className={styles.h2}>
                                Cafe Porter Yard
                            </h2>
                            <p className={styles.subheading}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                        <img
                            src="/proiecte/porteryard.jpg"
                            alt="Cafe Porter Yard"
                            className={styles.projectImgRight}
                        />
                    </div>

                    <div name="rozmarin" className={styles.projectRowLeft}>
                        <img
                            src="/proiecte/rozmarin.jpg"
                            alt="Cafe Rozmarin"
                            className={styles.projectImgLeft}
                        />
                        <div className={styles.textWrapper}>
                            <h2 className={styles.h2}>
                                Cafe Rozmarin
                            </h2>
                            <p className={styles.subheading}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}