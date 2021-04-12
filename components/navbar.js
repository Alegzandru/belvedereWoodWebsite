import styles from "../styles/navbar.module.css"
import Image from 'next/image'
import React, {useState, useEffect, useContext} from "react"
import { useRouter } from 'next/router'
import {NavbarContext, LanguageContext, WidthContext} from "./context"
import Link from 'next/link'
import Slide from 'react-reveal/Slide';



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

  
export function Navbar(){

    const [navbarOpen, setNavbarOpen] = useState(true);
    const {open, setOpen} = useContext(NavbarContext)

    const [blackNavbar, setBlackNavbar] = useState(false);
    
    const {language, setLanguage} = useContext(LanguageContext)
    const [langHovered, setLangHovered] = useState(false)
    const [langClicked, setLangClicked] = useState(false)

    const router = useRouter();
    const isMainPage = router.pathname == "/";

    const size = useWindowSize();
    const mobile = size.width < 940 ? true : false;
    const {width, setWidth} = useContext(WidthContext)

    const scrollPosition = () => {
        setNavbarOpen(window.scrollY < 100 ? true : false)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    useEffect(
        () => {
            setBlackNavbar(router.pathname == "/despre-noi" || router.pathname == "/proiecte" ? true : false)
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
                                src={language == 0 ? "/navbar/flagRo.svg" : language == 1? "/navbar/flagRu.svg" : language == 2? "/navbar/flagEn.svg" : ""}
                                className={styles.flag}
                            />
                            <div 
                                className={styles.langText}
                                style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                            >
                                {language == 0 ? "Ro" : language == 1? "Ru" : language == 2? "En" : ""}
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
                                    language == 0 ? setLanguage(1) : 
                                    language == 1 ? setLanguage(2) :
                                    language == 2 ? setLanguage(0) : ""
                                }}
                            >
                                <img
                                    src={language == 0 ? "/navbar/flagRu.svg" : language == 1? "/navbar/flagEn.svg" : language == 2? "/navbar/flagRo.svg" : ""}
                                    className={styles.flag}
                                />
                                <div className={styles.langText}>
                                    {language == 0 ? "Ru" : language == 1? "En" : language == 2? "Ro" : ""}
                                </div>
                            </div>
                            <div 
                                className={styles.langBox}
                                onClick={() => {
                                    language == 0 ? setLanguage(2) : 
                                    language == 1 ? setLanguage(0) :
                                    language == 2 ? setLanguage(1) : ""
                                }}
                            >
                                <img
                                    src={language == 0 ? "/navbar/flagEn.svg" : language == 1? "/navbar/flagRo.svg" : language == 2? "/navbar/flagRu.svg" : ""}
                                    className={styles.flag}
                                />
                                <div className={styles.langText}>
                                    {language == 0 ? "En" : language == 1? "Ro" : language == 2? "Ru" : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={navbarOpen? styles.navContainer :styles.navContainerClosed}>
                        <Link href="/despre-noi">
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    Despre noi
                                </div>
                            </a>
                        </Link>
                        <Link href="/catalog">
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    Catalog
                                </div>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <img
                                    src={navbarOpen? blackNavbar? "/mainPage/BWPlogoBlack.png" : "/mainPage/BWPlogoGold.png" :  "/mainPage/BWPlogoGold.png"}
                                    alt="Logo Belvedere Wood" 
                                    className={navbarOpen? styles.logo : styles.logoClosed}
                                >
                                </img>
                            </a>
                        </Link>
                        <Link href="/proiecte">
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    Proiecte
                                </div>
                            </a>
                        </Link>
                        <Link href="/contactsPage">
                            <a className={navbarOpen? blackNavbar? styles.desktopLinkBlack : styles.desktopLink : styles.desktopLinkClosed}>
                                <div 
                                    className={navbarOpen ? styles.navLink : styles.navLinkClosed}
                                    style={{color: navbarOpen? blackNavbar ? "black" : "white" : "white"}}
                                >
                                    Contacte
                                </div>
                            </a>
                        </Link>
                        
                    </div>
                    <div className={navbarOpen? styles.contactUsWrapper : styles.contactUsWrapper}>
                        <div className={navbarOpen? styles.contactUsButton : styles.contactUsButtonClosed}>
                            <img
                                src={navbarOpen? "/navbar/phoneIconWhite.svg" : "/navbar/phoneIconGreen.svg"}
                                className={styles.phoneIcon}
                            />
                            <Link href="/contactsPage">
                                <a style={{textDecoration:"none"}}>
                                    <div className={navbarOpen? styles.contactUsText : styles.contactUsTextClosed}>
                                        Contactați-ne
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
                    <Link href="/">
                        <a>
                            <img
                                src="/mainPage/BWPlogoGold.png"
                                alt="Logo"
                                className={styles.mobileLogo}
                            />
                        </a>
                    </Link>
                    <img
                        src={open? "/navbar/closeIcon3.svg":"/mainPage/hamburgerIcon2.svg"}
                        className={styles.mobileIcon}
                        onClick={()=> setOpen(!open)}
                    ></img>
                </div>
                <div 
                    className={open ? styles.linksWrapperMobile : styles.linksWrapperMobileClosed}
                    // style={{
                    //     display: open? "block" : "none",
                    // }}
                >
                    <Slide right>
                        <Link href="/">
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    Principala
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href="/despre-noi">
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    Despre noi
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href="/catalog">
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    Catalog
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href="/proiecte">
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    Proiecte
                                </div>
                            </a>
                        </Link>  
                    </Slide>
                    <Slide right>
                        <Link href="/contactsPage">
                            <a className={styles.mobileA}>
                                <div className={styles.linkMobile}>
                                    Contacte
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
                                        src={language == 0 ? "/navbar/flagRo.svg" : language == 1? "/navbar/flagRu.svg" : language == 2? "/navbar/flagEn.svg" : ""}
                                        className={styles.flagMobile}
                                    />
                                    <div 
                                        className={styles.langTextMobile}
                                    >
                                        {language == 0 ? "Ro" : language == 1? "Ru" : language == 2? "En" : ""}
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
                                            language == 0 ? setLanguage(1) : 
                                            language == 1 ? setLanguage(2) :
                                            language == 2 ? setLanguage(0) : ""
                                        }}
                                    >
                                        <img
                                            src={language == 0 ? "/navbar/flagRu.svg" : language == 1? "/navbar/flagEn.svg" : language == 2? "/navbar/flagRo.svg" : ""}
                                            className={styles.flagMobile}
                                        />
                                        <div className={styles.langTextMobile}>
                                            {language == 0 ? "Ru" : language == 1? "En" : language == 2? "Ro" : ""}
                                        </div>
                                    </div>
                                    <div 
                                        className={styles.langBoxMobile}
                                        onClick={() => {
                                            language == 0 ? setLanguage(2) : 
                                            language == 1 ? setLanguage(0) :
                                            language == 2 ? setLanguage(1) : ""
                                        }}
                                    >
                                        <img
                                            src={language == 0 ? "/navbar/flagEn.svg" : language == 1? "/navbar/flagRo.svg" : language == 2? "/navbar/flagRu.svg" : ""}
                                            className={styles.flagMobile}
                                        />
                                        <div className={styles.langTextMobile}>
                                            {language == 0 ? "En" : language == 1? "Ro" : language == 2? "Ru" : ""}
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
            