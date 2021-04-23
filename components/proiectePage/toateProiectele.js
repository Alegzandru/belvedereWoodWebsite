import { useState } from "react";
import styles from "../../styles/proiecte/toateProiectele.module.css"
import Link from 'next/link'
import {Link as LinkScroll} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import {text} from "../text"


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export function ToateProiectele(props){

    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)
    const [hovered3, setHovered3] = useState(false)
    const [hovered4, setHovered4] = useState(false)
    const [hovered5, setHovered5] = useState(false)
    const [hovered6, setHovered6] = useState(false)
    const [hovered7, setHovered7] = useState(false)
    

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.textWrapper}>
                        <h1 className={styles.h1}>
                            {text.proiectePage[props.lang].heading}
                        </h1>
                        <p className={styles.subheading}>
                            {text.proiectePage[props.lang].subheading}
                        </p>
                            <LinkScroll 
                                to="muzeul" 
                                smooth={true}
                            >
                                <div className={styles.button1}>
                                    {text.proiectePage[props.lang].button}
                                </div>
                            </LinkScroll>
                    </div>

                    <div className={styles.photoWrapper}>
                        
                        <LinkScroll 
                            to="muzeul"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered1(true)}
                                    onMouseLeave={ ()=> setHovered1(false)}
                                >
                                    <Fade left>
                                        <div
                                            className={styles.projectName}
                                            style={{
                                                display: hovered1? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project1} 
                                        </div>
                                    </Fade>
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
                                        src="/proiecte/muzeul1.jpg"
                                        alt="Muzeul Național de Artă"
                                        className={styles.projectImg}
                                    />
                                </div>
                        </LinkScroll>


                        <LinkScroll 
                            to="castelMimi"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
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
                                        src="/proiecte/mimi1.jpg"
                                        alt="Castel Mimi"
                                        className={styles.projectImg}
                                    />
                                    <Fade right>
                                        <div 
                                            className={styles.projectName}
                                            style={{
                                                display: hovered2? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project2} 
                                        </div>
                                    </Fade>
                                </div>
                        </LinkScroll>


                        <LinkScroll 
                            to="manucBei"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered3(true)}
                                    onMouseLeave={ ()=> setHovered3(false)}
                                >
                                    <Fade left>
                                        <div 
                                            className={styles.projectName}
                                            style={{
                                                display: hovered3? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project3} 
                                        </div>
                                    </Fade>
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
                        </LinkScroll>


                        <LinkScroll 
                            to="phiVegan"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
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
                                        src="/mainPage/veganClient.jpg"
                                        alt="Vegan Phi Restaurant"
                                        className={styles.projectImg}
                                    />
                                    <Fade right>
                                        <div 
                                            className={styles.projectName}
                                            style={{
                                                display: hovered4? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project4} 
                                        </div>
                                    </Fade>
                                </div>
                        </LinkScroll>


                        <LinkScroll 
                            to="rozmarin"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered5(true)}
                                    onMouseLeave={ ()=> setHovered5(false)}
                                >
                                    <Fade left>
                                        <div 
                                            className={styles.projectName}
                                            style={{
                                                display: hovered5? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project5} 
                                        </div>
                                    </Fade>
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
                                        src="/proiecte/rozmarin1.jpg"
                                        alt="Restaurant Rozmarin"
                                        className={styles.projectImg}
                                    />
                                </div>
                        </LinkScroll>

                        <LinkScroll 
                            to="kiku"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
                                <div 
                                    className={styles.photoContainerLeft}
                                    onMouseEnter={ ()=> setHovered6(true)}
                                    onMouseLeave={ ()=> setHovered6(false)}
                                >
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered6? "block" : "none"
                                        }}
                                    ></img>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered6? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/kiku1.jpg"
                                        alt="Restaurant Kiku"
                                        className={styles.projectImg}
                                    />
                                    <Fade right>
                                        <div 
                                            className={styles.projectName}
                                            style={{
                                                display: hovered6? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project6} 
                                        </div>
                                    </Fade>
                                </div>
                        </LinkScroll>

                        <LinkScroll 
                            to="lumencraft"
                            smooth={true}
                            style={{
                                width: "100%",
                                textDecoration: "none"
                            }}
                        >
                                <div 
                                    className={styles.photoContainerRight}
                                    onMouseEnter={ ()=> setHovered7(true)}
                                    onMouseLeave={ ()=> setHovered7(false)}
                                >
                                    <Fade left>
                                        <div
                                            className={styles.projectName}
                                            style={{
                                                display: hovered7? "block" : "none"
                                            }}
                                        >
                                            {text.proiectePage[props.lang].project7} 
                                        </div>
                                    </Fade>
                                    <div 
                                        className={styles.line}
                                        style={{
                                            display: hovered7? "none" : "block"
                                        }}
                                    ></div>
                                    <img
                                        src="/proiecte/rightArrowProiecte2.svg"
                                        className={styles.arrow}
                                        style={{
                                            display: hovered7? "block" : "none"
                                        }}
                                    ></img>
                                    <img
                                        src="/proiecte/lumencraft4.jpg"
                                        alt="Restaurant Lumencraft"
                                        className={styles.projectImg}
                                    />
                                </div>
                        </LinkScroll>

                    </div>

                    <div className={styles.photoWrapperMobile}>
                        <div className={styles.row2}>
                            <LinkScroll 
                                    to="muzeul"
                                    smooth={true}
                                    style={{
                                        width: "100%",
                                        textDecoration: "none"
                                    }}
                                >
                                <div className={styles.photoBoxMobile}>
                                    <div className={styles.projectNameMobile}>
                                        {text.proiectePage[props.lang].project1} 
                                    </div>
                                    <img
                                        src="/proiecte/muzeul1.jpg"
                                        alt="Muzeul National de Art"
                                        className={styles.projectImgMobile}
                                    >
                                    </img>
                                </div>
                            </LinkScroll>

                            <LinkScroll 
                                    to="castelMimi"
                                    smooth={true}
                                    style={{
                                        width: "100%",
                                        textDecoration: "none"
                                    }}
                                >
                                <div className={styles.photoBoxMobile}>
                                    <div className={styles.projectNameMobile}>
                                        {text.proiectePage[props.lang].project2} 
                                    </div>
                                    <img
                                        src="/proiecte/mimi1.jpg"
                                        alt="Castel Mimi"
                                        className={styles.projectImgMobile}
                                    >
                                    </img>
                                </div>
                            </LinkScroll>
                        </div>

                        <div className={styles.row3}>
                        <LinkScroll 
                                to="manucBei"
                                smooth={true}
                                style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}
                            >
                            <div className={styles.photoBoxMobile}>
                                <div className={styles.projectNameMobile}>
                                    {text.proiectePage[props.lang].project3} 
                                </div>
                                <img
                                    src="/proiecte/ManucBei.png"
                                    alt="Manuc Bei"
                                    className={styles.projectImgMobile}
                                >
                                </img>
                            </div>
                        </LinkScroll>

                        <LinkScroll 
                                to="phiVegan"
                                smooth={true}
                                style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}
                            >
                            <div className={styles.photoBoxMobile}>
                                <div className={styles.projectNameMobile}>
                                    {text.proiectePage[props.lang].project4} 
                                </div>
                                <img
                                    src="/mainPage/veganClient.jpg"
                                    alt="Vegan Phi"
                                    className={styles.projectImgMobile}
                                >
                                </img>
                            </div>
                        </LinkScroll>

                        <LinkScroll 
                                to="rozmarin"
                                smooth={true}
                                style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}
                            >
                            <div className={styles.photoBoxMobile}>
                                <div className={styles.projectNameMobile}>
                                    {text.proiectePage[props.lang].project5} 
                                </div>
                                <img
                                    src="/proiecte/rozmarin1.jpg"
                                    alt="Rstaurant Rozmarin"
                                    className={styles.projectImgMobile}
                                >
                                </img>
                            </div>
                        </LinkScroll>
                        </div>

                        <div className={styles.row2}>
                        <LinkScroll 
                                to="kiku"
                                smooth={true}
                                style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}
                            >
                            <div className={styles.photoBoxMobile}>
                                <div className={styles.projectNameMobile}>
                                    {text.proiectePage[props.lang].project6} 
                                </div>
                                <img
                                    src="/proiecte/kiku1.jpg"
                                    alt="Restaurant Kiku"
                                    className={styles.projectImgMobile}
                                >
                                </img>
                            </div>
                        </LinkScroll>

                        <LinkScroll 
                                to="castelMimi"
                                smooth={true}
                                style={{
                                    width: "100%",
                                    textDecoration: "none"
                                }}
                            >
                            <div className={styles.photoBoxMobile}>
                                <div className={styles.projectNameMobile}>
                                    {text.proiectePage[props.lang].project7} 
                                </div>
                                <img
                                    src="/proiecte/lumencraft4.jpg"
                                    alt="Restaurant Lumencraft"
                                    className={styles.projectImgMobile}
                                >
                                </img>
                            </div>
                        </LinkScroll>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}