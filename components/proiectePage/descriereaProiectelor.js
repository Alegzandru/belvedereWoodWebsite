import styles from "../../styles/proiecte/descriereaProiectelor.module.css"
import {useState, useEffect} from "react"
import Link from 'next/link'
import {text} from "../text"
import Image from 'next/image'


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


export function DescriereaProiectelor(props){

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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>

                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                {text.proiectePage[props.lang].project1}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project1Description}
                           </p>
                           <Link href="/catalog/parchetBradut">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project1Button}
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
                                {text.proiectePage[props.lang].project2}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project2Description}
                            </p>
                            <Link href="/catalog/parchetPunte">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project2Button}
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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>

                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                {text.proiectePage[props.lang].project3}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project3Description}
                            </p>
                            <Link href="/catalog/patrateModule">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project3Button}
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
                                {text.proiectePage[props.lang].project4}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project4Description}
                            </p>
                            <Link href="/catalog/parchetPunte">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project4Button}
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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                {text.proiectePage[props.lang].project5}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project5Description}
                            </p>
                            <Link href="/catalog/pereti">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project5Button}
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
                                {text.proiectePage[props.lang].project6}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project6Description}
                            </p>
                            <Link href="/catalog/scari">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project6Button}
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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.arrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
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
                                <div className={styles.secondArrowButton}>
                                    <Image
                                        src="/mainPage/leftArrow.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div 
                            className={styles.textWrapper}
                            // style={{
                            //     marginRight : mobile ? "" : "-100px"
                            // }}
                        >
                            <h2 className={styles.h2}>
                                {text.proiectePage[props.lang].project7}
                            </h2>
                            <p className={styles.subheading}>
                                {text.proiectePage[props.lang].project7Description}
                            </p>
                                <Link href="/catalog/pereti">
                               <a
                                style={{
                                    textDecoration: "none"
                                }}
                               >
                                    <div className={styles.button}>
                                        {text.proiectePage[props.lang].project7Button}
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