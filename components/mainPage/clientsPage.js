import { useState } from "react"
import styles from "../../styles/mainPage/clientsPage.module.css"
import { useRouter } from 'next/router'


export function ClientsPage(){

    const router = useRouter()
    const [client, setClient] = useState(0)
    
    const handleClick = (e, href) => {
        e.preventDefault()
        router.push(href)
    }

    
    return(
        <div className={`
            ${styles.clientsPageWrapper} 
            ${client == 1 ? styles.background1 : ""}
            ${client == 2 ? styles.background2 : ""}
            ${client == 3 ? styles.background3 : ""}
            ${client == 4 ? styles.background4 : ""}
            ${client == 5 ? styles.background5 : ""}
            ${client == 6 ? styles.background6 : ""}
            ${client == 7 ? styles.background7 : ""}
            ${client == 8 ? styles.background8 : ""}
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
                        <a href="https://www.castelmimi.md/en/" target="blank">
                            <img
                                src="/mainPage/logoCM.png"
                                alt="Castel Mimi"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(1)}
                                // onClick={
                                //     (e, href) => handleClick(e, "https://www.castelmimi.md/en/")
                                // }
                            />
                        </a>
                        <a href="https://lumencraft.md/#home" target="blank">
                            <img
                                src="/mainPage/lumenCraft.jpg"
                                alt="Restaurant Lumencraft"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(2)}
                            />
                        </a>
                        <a href="https://www.facebook.com/kikusteakwine/" target="blank">
                            <img
                                src="/mainPage/kiku.png"
                                alt="Restaurant Kiku"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(3)}
                            />
                        </a>
                        <a href="https://www.instagram.com/veganphi/" target="blank">
                            <img
                                src="/mainPage/veganPhi.png"
                                alt="Restaurant Vegan Phi"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(4)}
                            />
                        </a>
                        <a href="https://www.mnam.md/" target="blank">
                            <img
                                src="/mainPage/mnam.png"
                                alt="Muzeul Național de Artă"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(5)}
                            />
                        </a>
                        <a href="https://www.facebook.com/caferozmarin/" target="blank">
                            <img
                                src="/mainPage/rozmarin.png"
                                alt="Cafe Rozmarin"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(6)}
                            />
                        </a>
                        <a href="https://www.facebook.com/porteryard/" target="blank">
                            <img
                                src="/mainPage/porteryard.png"
                                alt="Restaurant Porteryard"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(7)}
                            />
                        </a>
                        <a href="https://abandpartners.net/" target="blank">
                            <img
                                src="/mainPage/ab.png"
                                alt="Ab+Partners"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(8)}
                            />
                        </a>
                        <a href="https://www.castelmimi.md/en/" target="blank">
                            <img
                                src="/mainPage/logoCM.png"
                                alt="Castel Mimi"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(1)}
                                // onClick={
                                //     (e, href) => handleClick(e, "https://www.castelmimi.md/en/")
                                // }
                            />
                        </a>
                        <a href="https://lumencraft.md/#home" target="blank">
                            <img
                                src="/mainPage/lumenCraft.jpg"
                                alt="Restaurant Lumencraft"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(2)}
                            />
                        </a>
                        <a href="https://www.facebook.com/kikusteakwine/" target="blank">
                            <img
                                src="/mainPage/kiku.png"
                                alt="Restaurant Kiku"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(3)}
                            />
                        </a>
                        <a href="https://www.instagram.com/veganphi/" target="blank">
                            <img
                                src="/mainPage/veganPhi.png"
                                alt="Restaurant Vegan Phi"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(4)}
                            />
                        </a>
                        <a href="https://www.mnam.md/" target="blank">
                            <img
                                src="/mainPage/mnam.png"
                                alt="Muzeul Național de Artă"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(5)}
                            />
                        </a>
                        <a href="https://www.facebook.com/caferozmarin/" target="blank">
                            <img
                                src="/mainPage/rozmarin.png"
                                alt="Cafe Rozmarin"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(6)}
                            />
                        </a>
                        <a href="https://www.facebook.com/porteryard/" target="blank">
                            <img
                                src="/mainPage/porteryard.png"
                                alt="Restaurant Porteryard"
                                className={styles.clientImg}
                                onMouseEnter={()=> setClient(7)}
                            />
                        </a>
                    </div>
                    <div className={styles.whiteLine2}>
                    </div>
                </div>
            </section>
        </div>
    )
}