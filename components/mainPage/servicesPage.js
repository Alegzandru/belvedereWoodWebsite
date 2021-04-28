import styles from "../../styles/mainPage/servicesPage.module.css"
import {useState, useEffect} from "react"
import Fade from 'react-reveal/Fade';
import {text} from "../text"



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

export function ServicesPage(props){

    const [hovered, setHovered] = useState(0)
    const size = useWindowSize();
    const mobile = size.width < 940 ? true : false;

    return(
        <div className={styles.servicesPageWrapper}>
            <section className={styles.servicesPageSection}>
                <div 
                    className={styles.servicesPageContainer}
                >
                    <h2 className={styles.h2}>
                        {text.mainPage.servicesPage[props.lang].heading}
                    </h2>
                    <div className={styles.gridBox}>
                        <div className={styles.gridContainer}>
                            {/* <div className={`${styles.producere} ${styles.service}`}>
                                Producerea parchetului
                            </div> */}
                            <div 
                                className={styles.producere}
                                onMouseEnter={ () => setHovered(1)}
                                onMouseLeave={ () => setHovered(0)}
                            >
                                <div 
                                    className={styles.service}
                                    style={{
                                        // backgroundColor : hovered == 1? "rgba(3, 29, 30, 0.75)" : "transparent",
                                        backgroundColor : hovered == 1? "rgba(0, 0, 0, 0.5)" : "transparent",
                                        justifyContent : hovered == 1? "center" : "flex-end",
                                        alignItems: hovered == 1? "center" : "flex-start",
                                        fontFamily: hovered == 1? "Futura PT custom Book" : "Futura PT custom Mediu",
                                        fontSize: hovered == 1? mobile? "18px" : "22px" : "30px",
                                        transition : "0ms"
                                    }}
                                >
                                    <Fade bottom>
                                        {
                                            hovered == 1 ?
                                            text.mainPage.servicesPage[props.lang].service1Hovered :
                                            text.mainPage.servicesPage[props.lang].service1
                                        }
                                    </Fade>
                                </div>
                            </div>
                            <div 
                                className={styles.montare}
                                onMouseEnter={ () => setHovered(2)}
                                onMouseLeave={ () => setHovered(0)}
                            >
                                <div 
                                    className={styles.service}
                                    style={{
                                        backgroundColor : hovered == 2? "rgba(0, 0, 0, 0.5)" : "transparent",
                                        justifyContent : hovered == 2? "center" : "flex-end",
                                        alignItems: hovered == 2? "center" : "flex-start",
                                        fontFamily: hovered == 2? "Futura PT custom Book" : "Futura PT custom Mediu",
                                        fontSize: hovered == 2? mobile? "18px" : "22px" : "30px",
                                        transition : "0ms"
                                    }}
                                >
                                    <Fade bottom>
                                        {
                                            hovered == 2 ?
                                            text.mainPage.servicesPage[props.lang].service2Hovered :
                                            text.mainPage.servicesPage[props.lang].service2
                                        }
                                    </Fade>
                                </div>
                            </div>
                            <div 
                                className={styles.scari}
                                onMouseEnter={ () => setHovered(3)}
                                onMouseLeave={ () => setHovered(0)}
                            >
                                <div 
                                    className={styles.service}
                                    style={{
                                        backgroundColor : hovered == 3? "rgba(0, 0, 0, 0.5)" : "transparent",
                                        justifyContent : hovered == 3? "center" : "flex-end",
                                        alignItems: hovered == 3? "center" : "flex-start",
                                        fontFamily: hovered == 3? "Futura PT custom Book" : "Futura PT custom Mediu",
                                        fontSize: hovered == 3? mobile? "18px" : "22px" : "30px",
                                        transition : "0ms"
                                    }}
                                >
                                    <Fade bottom>
                                        {
                                            hovered == 3 ?
                                            text.mainPage.servicesPage[props.lang].service3Hovered :
                                            text.mainPage.servicesPage[props.lang].service3
                                        }
                                    </Fade>
                                </div>
                            </div>
                            <div 
                                className={styles.restaurare}
                                onMouseEnter={ () => setHovered(4)}
                                onMouseLeave={ () => setHovered(0)}
                            >
                                <div 
                                    className={styles.service}
                                    style={{
                                        backgroundColor : hovered == 4? "rgba(0, 0, 0, 0.5)" : "transparent",
                                        justifyContent : hovered == 4? "center" : "flex-end",
                                        alignItems: hovered == 4? "center" : "flex-start",
                                        fontFamily: hovered == 4? "Futura PT custom Book" : "Futura PT custom Mediu",
                                        fontSize: hovered == 4? mobile? "18px" : "22px" : "30px",
                                        transition : "0ms"
                                    }}
                                >
                                    <Fade bottom>
                                        {
                                            hovered == 4 ?
                                            text.mainPage.servicesPage[props.lang].service4Hovered :
                                            text.mainPage.servicesPage[props.lang].service4
                                        }
                                    </Fade>
                                </div>
                            </div>
                        </div>

                        <div 
                            className={styles.pereti}
                            onMouseEnter={ () => setHovered(5)}
                            onMouseLeave={ () => setHovered(0)}
                        >
                            <div 
                                className={styles.service}
                                style={{
                                    backgroundColor : hovered == 5? "rgba(0, 0, 0, 0.5)" : "transparent",
                                    justifyContent : hovered == 5? "center" : "flex-end",
                                    alignItems: hovered == 5? "center" : "flex-start",
                                    fontFamily: hovered == 5? "Futura PT custom Book" : "Futura PT custom Mediu",
                                    fontSize: hovered == 5? mobile? "18px" : "22px" : "30px",
                                    transition : "0ms"
                                }}
                            >
                                <Fade bottom>
                                    {
                                        hovered == 5 ?
                                        text.mainPage.servicesPage[props.lang].service5Hovered :
                                        text.mainPage.servicesPage[props.lang].service5
                                    }
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}