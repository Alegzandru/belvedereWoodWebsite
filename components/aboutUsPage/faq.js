import styles from "../../styles/despreNoi/FAQ.module.css"
import {useState} from "react"

export function FAQ(){

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)


    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>
                        FAQ
                    </h2>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen1(!open1) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                1.
                            </div>
                            <div className={styles.questionText}>
                                Cât este de rezistent parchetul la umiditate și temperatură?                        
                            </div>
                            <div className={styles.questionPlus}>
                                {open1? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open1 ? "block" : "none"
                            }}
                        >
                            Strucura specifică a parchetului nostru îi permite acestuia să reacționeze la orice schimb de temperatură și umiditate, la fel ca plăcile de teracotă. Avantajul major al plăcii de parchet este că aceasta se adaptează la temperatura camerei și nu are scăderi bruște ale temperaturii.
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen2(!open2) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                2.
                            </div>
                            <div className={styles.questionText}>
                                Cine și unde se produce parchetul marca BWP?                      
                            </div>
                            <div className={styles.questionPlus}>
                                {open2? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open2 ? "block" : "none"
                            }}
                        >
                            Orice lucrare expusă în showroom și sau executată a fost produsă în exclusivitate la fabrica BWP de pe str. Uzinelor 90 (google maps)                        
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen3(!open3) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                3.
                            </div>
                            <div className={styles.questionText}>
                                Ce tip de placă de parchet folositi?                     
                            </div>
                            <div className={styles.questionPlus}>
                                {open3? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open3 ? "block" : "none"
                            }}
                        >
                            Noi utilizăm tipul de parchet ingineresc, care datorită construcției sale dublu- stratificate protejează lemnul împotriva deteriorării sale naturale și firești. Această tehnologie de producere are un avantaj major față de parchetul masiv.                         
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen4(!open4) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                4.
                            </div>
                            <div className={styles.questionText}>
                                Ce gamă de culori poate avea parchetul?                   
                            </div>
                            <div className={styles.questionPlus}>
                                {open4? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open4 ? "block" : "none"
                            }}
                        >
                            Parchetul marca BW este produs la fabrica noastră și poate fi vopsit cu orice culoare, conform preferinței clientului. Avem și plăci de parchet poleite cu aur. Orice nuanță poate fi executată la dorința clientului.                        
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen5(!open5) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                5.
                            </div>
                            <div className={styles.questionText}>
                                Este vizibilă trecerea de la parchet la teracotă?                            
                            </div>
                            <div className={styles.questionPlus}>
                                {open5? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open5 ? "block" : "none"
                            }}
                        >
                            Linia de trecere de la parchet la teracotă este camuflată în așa fel încât aceasta arată extrem de estetică, datorită faptului că placa de parchet poate fi tăiată după forma teracotei, care poate fi de orice complexitate.                        
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen6(!open6) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                6.
                            </div>
                            <div className={styles.questionText}>
                                Ce clei utilizați la instalare?                     
                            </div>
                            <div className={styles.questionPlus}>
                                {open6? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open6 ? "block" : "none"
                            }}
                        >
                            La instalare meșterii noștri utilizează clei adeziv, care odată cu întărirea lui se transformă în cauciuc. Nu conține solvenți, nu miroase și nu e toxic. Acest tip de clei nu permite pătrunderea apei în crăpături, reține apa, iar aceasta nu ajunge la beton.                        
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen7(!open7) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                7.
                            </div>
                            <div className={styles.questionText}>
                                Parchetul poate fi instalat în baie?                            
                            </div>
                            <div className={styles.questionPlus}>
                                {open7? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open7 ? "block" : "none"
                            }}
                        >
                            Datorită calității și proprietăților sale tehnice, parchetul BW poate fi instalat în orice odaie a casei, inclusiv în baie. Însă, pentru aceasta e necesară o aerisire corespunzătoare, preferabil geam.                        
                        </div>
                    </div>

                    <div 
                        className={styles.questionWrapper}
                        onClick={() => setOpen8(!open8) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                8.
                            </div>
                            <div className={styles.questionText}>
                                Parchetul poate fi restaurat?                            
                            </div>
                            <div className={styles.questionPlus}>
                                {open8? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open8 ? "block" : "none"
                            }}
                        >
                            Noi oferim o garanție de 10 ani la instalarea parchetului BW de către meșterii noștri. Pentru a readuce luciul natural al lemnului și a îl împrospăta, el poate fi restaurat prin șlefuire de până la 5 ori.                         
                        </div>
                    </div>

                    <img
                        src="/despreNoi/treeFAQ.png"
                        alt=""
                        className={styles.treeImg}
                    />
                </div>
            </section>
        </div>
    )
}