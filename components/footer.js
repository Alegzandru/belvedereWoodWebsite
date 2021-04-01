import styles from "../styles/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'


export function Footer(){

    return(
        <div className={styles.footerWrapper}>
            <section className={styles.footerSection}>
                <div className={styles.footerContainer}>
                    <div className={styles.upperContainer}>
                        <div className={styles.leftContainer}>
                            <img
                                src="/mainPage/BWPlogoGold.png"
                                alt="Logo Belvedere Wood"
                                className={styles.logo}
                                width={112}
                                height={112}
                            />
                            <div className={styles.navDiv}>
                                <div className={styles.footerAccentText}>
                                    Navigare
                                </div>
                                <div className={styles.footerText}>
                                    <Link href="/">
                                        <a className={styles.desktopLink}>
                                            Principala
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href="/despre-noi">
                                        <a className={styles.desktopLink}>
                                            Despre noi
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href="/catalog">
                                        <a className={styles.desktopLink}>
                                            Catalog
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href="/proiecte">
                                        <a className={styles.desktopLink}>
                                            Proiecte
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href="/contactsPage">
                                        <a className={styles.desktopLink}>
                                            Contacte
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.contactsDiv}>
                                <div className={styles.footerAccentText}>
                                    Contacte
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/PlaceIcon2.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <a 
                                        className={styles.desktopLink}
                                        target="blank"
                                        href="https://www.google.com/maps/dir/47.0414581,28.8280053/47.0140443,28.8749886/@47.0284079,28.8164507,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
                                    >
                                        strada Uzinelor 15/4
                                    </a>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/PhoneIcon.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <a 
                                        className={styles.desktopLink}
                                        href="tel:37379123456"
                                        style={{
                                            textDecoration: "none"
                                        }}
                                    >
                                        +37369239184
                                    </a>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/InstagramIcon2.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <a 
                                        className={styles.desktopLink}
                                        href="https://www.instagram.com/parchet_belvederewood/"
                                        target="blank"
                                    >
                                        Belvedere Wood
                                    </a>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/FacebookIcon2.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <a 
                                        className={styles.desktopLink}
                                        href="https://www.facebook.com/belvedereparquet"
                                        target="blank"
                                    >
                                        Belvedere Wood
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            <a 
                                className={styles.button}
                                href="tel:37369239184"
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                +373 69 239 184
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerLine}></div>
                    <div className={styles.downTextContainer}>
                        <div className={styles.copyright}>
                            © 2021 SRL «RO & TI COLOR»
                        </div>
                        <div>
                            Informația prezentată pe site, inclusiv costul parchetului are doar scop informativ și nu este o ofertă publică. Toate drepturile rezervate.                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}