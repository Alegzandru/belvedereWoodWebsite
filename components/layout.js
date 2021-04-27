import React, { Component , useContext, useEffect, useState} from 'react';
import Head from 'next/head';
import {Navbar} from './navbar.js'
import {Footer} from "./footer.js"
import styles from "../styles/layout.module.css"
import { NavbarContext, LanguageContext, WidthContext} from "./context"
import { useRouter } from 'next/router'


export default function Layout (props) {
          
    const { children, title, style, className } = props;
    const {language, setLanguage} = useContext(LanguageContext)
    
    const [open, setOpen] = useState(false);
    const valueNavbar = { open, setOpen };

    const {width, setWidth} = useContext(WidthContext)
    const router = useRouter()
    const onMainPage = router.pathname == "/" ? 1 : 0

    
    return (
        <NavbarContext.Provider value={valueNavbar}>
            <div>
                <Head>
                    <meta name="google-site-verification" content="YbfA3OWaFEkoD51ke7utzLuy3TByDlAUaDB9n90_6vU" />
                    {process.env.NODE_ENV !== 'production' && (
                        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                    )}
                    <link rel="shortcut icon" href="/BWP.ico" />
                    <title>{props.title}</title>

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content={props.description}/>
                </Head>

                <header id="navBar">
                    <Navbar lang={language}></Navbar>
                </header>

                <main 
                    className={
                        open && onMainPage ? styles.mainOpenMainPage : 
                        open ? styles.mainOpen : 
                        width < 940 && onMainPage ? styles.mainPageMobile :
                        styles.main
                    }
                >{children}
                </main>
                
                <footer
                    style={{
                        display: props.noFooter? "none" : "block"
                    }}
                >
                    <Footer lang={language}></Footer>
                </footer>
            </div>
        </NavbarContext.Provider>
    );
  }
