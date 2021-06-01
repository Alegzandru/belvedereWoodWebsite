import {HeroPage2} from "../components/mainPage/heroPage2"
import {TreeTrunkPage} from "../components/mainPage/treeTrunkPage.js"
import {ClientsPage} from "../components/mainPage/clientsPage.js"
import {AvantajePage} from "../components/mainPage/avantajePage.js"
import {ProiectePage} from "../components/mainPage/proiectePage.js"
import {ServicesPage} from "../components/mainPage/servicesPage.js"
import Layout from "../components/layout"
import {LanguageContext, PopupContext} from "../components/context"
import {useContext, useEffect, useState, useRef} from "react"
import Cookies from 'universal-cookie';
import styles from "../styles/mainPage/popup.module.css"
import Image from "next/image"
import Fade from 'react-reveal/Fade';

function HomePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    const {popupOpen, setPopupOpen} = useContext(PopupContext)
    const [renderPopup, setRenderPopup] = useState(0)

    const cookies = new Cookies();

    useEffect(() => {
        setTimeout(() => setRenderPopup( !cookies.get("Closed") ) , 7000)
    }, [])

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setPopupOpen(1)
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <Layout 
            title={"Belvedere Wood Parchet"}
            description="Belvedere Wood Parchet - producerea, instalarea, restaurarea parchetului, pereților și scărilor din lemn în Chișinău, Moldova. Puteți vedea exemple ale parchetului și lucrărior noastre din lemn la showroomul de pe strada Uzinelor 15/4, Chișinău, Moldova"
            lang={0}
            langStr=""
        >
            <div ref={wrapperRef}>
                <Fade bottom>
                    <div 
                        className={styles.popupWrapper}
                        style={{
                            display : renderPopup && !popupOpen ? "flex" : "none",
                        }}
                    >
                        <div className={styles.textWrapper}>
                            <div className={styles.heading}>
                                Nu pierde oferta limitată!
                            </div>
                            <div className={styles.subheading}>
                                Fă o programare în showroomul nostru și primește <span className={styles.accent}>10%</span> reducere
                            </div>
                            <a 
                                href="tel:37368448111"
                                style={{
                                    textDecoration: "none"
                                }}
                                onClick={() => 
                                    setPopupOpen(1)
                                }
                            >
                                <div className={styles.button}>
                                    0 (68) 448111
                                </div>
                            </a>
                        </div>
                        <div className={styles.photoWrapper}>
                            <div 
                                className={styles.close}
                                onClick={() => {
                                    cookies.set('Closed', 1, { path: '/' })
                                    setPopupOpen(1)
                                }}
                            >
                                <Image
                                    src="/popup/close.svg"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <Image
                                src="/popup/bg.jpeg"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </Fade>
            </div>

            <div
                style={{ 
                    filter : renderPopup && !popupOpen ? "brightness(40%)" : ""
                }}
            >
                <HeroPage2 
                    lang={0}
                    langStr=""
                ></HeroPage2>
                <TreeTrunkPage 
                    lang={0}
                    langStr=""
                ></TreeTrunkPage>
                <ServicesPage 
                    lang={0}
                    langStr=""
                ></ServicesPage>
                <ClientsPage 
                    lang={0}
                    langStr=""
                ></ClientsPage>
                <AvantajePage 
                    lang={0}
                    langStr=""
                ></AvantajePage>
                <ProiectePage 
                    lang={language}
                    langStr=""
                ></ProiectePage>
            </div>
        </Layout>
    )
}

export default HomePage