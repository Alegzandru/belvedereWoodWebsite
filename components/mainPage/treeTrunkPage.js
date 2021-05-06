import styles from "../../styles/mainPage/treeTrunkPage.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {useState} from "react"
import Fade from "react-reveal"
import {text} from "../text"



export function TreeTrunkPage(props){

    const [hoveredCircle, setHoveredCircle] = useState(0)

    return(
        <div className={styles.treeTrunkPageWrapper}>
            <section className={styles.treeTrunkPageSection}>
                <div className={styles.treeTrunkPageContainer}>

                    <div className={styles.textWrapper}>
                        <h2 className={styles.h2}>
                            {text.mainPage.treeTrunkPage[props.lang].heading}
                        </h2>
                        <div className={styles.subheading}>
                            {text.mainPage.treeTrunkPage[props.lang].subheading}
                        </div>
                        <Link href={`${props.langStr}/despre-noi`}>
                            <a style={{textDecoration: "none"}}>
                                <div className={styles.button1}>
                                    {text.mainPage.treeTrunkPage[props.lang].button}
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={`
                        ${styles.treeTrunkWrapper}
                        ${hoveredCircle != 0 ? styles.treeTrunkWrapperHovered : ""}
                    `}>
                        <div className={styles.logoImgTop}>
                            <Image
                                src="/mainPage/BWPlogoBlack.png"
                                alt="Logo Belvedere Wood"
                                width={112}
                                height={112}
                            />
                        </div>

                        <div className={`
                            ${styles.circle1} 
                            ${hoveredCircle != 0  && hoveredCircle !=1 ? `${styles.circleHovered} ${styles.circleNotFocus}` : ""}
                            ${hoveredCircle != 0 ? styles.circleHovered : ""}
                            ${hoveredCircle == 1 ? styles.circleFocus : ""}
                        `}>
                            <span
                                onMouseEnter={()=> setHoveredCircle(1)}
                                onMouseLeave={()=> setHoveredCircle(0)}
                            >
                                {text.mainPage.treeTrunkPage[props.lang].value1}
                            </span>
                        </div>
                        
                        <div className={`
                            ${styles.circle2} 
                            ${hoveredCircle == 2 ? styles.circleFocus : ""}
                            ${hoveredCircle != 0  && hoveredCircle !=2 ? styles.circleNotFocus : ""}
                        `}>
                            <span
                                onMouseEnter={()=> setHoveredCircle(2)}
                                onMouseLeave={()=> setHoveredCircle(0)}
                            >
                                {text.mainPage.treeTrunkPage[props.lang].value2}
                            </span>
                        </div>
                        
                        <div className={`
                            ${styles.circle3} 
                            ${hoveredCircle == 3 ? styles.circleFocus : ""}
                            ${hoveredCircle != 0  && hoveredCircle !=3 ? styles.circleNotFocus : ""}
                        `}>
                            <span
                                onMouseEnter={()=> setHoveredCircle(3)}
                                onMouseLeave={()=> setHoveredCircle(0)}
                            >
                                {text.mainPage.treeTrunkPage[props.lang].value3}
                            </span>
                        </div>

                        <div className={`
                            ${styles.circle4} 
                            ${hoveredCircle == 4 ? styles.circleFocus : ""}
                            ${hoveredCircle != 0  && hoveredCircle !=4 ? styles.circleNotFocus : ""}
                        `}>
                            <span
                                onMouseEnter={()=> setHoveredCircle(4)}
                                onMouseLeave={()=> setHoveredCircle(0)}
                            >
                                {text.mainPage.treeTrunkPage[props.lang].value4}
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}