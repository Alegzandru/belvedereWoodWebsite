import styles from "../../styles/proiecte/descriereaProiectelor.module.css"
import {useState, useEffect} from "react"
import Link from 'next/link'

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

    const [slider1, setSlider1] = useState(0)
    const [slider2, setSlider2] = useState(0)
    const [slider5, setSlider5] = useState(0)
    const [slider6, setSlider6] = useState(0)
    const [slider7, setSlider7]= useState(0)


    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>




                    <a 
                        name="muzeul" 
                        id="muzeul"
                        className={styles.projectRowLeft}
                    >
                        <div
                            className={`
                                ${styles.projectImgLeft}
                                ${slider1 == 0? styles.background1_2 : ""}
                                ${slider1 == 1? styles.background1_3 : ""}
                                ${slider1 == 2? styles.background1_4 : ""}
                                ${slider1 == 3? styles.background1_5 : ""}
                                ${slider1 == 4? styles.background1_6 : ""}
                                ${slider1 == 5? styles.background1_7 : ""}
                                ${slider1 == 6? styles.background1_8 : ""}
                            `}
                        >
                             <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider1==0){
                                        setSlider1(6)
                                    }
                                    else{
                                        setSlider1(slider1-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider1==6){
                                        setSlider1(0)
                                    }
                                    else{
                                        setSlider1(slider1+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>

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
                           <Link href="/catalog/parchetBradut">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Parchet brăduț
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                    </a>




                    <a 
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
                            <Link href="/catalog/parchetPunte">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Parchet punte
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                        <div
                            className={`
                                ${styles.projectImgRight}
                                ${slider2 == 0? styles.background2_1 : ""}
                                ${slider2 == 1? styles.background2_2 : ""}
                                ${slider2 == 2? styles.background2_3 : ""}
                                ${slider2 == 3? styles.background2_4 : ""}
                                ${slider2 == 4? styles.background2_5 : ""}
                            `}
                        >
                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider2==0){
                                        setSlider2(4)
                                    }
                                    else{
                                        setSlider2(slider2-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider2==4){
                                        setSlider2(0)
                                    }
                                    else{
                                        setSlider2(slider2+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>
                    </a>




                    <a 
                        name="manucBei" 
                        id="manucBei"
                        className={styles.projectRowLeft}
                    >
                        <div
                            className={`
                                ${styles.projectImgLeft}
                                ${slider1 == 0? styles.background3_1 : ""}
                                ${slider1 == 1? styles.background3_2 : ""}
                                ${slider1 == 2? styles.background3_3 : ""}
                                ${slider1 == 3? styles.background3_4 : ""}
                                ${slider1 == 4? styles.background3_5 : ""}
                                ${slider1 == 5? styles.background3_6 : ""}
                            `}
                        >
                             <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider1==0){
                                        setSlider1(5)
                                    }
                                    else{
                                        setSlider1(slider1-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider1==5){
                                        setSlider1(0)
                                    }
                                    else{
                                        setSlider1(slider1+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>

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
                                Un castel în stil francez de o frumusețea uimitoare, cu o grădină de iarnă, turnuri de pază și un parc imens, care însă nu au trecut neatinse de toate intimperiile istoriei. Cu toate acetea, în 2012 au demarat lucrările de reconstrucție și astăzi el poate fi admirat în toată splendoarea și măreția sa. Compania BWP și-a asumat responsabilitatea de a readuce aspectul veritabil al secolului trecut, renovând parchetul din toate camerele din conac. Fiecare placă de lemn a avut un design individual și a fost instalată manual, de echipa noastră de meșteri.                             
                            </p>
                            <Link href="/catalog/patrateModule">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Parchet Modular
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                    </a>




                    <a 
                        name="phiVegan" 
                        id="phiVegan"
                        className={styles.projectRowRight}
                    >
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginLeft : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Phi Vegan Restaurant
                            </h2>
                            <p className={styles.subheading}>
                                Tot ce vine din natură este o artă, de la bucatele de tip raw vegan, până la cele mai fine linii ale plăcii de lemn. Acest restaurant combină aceste aspecte, într-un mod atât de organic și echilibrat, încât este un sentiment constant că te afli în sânul naturii.
                            </p>
                            <Link href="/catalog/parchetPunte">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Parchet punte
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                        <img
                            src="/mainPage/veganClient.jpg"
                            alt="Phi Vegan Restaurant"
                            className={styles.projectImgRight}
                        />
                    </a>





                    <a 
                        name="rozmarin" 
                        id="rozmarin"
                        className={styles.projectRowLeft}
                    >
                        <div
                            className={`
                                ${styles.projectImgLeft}
                                ${slider5 == 0? styles.background5_1 : ""}
                                ${slider5 == 1? styles.background5_2 : ""}
                                ${slider5 == 2? styles.background5_3 : ""}
                                ${slider5 == 3? styles.background5_4 : ""}
                            `}
                        >
                             <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider5==0){
                                        setSlider5(3)
                                    }
                                    else{
                                        setSlider5(slider5-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider5==3){
                                        setSlider5(0)
                                    }
                                    else{
                                        setSlider5(slider5+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>
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
                            <Link href="/catalog/pereti">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Pereți din lemn
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                    </a>
                    


                    <a 
                        name="kiku" 
                        id="kiku"
                        className={styles.projectRowRight}
                    >
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Kiku Restaurant
                            </h2>
                            <p className={styles.subheading}>
                                Un steak house de excepție cere ca totul să fie la fel de rafinat ca și de la bucatele gătite de chef. 
                                În colaborare cu o echipă locală de designeri am realizat un proiect de interior modern cu elemente naturale din lemn, pentru a asigura o atmosferă calmă, călduroasă și care să rețină clientul cât mai mult în local.
                            </p>
                            <Link href="/catalog/scari">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Scări din lemn
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                        <div
                            className={`
                                ${styles.projectImgRight}
                                ${slider6 == 0? styles.background6_1 : ""}
                                ${slider6 == 1? styles.background6_2 : ""}
                                ${slider6 == 2? styles.background6_3 : ""}
                                ${slider6 == 3? styles.background6_4 : ""}
                                ${slider6 == 4? styles.background6_5 : ""}
                            `}
                        >
                             <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider6==0){
                                        setSlider6(4)
                                    }
                                    else{
                                        setSlider6(slider6-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider6==4){
                                        setSlider6(0)
                                    }
                                    else{
                                        setSlider6(slider6+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>
                    </a>



                    <a 
                        name="lumecraft" 
                        id="lumencraft"
                        className={styles.projectRowLeft}
                    >
                        <div
                            className={`
                                ${styles.projectImgLeft}
                                ${slider7 == 0? styles.background7_1 : ""}
                                ${slider7 == 1? styles.background7_2 : ""}
                                ${slider7 == 2? styles.background7_3 : ""}
                                ${slider7 == 3? styles.background7_4 : ""}
                                ${slider7 == 4? styles.background7_5 : ""}
                                ${slider7 == 5? styles.background7_6 : ""}
                            `}
                        >
                             <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider7==0){
                                        setSlider7(5)
                                    }
                                    else{
                                        setSlider7(slider7-1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.arrowButton}
                                />
                            </div>

                            <div 
                                className={styles.slideButtonWrapper}
                                onClick={ ()=> {
                                    if(slider7==5){
                                        setSlider7(0)
                                    }
                                    else{
                                        setSlider7(slider7+1)
                                    }
                                }}
                            >
                                <img
                                    src="/mainPage/leftArrow.svg"
                                    alt="Google"
                                    className={styles.secondArrowButton}
                                />
                            </div>
                        </div>
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                Restaurant Lumencraft
                            </h2>
                            <p className={styles.subheading}>
                                În incita unuia dintre cele mai aglomerate locuri din oraș, Aeroportul Internațional Chișinău, restaurantul Lumencraft se evidențiază chiar de la prima vedere, datorită aspectului exterior din lemn natural. Fiecare element din lemn, fie că e podea, perete, plafon sau coloană a fost creat la fabrica BWP, utilizând tehnologii performante.                            </p>
                                <Link href="/catalog/pereti">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        Pereți din lemn
                                        <img
                                            src="/proiecte/rightArrowProiecte.svg"
                                            alt=""
                                            className={styles.arrow}
                                        />
                                    </div>
                               </a>
                           </Link>
                        </div>
                    </a>




                </div>
            </section>
        </div>
    )
}