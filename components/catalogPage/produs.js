import styles from "../../styles/catalog/produs.module.css"
import Image from 'next/image'


export function Produs(props){

    return(
        <div className={styles.produsWrapper}>
            <div className={styles.produsImg}>
                <Image
                    src={props.imgSrc}
                    alt="Poza tipului de parchet"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <h2 className={styles.h2}>
                {props.name}
            </h2>

            <div className={styles.descriere}>
                {props.descriere}
            </div>
        </div>
    )
}