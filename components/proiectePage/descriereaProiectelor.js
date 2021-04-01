import styles from "../../styles/proiecte/descriereaProiectelor.module.css"
import {useState, useEffect} from "react"

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


export function DescriereaProiectelor(){

    const size = useWindowSize();
    const mobile = size.width < 940 ? true : false;

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>

                    <div 
                        name="muzeul" 
                        id="muzeul"
                        className={styles.projectRowLeft}
                    >
                        <img
                            src="/proiecte/muzeulNationalDeArta.jpg"
                            alt="Muzeul Național de Artă"
                            className={styles.projectImgLeft}
                        />
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Muzeul Național de Artă
                            </h2>
                            <p className={styles.subheading}>
                                Mirosul uleiului pe pânză, culorile ce contrastează cu pereții albi și ecoul talentelor artiștilor și a
                                pașilor în sălile de expoziție, așa arată o vizită obișnuită în incita Muzeului Național de Istorie.
                                Așa putem scrie și noi istoria noastră, într-un spațiu de o semnificație culturală națională unică
                                de felul său, vizitată de iubitorii de frumos și evident de artă. Aceasta mai este o destinație la
                                renovarea căreia noi am reușit să aducem aportul nostru, restaurând parchetul din sălile de
                                expoziție.
                           </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                    <div 
                        name="castelMimi" 
                        id="castelMimi"
                        className={styles.projectRowRight}
                    >
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginLeft : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Castel Mimi
                            </h2>
                            <p className={styles.subheading}>
                                Această destinație turistică a fost inclusă în top 15 cele mai frumoase vinării din lume, prezentând  atât istorie, cât și arhitectură modernă celor 30.000 de vizitatori care vin în fiecare an din peste 80 de țări ale lumii. Iar în restaurantul de fine dining ”Bufnița Albă” vin să se delecteze mii de oaspeți cu bucatele selecte și atmosfera deosebită, care se datorează inclusive parchetului executat la comandă și instalat de BWP.
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                        <img
                            src="/proiecte/castelMimi.jpg"
                            alt="Castel Mimi"
                            className={styles.projectImgRight}
                        />
                    </div>

                    <div 
                        name="manucBei" 
                        id="manucBei"
                        className={styles.projectRowLeft}
                    >
                        <img
                            src="/proiecte/ManucBei.png"
                            alt="Manuc Bei"
                            className={styles.projectImgLeft}
                        />
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Manuc Bei
                            </h2>
                            <p className={styles.subheading}>
                                Un castel în stil francez de o frumusețea uimitoare, cu o grădină de iarnă, turnuri de pază și un parc imens, care însă nu au trecut neatinse de toate intimperiile istoriei. Cu toate acetea, în 2012 au demarat lucrările de reconstrucție și astăzi el poate fi admirat în toată splendoarea și măreția sa. Compania BWP și-a asumat responsabilitatea de a readuce aspectul veritabil al secolului trecut, renovând parchetul din toate camerele din conac. Fiecare placă de lemn a avut un design individual și a fost instalată manual, de echipa noastră de meșteri.                             </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                    <div 
                        name="porteryard" 
                        id="porteryard"
                        className={styles.projectRowRight}
                    >
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginLeft : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Kiku Restaurant
                            </h2>
                            <p className={styles.subheading}>
                                Un steak house de excepție cere ca totul să fie la fel de rafinat ca și de la bucatele gătite de chef. 
                                În colaborare cu o echipă locală de designeri am realizat un proiect de interior modern cu elemente naturale din lemn, pentru a asigura o atmosferă calmă, călduroasă și care să rețină clientul cât mai mult în local.
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                        <img
                            src="/proiecte/porteryard.jpg"
                            alt="Cafe Porter Yard"
                            className={styles.projectImgRight}
                        />
                    </div>

                    <div 
                        name="rozmarin" 
                        id="rozmarin"
                        className={styles.projectRowLeft}
                    >
                        <img
                            src="/proiecte/rozmarin.jpg"
                            alt="Cafe Rozmarin"
                            className={styles.projectImgLeft}
                        />
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Cafe Rozmarin
                            </h2>
                            <p className={styles.subheading}>
                                Ascuns de angoasa lumii, știut de toți iubitorii de mâncare preparată cu dragoste și dedicație, acest restaurant uimește prin designul său inedit, datorită suprafeței sale restrânse și a spațiului utilizat atât de ingenios. Acest lucru a fost realizat cu ajutorul specialiștilor BWP care au construit un set de scări suspendate și o insula din lemn la nivelul 2. De asemenea, aici s-au instalt plăcile de parchet într-un mod mai puțin obișnuit, pe pereți.
                            </p>
                            <div className={styles.button}>
                                Parchet de stejar
                                <img
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}