import { useContext, useState } from "react"
import styles from "../../styles/catalog/parchetBradut.module.css"
// import {parchetBradut} from "./prices"
import Link from 'next/link'
import {WidthContext} from "../context"
import {Link as LinkScroll} from 'react-scroll'


export function ProdusPage(props){

    const [slide, setSlide] = useState(0)
    const [bottomSlide, setBottomSlide] = useState(0)
    const [popupOpen, setPopupOpen] = useState(false)
    const [dropdownHover, setDropdownHover] = useState(false)
    const [selected, setSelected] = useState(0)
    const [area, setArea] = useState(0)
    const [popUpClicked, setpopUpClicked] = useState(0)
    const {width, setWidth} = useContext(WidthContext)
    const [chosenChar, setChosenChar] = useState(0)

    function handleInputChangeArea(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setArea(value)
        console.log(area)
    }

    const [emailSent, setEmailSent] = useState(false)
    const [state, setState] = useState({
        nume: "",
        prenume: "",
        email: "",
        message: "",
        number: ""
    })

    function handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setState({ ...state , [name]: value });
    }

    function sendEmail(e) {

        setEmailSent(true)

        e.preventDefault();


        const templateParams = {
            from_name: state.nume + state.prenume + " (" + state.email + " " + state.number + ")",
            to_name: "Alexandru Codreanu",
            message: state.message
        };

        emailjs
            .send("contact_service_bwp", "contact_form", templateParams, "user_mI8fMO1xh7LRltvIQ3FQk")
            .then(
                function(response) {
                // toast.success("Your message has successfully sent!", {
                //     position: toast.POSITION.BOTTOM_CENTER
                // });
                console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                // toast.error("Your message was not able to be sent");
                }
            );
        setState({
            nume: "",
            prenume: "",
            email: "",
            message: "",
            number: ""
        });
    }

    return(
        <div>
            <div 
                className={`${popUpClicked == 0 ? styles.popupWrapper : styles.popupWrapperForm}`}
                style={{
                    display : popupOpen ? "block" : "none"
                }}
            >

                <img
                    src="/catalog/closeIcon2.svg"
                    className={styles.closeIcon}
                    onClick={() => setPopupOpen(false)}
                />

                <div style={{
                    display : popUpClicked == 0 ? "block" : "none"
                }}>
                    <div className={styles.popupHeading}>
                        Calculează prețul parchetului
                    </div>

                    <div 
                        className={styles.selectionBox}
                        style={{
                            position : "absolute",
                            zIndex : "2",
                            width: width < 528 ? "calc(100% - 20px)" : ""
                        }}
                    >
                        <div 
                            className={styles.selectionText}
                        >
                            Selecteaza modelul
                        </div>
                        <div 
                            className={styles.dropdownColumn}
                            onMouseEnter={ () => setDropdownHover(true)}
                            onMouseLeave={ () => setDropdownHover(false)}
                        >
                            <div 
                                className={styles.dropdownBoxActive}
                            >
                                <div className={styles.dropdownTextActive}>
                                    {props.product[selected].name}
                                </div>
                                <img 
                                    src={dropdownHover ? 
                                        "/catalog/downArrow3.svg" :
                                        "/catalog/rightArrowWhite.svg"
                                    }
                                    className={styles.whiteArrow}
                                >
                                </img>
                            </div>

                            <div 
                                className={styles.inactiveBox}
                                style={{
                                    display : dropdownHover ? "block" : "none"
                                }}
                            >
                                <div 
                                    className={styles.dropdownBoxInactive}
                                    onClick={() =>{
                                        if(selected == props.product.length-1){
                                            setSelected(0)
                                        }
                                        else{
                                            setSelected(selected+1)
                                        }
                                    }}
                                >
                                    <div className={styles.dropdownTextInactive}>
                                        {
                                            props.product[
                                                selected == props.product.length-1 ?
                                                0 : 
                                                selected+1
                                            ].name
                                        }
                                    </div>
                                </div>
                                <div 
                                    className={styles.dropdownBoxInactive}
                                    style={{
                                        display: props.product.length == 3 ? "block" : "none"
                                    }}
                                    onClick={() =>{
                                        if(props.product.length == 3){
                                            if(selected == props.product.length - 2){
                                                setSelected(0)
                                            }
                                            else if(selected == props.product.length - 1){
                                                setSelected(1)
                                            }
                                            else{
                                                setSelected(selected+2)
                                            }
                                        }
                                        else{
                                            
                                        }
                                    }}
                                >
                                    <div className={styles.dropdownTextInactive}>
                                        {
                                            props.product.length == 3 ? 
                                            props.product[
                                                selected == props.product.length-2 ?
                                                0 : 
                                                selected == props.product.length-1 ?
                                                1 :
                                                selected+2
                                            ].name
                                            :
                                            ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={styles.selectionBox}
                        style={{
                            marginTop: "80px"
                        }}
                    >
                        <div className={styles.selectionText}>
                            Introdu suprafața
                        </div>
                        <div className={styles.inputBox}>
                            <input
                                className={styles.surfaceInput}
                                type="text" 
                                placeholder="0" 
                                id="area"
                                name="area"
                                onChange={handleInputChangeArea}
                                required
                                value={area}
                            />
                            m
                            <sup>2</sup>
                        </div>
                    </div>

                    <div className={styles.priceBoxPopup}>
                        <div className={styles.priceText}>
                            Preț estimativ:
                        </div>
                        <div className={styles.priceInsideBox}>
                            <div className={styles.price}>
                                {area * props.product[selected].price1}
                                {
                                    props.product[selected].price2 == 0 ? 
                                    ""
                                    :
                                    ` - ${area * props.product[selected].price2}`
                                }
                            </div>
                            <div className={styles.currency}>
                                &euro;
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    style={{
                            display : popUpClicked == 1 ? "block" : "none"
                    }}
                    className={styles.formWrapper}
                >
                    <h2 className={styles.h2Right}>
                        Lăsați-ne un mesaj
                    </h2>
                    <form
                        onSubmit={sendEmail}
                        className={styles.form}
                    >
                        <div className={styles.nameInputsWrapper}>
                            <input
                                type="text" 
                                placeholder="Nume" 
                                className={styles.inputSmall}
                                type="text" 
                                id="name"
                                name="nume"
                                onChange={handleInputChange}
                                required
                                value={state.nume}
                            ></input>
                            <input 
                                type="text" 
                                placeholder="Prenume" 
                                className={styles.inputSmall}
                                id="name"
                                name="prenume"
                                onChange={handleInputChange}
                                required
                                value={state.prenume}
                            ></input>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Număr de telefon" 
                            className={styles.input}
                            id="name"
                            name="number"
                            onChange={handleInputChange}
                            required
                            value={state.number}
                        ></input>
                        <input 
                            type="text" 
                            placeholder="Adresa electronică" 
                            className={styles.input}
                            id="email"
                            name="email"
                            onChange={handleInputChange}
                            required
                            value={state.email}                        
                        ></input>
                        <input 
                            type="text" 
                            placeholder="Mesaj" 
                            className={styles.input} 
                            style={{height: "120px"}}
                            id="message"
                            name="message"
                            onChange={handleInputChange}
                            required
                            value={state.message}                        
                        ></input>
                        <input
                            type="submit"
                            placeholder="Trimite" 
                            className={styles.buttonSubmit}
                        >
                        </input>
                    </form>
                </div>
            </div>
            <div 
                className={styles.wrapper}
                style={{
                    filter : popupOpen ? "brightness(30%)" : "brightness(100%)"
                }}
            >
                <section
                    className={styles.section}
                >
                    <div 
                        className={
                            `
                            ${styles.upperPhotoWrapper}
                            ${props.name== "Parchet Punte" ? styles.backgroundPunte : ""}
                            ${props.name== "Parchet Brăduț" ? styles.backgroundBradut : ""}
                            ${props.name== "Pătrate Module" ? styles.backgroundModule : ""}
                            ${props.name== "Scări din lemn masiv" ? styles.backgroundScari : ""}
                            ${props.name== "Pereți din lemn natural" ? styles.backgroundPereti : ""}
                            `
                        }
                    >
                        <h1 className={styles.h1}>
                            {props.name}
                        </h1>
                        <p className={styles.subheading}>
                            {props.upperText}
                        </p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.breadcrumbWrapper}>
                            <Link href="/">
                                <a className={styles.inactiveLink}>
                                    Principala
                                </a>
                            </Link>
                            <img
                                src="/proiecte/rightArrowProiecte.svg"
                                alt=""
                                className={styles.arrow}
                            />
                            <Link href="/catalog">
                                <a className={styles.inactiveLink}>
                                    Catalog
                                </a>
                            </Link>
                            <img
                                src="/proiecte/rightArrowProiecte.svg"
                                alt=""
                                className={styles.arrow}
                            />
                            <span className={styles.activeLink}>
                                {props.name}
                            </span>
                        </div>
                        
                        <div className={styles.productDescriptionWrapper}>
                            <div className={styles.sliderWrapper}>
                                <img 
                                    className={styles.productImg}
                                    src={props.sliderTop[slide].src}
                                    style={{
                                        objectFit : props.name == "Pătrate Module" ? "contain" : "cover",
                                        boxShadow : props.name == "Pătrate Module" ? "none" : ""
                                    }}
                                />
                                <div className={styles.slideButtonsWrapper}>
                                    {props.sliderTop.map((img, index) => 
                                        <div 
                                            className={slide == index ? styles.slideButtonActive : styles.slideButtonInactive}
                                            onClick={() => setSlide(index)}
                                            key={img.src}
                                        ></div>
                                    )}
                                </div>

                                <div
                                    className={styles.changeSlideWrapper}
                                >
                                    <div 
                                        className={styles.changeSlideButton}
                                        onClick={()=>{
                                            if(slide==0){
                                                setSlide(props.sliderTop.length-1)
                                            }
                                            else{
                                                setSlide(slide-1)
                                            }
                                        }}
                                    >
                                        <img
                                            className={styles.arrowLeft}
                                            src="/catalog/whiteArrowRight.svg"
                                        />
                                    </div>

                                    <div 
                                        className={styles.changeSlideButton}
                                        onClick={()=>{
                                            if(slide==props.sliderTop.length-1){
                                                setSlide(0)
                                            }
                                            else{
                                                setSlide(slide+1)
                                            }
                                        }}
                                    >
                                        <img
                                            className={styles.arrowRight}
                                            src="/catalog/whiteArrowRight.svg"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className={styles.textWrapper}>
                                <h2 className={styles.h2Small}>
                                    {props.name}
                                </h2>
                                <div className={styles.description}>
                                    {props.description} 
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    <div 
                                        className={styles.button}
                                        onClick={ () => {
                                            setPopupOpen(true) 
                                            setpopUpClicked(0)
                                        }}
                                        style={{
                                            display : props.showPriceButton ? "flex" : "none"
                                        }}
                                    >
                                        Calculează prețul
                                    </div>
                                    <div 
                                        className={styles.button}
                                        onClick={ () => {
                                            setPopupOpen(true) 
                                            setpopUpClicked(1)
                                        }}
                                    >
                                        Ofertă individuală
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div 
                            className={styles.scrollWrapper}
                            style={{
                                display: props.name == "Scări din lemn masiv" ?
                                "none" : props.name == "Pereți din lemn natural" ?
                                "none" : "flex"
                            }}
                        >
                            <div className={styles.mouseImg}>
                                <img
                                    src="/mainPage/mouse.svg"
                                    alt="Mouse"
                                />
                            </div>

                            <div className={styles.scrollText}>
                                Scroll pentru a vedea tipurile de parchet
                            </div>
                        </div>

                        <div 
                            className={styles.productTypesWrapper}
                            style={{
                                display : props.showTypes ? "block" : "none"
                            }}
                        >
                            <h2 className={styles.h2}>
                                Tipuri de {props.name}
                            </h2>

                            <div 
                                className={styles.productTypesBox}
                                style={{
                                    justifyContent : props.product.length == 3 ? "space-between" : "center"
                                }}
                            >
                                <div 
                                    className={styles.mobileTypeWrapper}
                                    style={{
                                        marginRight : props.product.length == 2 ? "20px" : "none"
                                    }}
                                >

                                    <LinkScroll
                                        to="characteristics"
                                        smooth={true}
                                    >
                                        <div 
                                            className={`
                                                ${styles.productTypeBox} 
                                                ${props.name == "Parchet Punte" ? styles.punte1 : ""}
                                                ${props.name == "Parchet Brăduț" ? styles.bradut1 : ""}
                                                ${props.name == "Pătrate Module" ? styles.patrat1 : ""}
                                            `}
                                            onClick={ ()=> setChosenChar(0)}
                                        >
                                            <div className={styles.productNameWrapper}>
                                                <div className={styles.productTypeName}>
                                                    {props.product[0].name}
                                                </div>
                                                <div 
                                                    className={styles.productTypeDeg}
                                                    style={{
                                                        display : props.product[0].description == "" ? "none" : "block"
                                                    }}
                                                >
                                                    {props.product[0].description}
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>

                                    <div className={styles.priceBox}>
                                        Preț : <span className={styles.price}>{props.product[0].price}</span>
                                    </div>
                                </div>

                                <div className={styles.mobileTypeWrapper}>
                                    <LinkScroll
                                        to="characteristics"
                                        smooth={true}
                                    >
                                        <div 
                                            className={`
                                            ${styles.productTypeBox} 
                                            ${props.name == "Parchet Punte" ? styles.punte2 : ""}
                                            ${props.name == "Parchet Brăduț" ? styles.bradut2 : ""}
                                            ${props.name == "Pătrate Module" ? styles.patrat2 : ""}
                                        `}
                                            onClick={ ()=> setChosenChar(1)}
                                        >
                                            <div className={styles.productNameWrapper}>
                                                <div className={styles.productTypeName}>
                                                    {props.product[1].name}
                                                </div>
                                                <div className={styles.productTypeDeg}>
                                                    {props.product[1].description}
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>
                                    
                                    <div className={styles.priceBox}>
                                        Preț : <span className={styles.price}>{props.product[1].price}</span>
                                    </div>
                                </div>

                                <div 
                                    className={styles.mobileTypeWrapper}
                                    style={{
                                        display : props.product.length == 3 ? "block" : "none"
                                    }}
                                >
                                    <LinkScroll
                                        to="characteristics"
                                        smooth={true}
                                    >
                                        <div 
                                            className={`${styles.productTypeBox} ${styles.bradut3}`}
                                            onClick={ ()=> setChosenChar(2)}
                                        >
                                            <div className={styles.productNameWrapper}>
                                                <div className={styles.productTypeName}>
                                                    Herringbone
                                                </div>
                                                <div className={styles.productTypeDeg}>
                                                    (90 grade)
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>
                                    
                                    <div className={styles.priceBox}>
                                        Preț : <span className={styles.price}>65-80 EUR/mp</span>
                                    </div>
                                </div>

                            </div>

                            <div 
                                className={styles.scrollWrapper}
                                style={{
                                    marginTop: "30px"
                                }}
                            >
                                <div className={styles.mouseImg}>
                                    <img
                                        src="/catalog/clickIcon2.svg"
                                        alt="Mouse"
                                    />
                                </div>

                                <div className={styles.scrollText}>
                                    Click pe unul dintre tipuri pentru a vedea caracteristicile                            
                                </div>
                            </div>

                        </div>

                        <div 
                            className={styles.characteristicsWrapper}
                            name="characteristics"
                            style={{
                                display: props.name == "Pereți din lemn natural" ? "none" : "block"
                            }}
                        >
                            <h2 className={styles.h2}>
                                Caracteristicile produsului ({props.product[chosenChar].name})
                            </h2>
                            <div className={styles.characteristicsBox}>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Structura</h3>
                                    <div className={styles.line}></div>
                                    {props.product[chosenChar].caracteristici.structura.map((caracteristica, index)=>
                                    <div>
                                        <div className={styles.accentChar}>
                                            {caracteristica.textBold}
                                        </div>
                                        <div className={styles.char}>
                                            {caracteristica.textSimplu}
                                        </div>
                                    </div>
                                    )}
                                </div>


                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>
                                        {props.name == "Pătrate Module" ? 
                                            "Caracteristici tehnice"
                                            :
                                            "Avantaje"
                                        }
                                    </h3>
                                    <div className={styles.line}></div>
                                    {props.name == "Pătrate Module" ?
                                        props.product[chosenChar].caracteristici.avantaje.map((caracteristica, index)=>
                                        <div>
                                            <div className={styles.accentChar}>
                                                {caracteristica.textBold}
                                            </div>
                                            <div className={styles.char}>
                                                {caracteristica.textSimplu}
                                            </div>
                                        </div>
                                        )
                                        :
                                        props.product[chosenChar].caracteristici.avantaje.map((caracteristica, index)=>
                                            <div className={styles.avantajBox}>
                                                <img
                                                    className={styles.avantajImg}
                                                    src={caracteristica.imgSrc}
                                                ></img>
                                                <div className={styles.avantajText}>
                                                    {caracteristica.text}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>


                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Mărime</h3>
                                    <div className={styles.line}></div>
                                    {props.product[chosenChar].caracteristici.marime.map((caracteristica, index)=>
                                        <div>
                                            <div className={styles.accentChar}>
                                                {caracteristica.textBold}                               
                                            </div>
                                            <div className={styles.char}>
                                                {caracteristica.textSimplu}                               
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className={styles.photosWrapper}>
                            <h2 className={styles.h2}>
                                Produsele noastre
                            </h2>
                            <div className={styles.photosBox}>
                                <div className={styles.photoColumn}>
                                    <img
                                        src={
                                            bottomSlide == 0 ? 
                                            props.sliderBottom[props.sliderBottom.length - 1].src :
                                            props.sliderBottom[bottomSlide-1].src
                                        }
                                        className={styles.sidePhoto}
                                    ></img>

                                    <div 
                                        className={styles.changeSlideButton1}
                                        style={{marginLeft: "auto"}}
                                        onClick={()=>{
                                            if(bottomSlide==0){
                                                setBottomSlide(props.sliderBottom.length-1)
                                            }
                                            else{
                                                setBottomSlide(bottomSlide-1)
                                            }
                                        }}
                                    >
                                        <img
                                            className={styles.arrowLeft1}
                                            src="/catalog/whiteArrowRight.svg"
                                        />
                                    </div>
                                </div>

                                <div className={styles.photoColumnCenter}>

                                    <img
                                        src={props.sliderBottom[bottomSlide].src}
                                        className={styles.centerPhoto}
                                    ></img>


                                    <div className={styles.mobileButtonsWrapper}>
                                        <div 
                                            className={styles.changeSlideButtonTablet}
                                            style={{marginRight: "auto"}}
                                            onClick={()=>{
                                                if(bottomSlide==0){
                                                    setBottomSlide(props.sliderBottom.length-1)
                                                }
                                                else{
                                                    setBottomSlide(bottomSlide-1)
                                                }
                                            }}
                                        >
                                            <img
                                                className={styles.arrowLeft1}
                                                src="/catalog/whiteArrowRight.svg"
                                            />
                                        </div>
                                        <div 
                                            className={styles.changeSlideButtonTablet}
                                            style={{marginLeft: "auto"}}
                                            onClick={()=>{
                                                if(bottomSlide==props.sliderBottom.length-1){
                                                    setBottomSlide(0)
                                                }
                                                else{
                                                    setBottomSlide(bottomSlide+1)
                                                }
                                            }}
                                        >
                                            <img
                                                className={styles.arrowRight1}
                                                src="/catalog/whiteArrowRight.svg"
                                            />
                                        </div>
                                    </div>


                                    <div className={styles.currentText}>
                                        {props.sliderBottom[bottomSlide].name}
                                    </div>

                                </div>

                                <div className={styles.photoColumn}>
                                    <img
                                        src={
                                        bottomSlide == props.sliderBottom.length - 1 ? 
                                        props.sliderBottom[0].src :
                                        props.sliderBottom[bottomSlide+1].src
                                        }
                                        className={styles.sidePhoto}
                                    ></img>

                                    <div 
                                        className={styles.changeSlideButton1}
                                        onClick={()=>{
                                            if(bottomSlide == props.sliderBottom.length-1){
                                                setBottomSlide(0)
                                            }
                                            else{
                                                setBottomSlide(bottomSlide+1)
                                            }
                                        }}
                                    >
                                        <img
                                            className={styles.arrowRight1}
                                            src="/catalog/whiteArrowRight.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}