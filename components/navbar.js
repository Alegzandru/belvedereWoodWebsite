import styles from "../styles/navbar.module.css"
import Image from 'next/image'
import React, {useState, useEffect, useContext} from "react"
import { useRouter } from 'next/router'
import {NavbarContext, LanguageContext, WidthContext} from "./context"
import Link from 'next/link'
import {Slide} from 'react-awesome-reveal';
import {text} from "./text"
import { Divide as Hamburger } from 'hamburger-react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

  
export function Navbar(props){

    const [navbarOpen, setNavbarOpen] = useState(true);
    const {open, setOpen} = useContext(NavbarContext)

    const [blackNavbar, setBlackNavbar] = useState(false);
    
    const {language, setLanguage} = useContext(LanguageContext)
    const [langHovered, setLangHovered] = useState(false)
    const [langClicked, setLangClicked] = useState(false)

    const router = useRouter();

    const isMainPage = router.pathname == "/" || router.pathname == "/ru" || router.pathname == "/en";

    const size = useWindowSize();
    const mobile = size.width < 940 ? true : false;
    const {width, setWidth} = useContext(WidthContext)

    const scrollPosition = () => {
        setNavbarOpen(window.scrollY < 100 ? true : false)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    const route1 = 
    props.lang == 0 ? `/ru${router.pathname}` : 
    props.lang == 1 ? `/en${router.pathname.replace("/ru", "")}` :
    props.lang == 2 ? `${isMainPage ? "/" : ""}${router.pathname.replace("/en", "")}` : ""

    const route2 = 
    props.lang == 0 ? `/en${router.pathname}` : 
    props.lang == 1 ? `${isMainPage ? "/" : ""}${router.pathname.replace("/ru", "")}` :
    props.lang == 2 ? `/ru${router.pathname.replace("/en", "")}` : ""

    useEffect(
        () => {
            setBlackNavbar(router.pathname == `${props.langStr}/despre-noi` || router.pathname == `${props.langStr}/proiecte` ? true : false)
            setWidth(size.width)
        }
    )

    return(
        <div 
            className={styles.navbarHeightWrapper}
            style={{
                height: mobile? "auto" : "48px"
            }}
        >
            <div 
                className={mobile ? styles.wrapperMobile : navbarOpen? styles.wrapper : styles.wrapperClosed}
                style={{
                    height: mobile? "auto" : navbarOpen? "140px" : "48px",
                    backgroundColor: mobile? "transparent" : navbarOpen ? "transparent" : "#031D1E",
                    flexDirection: mobile? "column" : "row"
                }}
            >
                <div 
                    className={mobile ? styles.containerMobile : navbarOpen? styles.container : styles.containerClosed}
                    style={{
                        width: isMainPage ? mobile? "" : "1080px" : ""
                    }}
                >
                    <div 
                        className={navbarOpen? styles.langWrapper : styles.langWrapperClosed}
                        onMouseEnter={ () => setLangHovered(true)}
                        onMouseLeave={ () => setLangHovered(false)}
                        style={{
                            flexDirection : langHovered ? "column" : "row"
                        }}
                    >
                        <div className={styles.langButton}>
                            <img
                                src={props.lang == 0 ? "/navbar/flagRo.svg" : props.lang == 1? "/navbar/flagRu.svg" : props.lang == 2? "/navbar/flagEn.svg" : ""}
                                className={styles.flag}
                            />
                            <div 
                                className={styles.langText}
                                style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                            >
                                {props.lang == 0 ? "Ro" : props.lang == 1? "Ru" : props.lang == 2? "En" : ""}
                            </div>
                            <img
                                src={ navbarOpen? blackNavbar ? "/navbar/arrowDownBlack.svg" : "/navbar/arrowDown.svg" : "/navbar/arrowDown.svg" }
                                className={styles.arrowDown}
                            />
                        </div>
                        <div 
                            className={styles.languagesWrapper}
                            style={{
                                display: langHovered? "block" : "none"
                            }}
                        >
                            <div 
                                className={styles.langBox}
                                onClick={() => {
                                    router.push(route1)
                                }}
                            >
                                <img
                                    src={props.lang == 0 ? "/navbar/flagRu.svg" : props.lang == 1? "/navbar/flagEn.svg" : props.lang == 2? "/navbar/flagRo.svg" : ""}
                                    className={styles.flag}
                                />
                                <div className={styles.langText}>
                                    {props.lang == 0 ? "Ru" : props.lang == 1? "En" : props.lang == 2? "Ro" : ""}
                                </div>
                            </div>
                            <div 
                                className={styles.langBox}
                                onClick={() => {
                                    router.push(route2)
                                }}
                            >
                                <img
                                    src={props.lang == 0 ? "/navbar/flagEn.svg" : props.lang == 1? "/navbar/flagRo.svg" : props.lang == 2? "/navbar/flagRu.svg" : ""}
                                    className={styles.flag}
                                />
                                <div className={styles.langText}>
                                    {props.lang == 0 ? "En" : props.lang == 1? "Ro" : props.lang == 2? "Ru" : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={navbarOpen? styles.navContainer :styles.navContainerClosed}>
                        <Link href={`${props.langStr}/despre-noi`}>
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    {text.layout[props.lang].aboutUs}
                                </div>
                            </a>
                        </Link>
                        <Link href={`${props.langStr}/catalog`}>
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    {text.layout[props.lang].catalog}
                                </div>
                            </a>
                        </Link>
                        <Link href={`${props.langStr}/`}>
                            <a>
                                <div className={navbarOpen? styles.logo : styles.logoClosed}>
                                    <Image
                                        src={navbarOpen? blackNavbar? "/mainPage/BWPlogoBlack.png" : "/mainPage/BWPlogoGold.png" :  "/mainPage/BWPlogoGold.png"}
                                        alt="Logo Belvedere Wood Parquet" 
                                        layout="fill"
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href={`${props.langStr}/proiecte`}>
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    {text.layout[props.lang].proiecte}
                                </div>
                            </a>
                        </Link>
                        <Link href={`${props.langStr}/contacte`}>
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    {text.layout[props.lang].contacte}
                                </div>
                            </a>
                        </Link>
                        
                    </div>
                    <div className={navbarOpen? styles.contactUsWrapper : styles.contactUsWrapper}>
                        <div className={navbarOpen? styles.contactUsButton : styles.contactUsButtonClosed}>
                            <div className={styles.phoneIcon}>
                                <Image
                                    src={navbarOpen? "/navbar/phoneIconWhite.svg" : "/navbar/phoneIconGreen.svg"}
                                    alt=""
                                    layout="fill"
                                />
                            </div>
                            <Link href={`${props.langStr}/contacte`}>
                                <a style={{textDecoration:"none"}}>
                                    <div className={navbarOpen? styles.contactUsText : styles.contactUsTextClosed}>
                                        {text.layout[props.lang].contactUs}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div 
                    className={styles.mobileContainer}
                    style={{display : mobile? "flex" : "none"}}
                >
                    <Link href={`${props.langStr}/`}>
                        <a>
                            <div className={styles.mobileLogo}>
                                <Image
                                    src="/mainPage/BWPlogoGold.png"
                                    alt="Logo Belvedere Wood Parquet"
                                    layout="fill"
                                />
                            </div>
                        </a>
                    </Link>
                    <div className={styles.mobileIcon}>
                        <Hamburger toggled={open} toggle={setOpen} size={36} duration={0.5} color="white"/>
                    </div>
                </div>
                <div 
                    className={open ? styles.linksWrapperMobile : styles.linksWrapperMobileClosed}
                    // style={{
                    //     display: open? "block" : "none",
                    // }}
                >
                    <Slide right>
                        <Link href={`${props.langStr}/`}>
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    {text.layout[props.lang].mainPage}
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href={`${props.langStr}/despre-noi`}>
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    {text.layout[props.lang].aboutUs}
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href={`${props.langStr}/catalog`}>
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    {text.layout[props.lang].catalog}
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href={`${props.langStr}/proiecte`}>
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    {text.layout[props.lang].proiecte}
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href={`${props.langStr}/contacte`}>
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    {text.layout[props.lang].contacte}
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <div 
                            className={styles.linkMobile}
                            onClick= { () => setLangClicked(!langClicked)}
                            style={{
                                alignItems: "flex-start"
                            }}
                        >
                            <div 
                                className={styles.langWrapperMobile}
                                style={{
                                    flexDirection : langClicked ? "column" : "row"
                                }}
                            >
                                <div className={styles.langButtonMobile}>
                                    <img
                                        src={props.lang == 0 ? "/navbar/flagRo.svg" : props.lang == 1? "/navbar/flagRu.svg" : props.lang == 2? "/navbar/flagEn.svg" : ""}
                                        className={styles.flagMobile}
                                    />
                                    <div 
                                        className={styles.langTextMobile}
                                    >
                                        {props.lang == 0 ? "Ro" : props.lang == 1? "Ru" : props.lang == 2? "En" : ""}
                                    </div>
                                    <img
                                        src="/navbar/arrowDown.svg"
                                        className={styles.arrowDownMobile}
                                    />
                                </div>

                                <div 
                                    className={styles.languagesWrapper}
                                    style={{
                                        display: langClicked? "block" : "none"
                                    }}
                                >
                                    <div 
                                        className={styles.langBoxMobile}
                                        onClick={() => {
                                            router.push(route1)
                                        }}
                                    >
                                        <img
                                            src={props.lang == 0 ? "/navbar/flagRu.svg" : props.lang == 1? "/navbar/flagEn.svg" : props.lang == 2? "/navbar/flagRo.svg" : ""}
                                            className={styles.flagMobile}
                                        />
                                        <div className={styles.langTextMobile}>
                                            {props.lang == 0 ? "Ru" : props.lang == 1? "En" : props.lang == 2? "Ro" : ""}
                                        </div>
                                    </div>
                                    <div 
                                        className={styles.langBoxMobile}
                                        onClick={() => {
                                            router.push(route2)
                                        }}
                                    >
                                        <img
                                            src={props.lang == 0 ? "/navbar/flagEn.svg" : props.lang == 1? "/navbar/flagRo.svg" : props.lang == 2? "/navbar/flagRu.svg" : ""}
                                            className={styles.flagMobile}
                                        />
                                        <div className={styles.langTextMobile}>
                                            {props.lang == 0 ? "En" : props.lang == 1? "Ro" : props.lang == 2? "Ru" : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
            