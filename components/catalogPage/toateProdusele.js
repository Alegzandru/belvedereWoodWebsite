import styles from "../../styles/catalog/toateProdusele.module.css"
import {Produs} from "./produs"
import Link from 'next/link'
import {WidthContext} from "../context"
import { useContext } from "react"
import {text} from "../text"


export function ToateProdusele(props){

    const {width, setWidth} = useContext(WidthContext)
    const mobile = width < 940 ? 1 : 0

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.upperPhotoWrapper}>
                    <h1 className={styles.h1}>
                        {text.catalogPage.toateProdusele[props.lang].heading}
                    </h1>
                    <p className={styles.subheading}>
                        {text.catalogPage.toateProdusele[props.lang].description}
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.breadcrumbWrapper}>
                        <Link href="/">
                            <a className={styles.inactiveLink}>
                                {text.catalogPage.toateProdusele[props.lang].link1}
                            </a>
                        </Link>
                        <img
                            src="/proiecte/rightArrowProiecte.svg"
                            alt=""
                            className={styles.arrow}
                        />
                        <span className={styles.activeLink}>
                            {text.catalogPage.toateProdusele[props.lang].link2}
                        </span>
                    </div>

                    <div className={styles.productRow}>
                        <Link href="/catalog/parchetBradut">
                            <a
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product1}
                                    imgSrc="/catalog/parchetBradut/bradut1.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product1Description}
                                ></Produs>
                            </a>
                        </Link>

                        <Link href="/catalog/parchetPunte">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product2}
                                    imgSrc="/catalog/parchetPunte/Showroom-61.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product2Description}
                                ></Produs>
                            </a>
                        </Link>


                        <Link href="/catalog/patrateModule">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product3}
                                    imgSrc="/catalog/patrateModule/Showroom-95.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product3Description}
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                    <div 
                        className={styles.productRow}
                        style={{
                            justifyContent: "flex-start"
                        }}
                    >
                        <Link href="/catalog/scari">
                            <a
                                style={{
                                    textDecoration: "none",
                                    marginRight: "20px"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product4}
                                    imgSrc="/catalog/scari/KikuRestaurant-13.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product4Description}
                                ></Produs>
                            </a>
                        </Link>

                        <Link href="/catalog/pereti">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product5}
                                    imgSrc="/catalog/pereti/Aeroport.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product5Description}
                                ></Produs>
                            </a>
                        </Link>

                    </div>

                    <div className={styles.productRowMobile}>
                        <Link href="/catalog/parchetBradut">
                            <a
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product1}
                                    imgSrc="/catalog/parchetBradut/bradut1.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product1Description}
                                ></Produs>
                            </a>
                        </Link>

                        <Link href="/catalog/parchetPunte">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product2}
                                    imgSrc="/catalog/parchetPunte/Showroom-61.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product2Description}
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.productRowMobile}>
                        <Link href="/catalog/patrateModule">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product3}
                                    imgSrc="/catalog/patrateModule/Showroom-95.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product3Description}
                                ></Produs>
                            </a>
                        </Link>

                        <Link href="/catalog/scari">
                            <a
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product4}
                                    imgSrc="/catalog/scari/KikuRestaurant-13.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product4Description}
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.productRowMobile}>
                        <Link href="/catalog/pereti">
                            <a
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name={text.catalogPage.toateProdusele[props.lang].product5}
                                    imgSrc="/catalog/pereti/Aeroport.jpg"
                                    descriere={text.catalogPage.toateProdusele[props.lang].product5Description}
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}