import styles from "../../styles/mainPage/avantaj.module.css"
import Image from 'next/image'
import { useState } from "react"

export function Avantaj(props){

    const [hovered, setHovered] = useState(false)

    return(
        <div 
            className={styles.avantaj}
            onMouseEnter={ ()=> setHovered(true)}
            onMouseLeave={ ()=> setHovered(false)}
        >
            <img
                src={hovered ? props.hoverSrc : props.imgSrc}
                alt="Google"
                width={100}
                height={100}
                className={styles.avantajImg}
            />
            <div className={styles.avantajTextWrapper}>
                <p className={styles.avantajText}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}