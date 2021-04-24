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
            <div className={styles.avantajImg}>
                <Image
                    src={hovered ? props.hoverSrc : props.imgSrc}
                    alt="Avantaj al companiei Belvedere Wood Parquet"
                    layout="fill"
                />
            </div>
            <div className={styles.avantajTextWrapper}>
                <p className={styles.avantajText}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}