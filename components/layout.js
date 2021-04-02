import React, { Component , useContext, useEffect, useState} from 'react';
import Head from 'next/head';
import {Navbar} from './navbar.js'
import {Footer} from "./footer.js"
import styles from "../styles/layout.module.css"
import { NavbarContext, LanguageContext} from "./context"


export default function Layout (props) {
          
    const { children, title, style, className } = props;
    
    const [open, setOpen] = useState(false);
    const valueNavbar = { open, setOpen };
    
    // const [language, setLanguage] = useState(0);
    // const valueLanguage = {language, setLanguage}
    
    
    return (
        <NavbarContext.Provider value={valueNavbar}>
            <div>
                <Head>
                    {process.env.NODE_ENV !== 'production' && (
                        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                    )}
                </Head>

                <header id="navBar">
                    <Navbar></Navbar>
                </header>

                <main 
                    className={open ? `${styles.mainOpen} ${styles.mainOpenDarken}` : styles.main}
                    // style={{
                    //     marginTop: open? "-240px" : navbarOpen ? "" : "0px"
                    // }}
                >{children}
                </main>
                
                <footer
                    style={{
                        display: props.noFooter? "none" : "block"
                    }}
                >
                    <Footer></Footer>
                </footer>
            </div>
        </NavbarContext.Provider>
    );
  }
