import { useState } from "react";
import styles from "../../styles/proiecte/toateProiectele.module.css"
import Link from 'next/link'


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function ToateProiectele(){

    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)
    const [hovered3, setHovered3] = useState(false)
    const [hovered4, setHovered4] = useState(false)
    const [hovered5, setHovered5] = useState(false)
    

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textWrapper}>
                        <h1 className={styles.h1}>
                            Proiectele noastre
                        </h1>
                        <p className={styles.subheading}>
                        Lucrările executate de noi pot asigura, atât confortul din casa dvs și a
                        vecinilor tăi, cât și luxul și confortul din destinațiile de importanță națională
                        sau restaurantele îndrăgite.
                        Vezi cum proiectele marca BWP s-au înscris atât de organic și natural în
                        interierul acestor încăperi, încât au devenit un tot întreg.
                        </p>
                        <div className={styles.button1}>
                            Vezi toate proiectele
                        </div>
                    </div>

                    <div className={styles.photoWrapper}>
                        
                        <Link href="/proiecte/#muzeul">
                            <a style={{
                                width: "100%",
                                textDecoration: "none"
                            }}>
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered1(true)}
                                    onMouseLeave={ ()=> setHovered1(false)}
                                >
                                    <div 
                                        className={styles.projectName}
                                        style={{
                                            display: hovered1? "block" : "none"
                                        }}
                                    >
                                        Muzeul Național de Artă 
                                    </div>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered1? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered1? "block" : "none"
                                        }}
                                    ></img>
                                    <img
                                        src="/proiecte/muzeulNationalDeArta.jpg"
                                        alt="Muzeul Național de Artă"
                                        className={styles.projectImg}
                                    />
                                </div>
                            </a>
                        </Link>


                        <Link href="/proiecte/#castelMimi">
                            <a style={{
                                width: "100%",
                                textDecoration: "none"
                            }}>
                                <div 
                                    className={styles.photoContainerLeft}
                                    onMouseEnter={ ()=> setHovered2(true)}
                                    onMouseLeave={ ()=> setHovered2(false)}
                                >
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered2? "block" : "none"
                                        }}
                                    ></img>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered2? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/castelMimi.jpg"
                                        alt="Castel Mimi"
                                        className={styles.projectImg}
                                    />
                                    <div 
                                        className={styles.projectName}
                                        style={{
                                            display: hovered2? "block" : "none"
                                        }}
                                    >
                                        Castel Mimi 
                                    </div>
                                </div>
                            </a>
                        </Link>


                        <Link href="/proiecte/#manucBei">
                            <a style={{
                                width: "100%",
                                textDecoration: "none"
                            }}>
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered3(true)}
                                    onMouseLeave={ ()=> setHovered3(false)}
                                >
                                    <div 
                                        className={styles.projectName}
                                        style={{
                                            display: hovered3? "block" : "none"
                                        }}
                                    >
                                        Manuc Bei
                                    </div>
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered3? "block" : "none"
                                        }}
                                    ></img>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered3? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/ManucBei.png"
                                        alt="Manuc Bei"
                                        className={styles.projectImg}
                                    />
                                </div>
                            </a>
                        </Link>


                        <Link href="/proiecte/#porteryard">
                            <a style={{
                                width: "100%",
                                textDecoration: "none"
                            }}>
                                <div 
                                    className={styles.photoContainerLeft}
                                    onMouseEnter={ ()=> setHovered4(true)}
                                    onMouseLeave={ ()=> setHovered4(false)}
                                >
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered4? "block" : "none"
                                        }}
                                    ></img>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered4? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/porteryard.jpg"
                                        alt="Porteryard"
                                        className={styles.projectImg}
                                    />
                                    <div 
                                        className={styles.projectName}
                                        style={{
                                            display: hovered4? "block" : "none"
                                        }}
                                    >
                                        Porteryard
                                    </div>
                                </div>
                            </a>
                        </Link>


                        <Link href="/proiecte/#porteryard">
                            <a style={{
                                width: "100%",
                                textDecoration: "none"
                            }}>
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered5(true)}
                                    onMouseLeave={ ()=> setHovered5(false)}
                                >
                                    <div 
                                        className={styles.projectName}
                                        style={{
                                            display: hovered5? "block" : "none"
                                        }}
                                    >
                                        Restaurant Rozmarin
                                    </div>
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered5? "block" : "none"
                                        }}
                                    ></img>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered5? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/rozmarin.jpg"
                                        alt="Restaurant Rozmarin"
                                        className={styles.projectImg}
                                    />
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={styles.photoWrapperMobile}>
                        <div className={styles.photoColumnMobile}>
                            <Link href="/proiecte/#castelMimi">
                                <a style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}>
                                    <div className={styles.photoBoxMobile}>
                                        <div className={styles.projectNameMobile}>
                                            Castel Mimi
                                        </div>
                                        <img
                                            src="/proiecte/castelMimi.jpg"
                                            alt="Castel Mimi"
                                            className={styles.projectImgMobile}
                                        >
                                        </img>
                                    </div>
                                </a>
                            </Link>


                            <Link href="/proiecte/#porteryard">
                                <a style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}>
                                    <div className={styles.photoBoxMobile}>
                                        <div className={styles.projectNameMobile}>
                                            Cafe Porter Yard
                                        </div>
                                        <img
                                            src="/proiecte/porteryard.jpg"
                                            alt="Cafe Porter Yard"
                                            className={styles.projectImgMobile}
                                        >
                                        </img>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.photoColumnMobile}>

                            <Link href="/proiecte/#muzeul">
                                <a style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}>
                                    <div className={styles.photoBoxMobile}>
                                        <div className={styles.projectNameMobile}>
                                            Muzeul Național de Artă
                                        </div>
                                        <img
                                            src="/proiecte/muzeulNationalDeArta.jpg"
                                            alt="Muzeul Național de Artă"
                                            className={styles.projectImgMobile}
                                        >
                                        </img>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.photoColumnMobile}>

                            <Link href="/proiecte/#manucBei">
                                <a style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}>
                                    <div className={styles.photoBoxMobile}>
                                        <div className={styles.projectNameMobile}>
                                            Manuc Bei
                                        </div>
                                        <img
                                            src="/proiecte/ManucBei.png"
                                            alt="Manuc Bei"
                                            className={styles.projectImgMobile}
                                        >
                                        </img>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/proiecte/#rozmarin">
                                <a style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}>
                                    <div className={styles.photoBoxMobile}>
                                        <div className={styles.projectNameMobile}>
                                            Cafe Rozmarin
                                        </div>
                                        <img
                                            src="/proiecte/rozmarin.jpg"
                                            alt="Cafe Rozmarin"
                                            className={styles.projectImgMobile}
                                        >
                                        </img>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}