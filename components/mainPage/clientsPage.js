import { useState } from "react"
import styles from "../../styles/mainPage/clientsPage.module.css"

export function ClientsPage(){

    const [client, setClient] = useState(0)

    return(
        <div className={`
            ${styles.clientsPageWrapper} 
            ${client == 1 ? styles.background1 : ""}
            ${client == 2 ? styles.background2 : ""}
            ${client == 3 ? styles.background3 : ""}
            ${client == 4 ? styles.background4 : ""}
            ${client == 5 ? styles.background5 : ""}
        `}>
            <section 
                className={styles.clientsPageSection}
                onMouseLeave={ ()=> setClient(0) }
            >
                <div 
                    className={styles.clientsPageContainer}
                    // style={{
                    //     display: client == 0? "flex" : "none"
                    // }}
                >
                    <h2 className={styles.h2}>
                        Clienții noștri
                    </h2>
                    <div className={styles.whiteLine1}>
                    </div>
                    <div className={styles.clientsScroller}>
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(1)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(2)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(3)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(4)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(5)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(1)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(2)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(3)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(4)}
                        />
                        <img
                            src="/mainPage/Google.png"
                            alt="Google"
                            className={styles.clientImg}
                            onMouseEnter={()=> setClient(5)}
                        />
                    </div>
                    <div className={styles.whiteLine2}>
                    </div>
                </div>
            </section>
        </div>
    )
}