import styles from "../../styles/catalog/toateProdusele.module.css"
import {Produs} from "./produs"
import Link from 'next/link'
import {WidthContext} from "../context"
import { useContext } from "react"


export function ToateProdusele(){

    const {width, setWidth} = useContext(WidthContext)
    const mobile = width < 940 ? 1 : 0

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.upperPhotoWrapper}>
                    <h1 className={styles.h1}>
                        Toate produsele
                    </h1>
                    <p className={styles.subheading}>
                        BWP valorifică unicitatea fiecărui arbore și îi alege doar pe cei care prin finisare
                        produc cea mai frumoasă placă de parchet, treaptă sau decor pentru perete.
                        {/* Fiecare etapă este atent supravegheată pentru a putea oferi o gamă largă de
                        produse, conform proiectului de design și preferințelor individuale ale clientului.*/}
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.breadcrumbWrapper}>
                        <Link href="/">
                            <a className={styles.inactiveLink}>
                                Principala
                            </a>
                        </Link>
                        <img
                            src="/proiecte/rightArrowProiecte.svg"
                            alt=""
                            className={styles.arrow}
                        />
                        <span className={styles.activeLink}>Catalog</span>
                    </div>

                    <div className={styles.productRow}>
                        <Link href="/catalog/parchetBradut">
                            <a
                                style={{
                                    textDecoration: "none",
                                }}
                            >
                                <Produs
                                    name="Parchet Brăduț"
                                    imgSrc="/catalog/parchetBradut/bradut1.jpg"
                                    descriere="Rafinamentul și stilul clasic mereu au definit acest tip de parchet, preferat de monarhii europeni pentru a decora dormitoarele și curțile regale."
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
                                    name="Parchet Punte"
                                    imgSrc="/catalog/parchetPunte/Showroom-61.jpg"
                                    descriere="Modelul acestui tip de parchet vine încă din frumoasă perioadă a expedițiilor marine și a corăbiilor din lemn, la puntea cărora erau montate plăci din lemn."
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
                                    name="Parchet Modular"
                                    imgSrc="/catalog/patrateModule/Showroom-95.jpg"
                                    descriere="Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual."
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
                                    name="Scări din lemn masiv"
                                    imgSrc="/catalog/scari/KikuRestaurant-13.jpg"
                                    descriere="Scările din lemn sunt o alegere deosebit de inspirată pentru a completa designul din orice casă și a uni etajele acesteia."
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
                                    name="Pereți din lemn natural"
                                    imgSrc="/catalog/pereti/Aeroport.jpg"
                                    descriere="În căutarea unei abordări originale pentru un décor de interior inedit, în colaborare cu designeri internaționali, noi propunem clienților noștri pereți și tavane din lemn."
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
                                    name="Parchet Brăduț"
                                    imgSrc="/catalog/parchetBradut/bradut1.jpg"
                                    descriere="Rafinamentul și stilul clasic mereu au definit acest tip de parchet, preferat de monarhii europeni pentru a decora dormitoarele și curțile regale."
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
                                    name="Parchet Punte"
                                    imgSrc="/catalog/parchetPunte/Showroom-61.jpg"
                                    descriere="Modelul acestui tip de parchet vine încă din frumoasă perioadă a expedițiilor marine și a corăbiilor din lemn, la puntea cărora erau montate plăci din lemn."
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
                                    name="Parchet Modular"
                                    imgSrc="/catalog/patrateModule/Showroom-95.jpg"
                                    descriere="Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual."
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
                                    name="Scări din lemn masiv"
                                    imgSrc="/catalog/scari/KikuRestaurant-13.jpg"
                                    descriere="Scările din lemn sunt o alegere deosebit de inspirată pentru a completa designul din orice casă și a uni etajele acesteia."
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
                                    name="Pereți din lemn natural"
                                    imgSrc="/catalog/pereti/Aeroport.jpg"
                                    descriere="În căutarea unei abordări originale pentru un décor de interior inedit, în colaborare cu designeri internaționali, noi propunem clienților noștri pereți și tavane din lemn."
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}