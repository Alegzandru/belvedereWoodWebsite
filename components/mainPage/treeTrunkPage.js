import styles from "../../styles/mainPage/treeTrunkPage.module.css"
import Image from 'next/image'
import Link from 'next/link'


export function TreeTrunkPage(){

    return(
        <div className={styles.treeTrunkPageWrapper}>
            <section className={styles.treeTrunkPageSection}>
                <div className={styles.treeTrunkPageContainer}>

                    {/* <div className={styles.ctaWrapper}>
                        <p className={styles.ctaText}>
                            Proiectele noastre
                        </p>
                        <Image
                            src="/mainPage/downArrow2.svg"
                            alt="Săgeată"
                            width={50}
                            height={50}
                        />
                        <div className={styles.button}>
                            Proiecte
                        </div>
                    </div> */}

                    <div className={styles.textWrapper}>
                        <h2 className={styles.h2}>
                            Despre noi:
                        </h2>
                        <div className={styles.subheading}>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan.  */}
                            Forme, desene și structuri inedite ale lucrărilor, la crearea cărora se întâlnesc
                            arta prelucrării manuale a lemnului cu tehnologiile performante. Inspirată de
                            tradiția centenară de producere a parchetului din lemn, compania BWP vine
                            cu o experiență în crearea lucrărilor sale tocmai din Italia. De unde a adus nu

                            doar rafinament și calitate înaltă, dar și abordare inovativă în procesul de
                            prelucrare a plăcii de lemn.
                        </div>
                        <Link href="/despre-noi">
                            <a style={{textDecoration: "none"}}>
                                <div className={styles.button1}>
                                    Află mai mult
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.treeTrunkWrapper}>
                        <div className={styles.circle1}>
                            Calitate
                            <div className={styles.circle2}>
                                Durabilitate
                                <div className={styles.circle3}>
                                    Veridicitate
                                    <div className={styles.circle4}>
                                        Loialitate
                                        <div className={styles.logoImg}>
                                            <Image
                                                src="/mainPage/BWPlogoBlack.png"
                                                alt="Logo Belvedere Wood"
                                                width={112}
                                                height={112}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={styles.ctaWrapper}>
                        <p className={styles.ctaText}>
                            Produsele noastre
                        </p>
                        <Image
                            src="/mainPage/downArrow2.svg"
                            alt="Săgeată"
                            width={50}
                            height={50}
                        />
                        <div className={styles.button}>
                            Catalog
                        </div>
                    </div> */}

                </div>
            </section>
        </div>
    )
}