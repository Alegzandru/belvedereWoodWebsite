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
                                    <Link href="/contacte">
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
                                    <Link href="/contacte">
                                        <a className={styles.desktopLink}>
                                            strada Uzinelor 15/4
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/PhoneIcon.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <Link href="/contacte">
                                        <a className={styles.desktopLink}>
                                            +37379123456
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/InstagramIcon2.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <Link href="/contacte">
                                        <a className={styles.desktopLink}>
                                            Belvedere Wood
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/FacebookIcon2.svg"
                                        alt="Locația"
                                        width={14}
                                        height={14}
                                        className={styles.contactsIcon}
                                    />
                                    <Link href="/contacte">
                                        <a className={styles.desktopLink}>
                                            Belvedere Wood
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            <div className={styles.button}>
                                +373 79 123 456
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerLine}></div>
                    <div className={styles.downTextContainer}>
                        <div className={styles.copyright}>
                            © 2021 SRL «Belvedere»
                        </div>
                        <div>
                            Представленная на сайте информация, в т.ч. стоимости складов, носит информационный характер и не является публичной офертой. Все права защищены.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}