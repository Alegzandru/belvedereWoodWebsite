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
                                        href="tel:+37360490505"
                                        style={{
                                            textDecoration: "none"
                                        }}
                                    >
                                    0 (60) 490505
                                    </a>
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
                                href="tel:37360490505"
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                               0 (60) 490505
                            </a>

                                     <a 
                                className={styles.button}
                                href="tel:37369239184"
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                 0 (69) 239184
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
                        <a 
                            href="https://lira.md/"
                            target="blank"
                            style={{
                                textDecoration: "none",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent : "flex-start"
                            }}
                        >
                            <div className={styles.dev}>
                                <div className={styles.devContainer}>
                                    <div>
                                        Crafted by
                                    </div>
                                    <img 
                                        src="/lira.svg"
                                        className={styles.devImg}
                                        alt=""
                                    ></img>
                                    <div className={styles.lira}>
                                        Lira
                                    </div>
                                </div>
                                <div className={styles.liraLine}/>
                            </div>
                        </a>
                    </Fade>
                </div>
            </section>
        </div>
    )
}
