import styles from "../../styles/catalog/toateProdusele.module.css"
import {Produs} from "./produs"
import Link from 'next/link'


export function ToateProdusele(){

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
                                    textDecoration: "none"
                                }}
                            >
                                <Produs
                                    name="Parchet Bradut"
                                    imgSrc="/catalog/backgroundParchetBradut.png"
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
                                    imgSrc="/catalog/parchetPunte/Aeroport-8.jpg"
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
                                    name="Patrate module"
                                    imgSrc="/catalog/patrateModule/ManucBei-16.jpg"
                                    descriere="Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual."
                                ></Produs>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.productRow}>
                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>

                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>

                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>
                    </div>

                    <div className={styles.productRowMobile}>
                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>

                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>
                    </div>

                    <div className={styles.productRowMobile}>
                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>

                        <Produs
                            name="Parchet"
                            imgSrc="/mainPage/background1.png"
                            descriere="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis."
                        ></Produs>
                    </div>

                </div>
            </section>
        </div>
    )
}