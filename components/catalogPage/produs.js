import styles from "../../styles/catalog/produs.module.css"

export function Produs(props){

    return(
        <div className={styles.produsWrapper}>
            <img
                src={props.imgSrc}
                alt="Poza produsului"
                className={styles.produsImg}
            />

            <h2 className={styles.h2}>
                {props.name}
            </h2>

            <div className={styles.descriere}>
                {props.descriere}
            </div>
        </div>
    )
}