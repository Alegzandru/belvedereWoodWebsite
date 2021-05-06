import styles from "../styles/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {text} from "./text"
import Fade from 'react-reveal/Fade';


export function Footer(props){

    return(
        <div className={styles.footerWrapper}>
            <section className={styles.footerSection}>
                <div className={styles.footerContainer}>
                    <div className={styles.upperContainer}>
                        <div className={styles.leftContainer}>
                            <div className={styles.navDiv}>
                                <div className={styles.footerAccentText}>
                                    {text.layout[props.lang].navigation}
                                </div>
                                <div className={styles.footerText}>
                                    <Link href={`${props.langStr}/`}>
                                        <a className={styles.desktopLink}>
                                            {text.layout[props.lang].mainPage}
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href={`${props.langStr}/despre-noi`}>
                                        <a className={styles.desktopLink}>
                                            {text.layout[props.lang].aboutUs}
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href={`${props.langStr}/catalog`}>
                                        <a className={styles.desktopLink}>
                                            {text.layout[props.lang].catalog}
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href={`${props.langStr}/proiecte`}>
                                        <a className={styles.desktopLink}>
                                            {text.layout[props.lang].proiecte}
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.footerText}>
                                    <Link href={`${props.langStr}/contacte`}>
                                        <a className={styles.desktopLink}>
                                            {text.layout[props.lang].contacte}
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.logo}>
                                <Image
                                    src="/mainPage/BWPlogoGold.png"
                                    alt="Logo Belvedere Wood Parquet"
                                    layout="fill"
                                />
                            </div>

                            <div className={styles.contactsDiv}>
                                <div className={styles.footerAccentText}>
                                    {text.layout[props.lang].contacte}
                                </div>
                                <div className={styles.contactsBox}>
                                    <img
                                        src="/mainPage/PlaceIcon2.svg"
                                        alt="Locația"
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
                            {text.layout[props.lang].footerText}
                        </div>
                    </div>
                    <Fade bottom>
                        <div className={styles.devContainer}>
                            <img 
                                src="/devImg.svg"
                                className={styles.devImg}
                                alt=""
                            ></img>
                            <a 
                                href="https://lira.md/"
                                target="blank"
                                style={{
                                    textDecoration: "underline",
                                    color : "#9A9A9A"
                                }}
                            >
                                {text.layout[props.lang].devText}
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    )
}