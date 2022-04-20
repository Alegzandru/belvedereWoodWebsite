import { useContext, useState } from "react"
import styles from "../../styles/catalog/parchetBradut.module.css"
// import {parchetBradut} from "./prices"
import Link from 'next/link'
import {WidthContext} from "../context"
import {Link as LinkScroll} from 'react-scroll'
import { text } from "../text"
import Image from 'next/image'
import {Fade} from "react-reveal"
import emailjs from 'emailjs-com';



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
        e.preventDefault();

        const templateParams = {
            from_name: state.nume + state.prenume + " ( Email : " + state.email + ", telefon : " + state.number + ")",
            to_name: "Belvedere Wood Parquet",
            message: state.message
        };

        emailjs
            .send("contact_bwp", "contact_bwp_template", templateParams, "user_EqOBrPF8rtgBDhkZe8vcW")
            .then(
                    function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    },
                    function(err) {
                    }
                );
        setState({
            nume: "",
            prenume: "",
            email: "",
            message: "",
            number: ""
        });

        setEmailSent(true)
    }

    return(
        <div>
            <Fade bottom>

                <div 
                    className={`${popUpClicked == 0 ? styles.popupWrapper : styles.popupWrapperForm}`}
                    style={{
                        display : popupOpen ? "block" : "none"
                    }}
                >

                    <div 
                        className={styles.closeIcon}
                        onClick={() => setPopupOpen(false)}
                    >
                        <Image
                            src="/catalog/closeIcon2.svg"
                            layout="fill"
                        />
                    </div>

                    <div style={{
                        display : popUpClicked == 0 ? "block" : "none"
                    }}>
                        <div className={styles.popupHeading}>
                            {text.catalogPage.produsPage[props.lang].popupHeading}
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
                                {text.catalogPage.produsPage[props.lang].selectionText}
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
                                        {props.product.types[selected].name}
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
                                            if(selected == props.product.types.length-1){
                                                setSelected(0)
                                            }
                                            else{
                                                setSelected(selected+1)
                                            }
                                        }}
                                    >
                                        <div className={styles.dropdownTextInactive}>
                                            {
                                                props.product.types[
                                                    selected == props.product.types.length-1 ?
                                                    0 : 
                                                    selected+1
                                                ].name
                                            }
                                        </div>
                                    </div>
                                    <div 
                                        className={styles.dropdownBoxInactive}
                                        style={{
                                            display: props.product.types.length == 3 ? "block" : "none"
                                        }}
                                        onClick={() =>{
                                            if(props.product.types.length == 3){
                                                if(selected == props.product.types.length - 2){
                                                    setSelected(0)
                                                }
                                                else if(selected == props.product.types.length - 1){
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
                                                props.product.types.length == 3 ? 
                                                props.product.types[
                                                    selected == props.product.types.length-2 ?
                                                    0 : 
                                                    selected == props.product.types.length-1 ?
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
                                {text.catalogPage.produsPage[props.lang].surface}
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
                                {text.catalogPage.produsPage[props.lang].aproxPrice}
                            </div>
                            <div className={styles.priceInsideBox}>
                                <div className={styles.price}>
                                    {area * props.product.types[selected].price1}
                                    {
                                        props.product.types[selected].price2 == 0 ? 
                                        ""
                                        :
                                        ` - ${area * props.product.types[selected].price2}`
                                    }
                                </div>
                                <div className={styles.currency}>
                                    &euro;
                                </div>
                            </div>
                        </div>

                        <div className={styles.priceBoxPopup}>
                            <div className={styles.priceText}>
                                {text.catalogPage.produsPage[props.lang].montarePrice}
                            </div>
                            <div className={styles.priceInsideBox}>
                                <div className={styles.price}>
                                    {area * 13}
                                </div>
                                <div className={styles.currency}>
                                    &euro;
                                </div>
                            </div>
                        </div>
                        <div 
                            className={styles.selectionText}
                            style={{
                                width: "100%"
                            }}
                        >
                            {text.catalogPage.produsPage[props.lang].montareInfo}
                        </div>
                    </div>

                    <div 
                        style={{
                                display : popUpClicked == 1 ? "block" : "none"
                        }}
                        className={styles.formWrapper}
                    >
                        <h2 className={styles.h2Right}>
                            {text.catalogPage.produsPage[props.lang].messageText}
                        </h2>
                        <form
                            onSubmit={sendEmail}
                            className={styles.form}
                        >
                            <div 
                                className={styles.succesText}
                                style={{
                                    display : emailSent ? "flex" : "none"
                                }}
                            >
                                {text.catalogPage.produsPage[props.lang].messageReceived}
                            </div>
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
                                value={text.catalogPage.produsPage[props.lang].sendButton}
                                className={styles.buttonSubmit}
                            >
                            </input>
                        </form>
                    </div>
                </div>
            </Fade>

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
                            ${props.name== "Parchet Punte"? styles.backgroundPunte : ""}
                            ${props.name== "Parchet Brăduț" ? styles.backgroundBradut : ""}
                            ${props.name== "Parchet Modular" ? styles.backgroundModule : ""}
                            ${props.name== "Scări din lemn masiv" ? styles.backgroundScari : ""}
                            ${props.name== "Pereți din lemn natural" ? styles.backgroundPereti : ""}
                            `
                        }
                    >
                        <h1 className={styles.h1}>
                            {props.product.name}
                        </h1>
                        <p className={styles.subheading}>
                            {props.product.descriptionShort}
                        </p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.breadcrumbWrapper}>
                            <Link href={`${props.lang == 0 ? "/" : ""}${props.langStr}`}>
                                <a className={styles.inactiveLink}>
                                    {props.product.link1}
                                </a>
                            </Link>
                            <div className={styles.arrow}>
                                <Image
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    layout="fill"
                                />
                            </div>
                            <Link href={`${props.langStr}/catalog`}>
                                <a className={styles.inactiveLink}>
                                    {props.product.link2}
                                </a>
                            </Link>
                            <div className={styles.arrow}>
                                <Image
                                    src="/proiecte/rightArrowProiecte.svg"
                                    alt=""
                                    layout="fill"
                                />
                            </div>
                            <span className={styles.activeLink}>
                                {props.product.name}
                            </span>
                        </div>
                        
                        <div className={styles.productDescriptionWrapper}>
                            <div className={styles.sliderWrapper}>
                                <div
                                    className={styles.productImg}
                                    style={{
                                        boxShadow : props.name == "Parchet Modular" ? "none" : ""
                                    }}
                                >
                                    <Image
                                        src={props.sliderTop[slide].src}
                                        alt={`Poza ${props.name}`}
                                        layout="fill"
                                        objectFit = {props.name == "Parchet Modular" ? "contain" : "cover"}
                                    />
                                </div>

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
                                        <div className={styles.arrowLeft}>
                                            <Image
                                                src="/catalog/whiteArrowRight.svg"
                                                alt=""
                                                layout="fill"
                                            />
                                        </div>
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
                                        <div className={styles.arrowRight}>
                                            <Image
                                                src="/catalog/whiteArrowRight.svg"
                                                alt=""
                                                layout="fill"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={styles.textWrapper}>
                                <h2 className={styles.h2Small}>
                                    {props.product.name}
                                </h2>
                                <div className={styles.description}>
                                    {props.product.descriptionLong} 
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    {/* <div 
                                        className={styles.button}
                                        onClick={ () => {
                                            setPopupOpen(true) 
                                            setpopUpClicked(0)
                                        }}
                                        style={{
                                            display : props.showPriceButton ? "flex" : "none"
                                        }}
                                    >
                                        {text.catalogPage.produsPage[props.lang].button1}
                                    </div> */}
                                    <div 
                                        className={styles.button}
                                        onClick={ () => {
                                            setPopupOpen(true) 
                                            setpopUpClicked(1)
                                        }}
                                    >
                                        {text.catalogPage.produsPage[props.lang].button2}
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
                                <Image
                                    src="/mainPage/mouse.svg"
                                    alt="Mouse"
                                    layout="fill"
                                />
                            </div>

                            <div className={styles.scrollText}>
                                {text.catalogPage.produsPage[props.lang].scrollText}
                            </div>
                        </div>

                        <div 
                            className={styles.productTypesWrapper}
                            style={{
                                display : props.showTypes ? "block" : "none"
                            }}
                        >
                            <h2 className={styles.h2}>
                                {text.catalogPage.produsPage[props.lang].typesText} {props.product.name}
                            </h2>

                            <div 
                                className={styles.productTypesBox}
                                style={{
                                    justifyContent : props.product.types.length == 3 ? "space-between" : "center"
                                }}
                            >
                                <div 
                                    className={`${styles.mobileTypeWrapper} ${styles.firstType}`}
                                    style={{
                                        // marginRight : width < 528 ? "0px" : props.product.types.length == 2 ? "20px" : "0px"
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
                                                ${props.name == "Parchet Modular" ? styles.patrat1 : ""}
                                            `}
                                            onClick={ ()=> setChosenChar(0)}
                                        >
                                            <div className={styles.productNameWrapper}>
                                                <div className={styles.productTypeName}>
                                                    {props.product.types[0].name}
                                                </div>
                                                <div 
                                                    className={styles.productTypeDeg}
                                                    style={{
                                                        display : props.product.types[0].description == "" ? "none" : "block"
                                                    }}
                                                >
                                                    {props.product.types[0].description}
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>

                                    {/* <div className={styles.priceBox}>
                                        {text.catalogPage.produsPage[props.lang].price} <span className={styles.price}>{props.product.types[0].price}</span>
                                    </div> */}
                                </div>

                                <div className={`${styles.mobileTypeWrapper} ${styles.firstType}`}>
                                    <LinkScroll
                                        to="characteristics"
                                        smooth={true}
                                    >
                                        <div 
                                            className={`
                                            ${styles.productTypeBox} 
                                            ${props.name == "Parchet Punte" ? styles.punte2 : ""}
                                            ${props.name == "Parchet Brăduț" ? styles.bradut2 : ""}
                                            ${props.name == "Parchet Modular" ? styles.patrat2 : ""}
                                        `}
                                            onClick={ ()=> setChosenChar(1)}
                                        >
                                            <div className={styles.productNameWrapper}>
                                                <div className={styles.productTypeName}>
                                                    {props.product.types[1].name}
                                                </div>
                                                <div className={styles.productTypeDeg}>
                                                    {props.product.types[1].description}
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>
                                    
                                    {/* <div className={styles.priceBox}>
                                        {text.catalogPage.produsPage[props.lang].price} <span className={styles.price}>{props.product.types[1].price}</span>
                                    </div> */}
                                </div>

                                <div 
                                    className={styles.mobileTypeWrapper}
                                    style={{
                                        display : props.product.types.length == 3 ? "flex" : "none"
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
                                                    {
                                                        props.product.types.length == 3 ?
                                                        props.product.types[2].name : ""
                                                    }
                                                </div>
                                                <div className={styles.productTypeDeg}>
                                                    {
                                                        props.product.types.length == 3 ?
                                                        props.product.types[2].description : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </LinkScroll>
                                    
                                    {/* <div className={styles.priceBox}>
                                        {text.catalogPage.produsPage[props.lang].price} : <span className={styles.price}>65-80 EUR/mp</span>
                                    </div> */}
                                </div>

                            </div>

                            <div 
                                className={styles.scrollWrapper}
                                style={{
                                    marginTop: "30px"
                                }}
                            >
                                <div className={styles.mouseImg}>
                                    <Image
                                        src="/catalog/clickIcon2.svg"
                                        alt="Click"
                                        layout="fill"
                                    />
                                </div>

                                <div className={styles.scrollText}>
                                    {text.catalogPage.produsPage[props.lang].clickType}
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
                                {text.catalogPage.produsPage[props.lang].characteristics} ({props.product.types[chosenChar].name})
                            </h2>
                            <div className={styles.characteristicsBox}>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>
                                        {text.catalogPage.produsPage[props.lang].structure}
                                    </h3>
                                    <div className={styles.line}></div>
                                    {props.product.types[chosenChar].caracteristici.structura.map((caracteristica, index)=>
                                    <div key={index*10}>
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
                                        {props.name == "Parchet Modular" ? 
                                            text.catalogPage.produsPage[props.lang].technichalCharacteristics
                                            :
                                            text.catalogPage.produsPage[props.lang].advantages
                                        }
                                    </h3>
                                    <div className={styles.line}></div>
                                    {props.name == "Parchet Modular" ?
                                        props.product.types[chosenChar].caracteristici.avantaje.map((caracteristica, index)=>
                                        <div key={index*11}>
                                            <div className={styles.accentChar}>
                                                {caracteristica.textBold}
                                            </div>
                                            <div className={styles.char}>
                                                {caracteristica.textSimplu}
                                            </div>
                                        </div>
                                        )
                                        :
                                        props.product.types[chosenChar].caracteristici.avantaje.map((caracteristica, index)=>
                                            <div className={styles.avantajBox} key={index*12}>
                                                <div className={styles.avantajImg}>
                                                    <Image
                                                        src={caracteristica.imgSrc}    
                                                        alt="Avantajul parchetului Belvedere Wood"
                                                        layout="fill"                                                
                                                    />
                                                </div>
                                                <div className={styles.avantajText}>
                                                    {caracteristica.text}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>


                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>
                                        {text.catalogPage.produsPage[props.lang].size}
                                    </h3>
                                    <div className={styles.line}></div>
                                    {props.product.types[chosenChar].caracteristici.marime.map((caracteristica, index)=>
                                        <div key={index*13}>
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
                                {text.catalogPage.produsPage[props.lang].ourProducts}                            
                            </h2>
                            <div className={styles.photosBox}>
                                <div className={styles.photoColumn}>
                                    <div
                                        src={
                                            bottomSlide == 0 ? 
                                            props.sliderBottom[props.sliderBottom.length - 1].src :
                                            props.sliderBottom[bottomSlide-1].src
                                        }
                                        className={styles.sidePhoto}
                                    >
                                        <Image
                                            src={
                                                bottomSlide == 0 ? 
                                                props.sliderBottom[props.sliderBottom.length - 1].src :
                                                props.sliderBottom[bottomSlide-1].src
                                            }
                                            alt="Produs marca Belvedere Wood Parquet"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>

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
                                        <Image
                                            className={styles.arrowLeft1}
                                            src="/catalog/whiteArrowRight.svg"
                                            alt=""
                                            layout="fill"
                                        />
                                    </div>
                                </div>

                                <div className={styles.photoColumnCenter}>

                                    <div className={styles.centerPhoto}>
                                        <Image
                                            src={props.sliderBottom[bottomSlide].src}
                                            alt="Produs marca Belvedere Wood Parquet"
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>


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
                                            <div className={styles.arrowLeft1}>
                                                <Image
                                                    src="/catalog/whiteArrowRight.svg"
                                                    alt=""
                                                    layout="fill"
                                                />
                                            </div>
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
                                            <div className={styles.arrowRight1}>
                                                <Image
                                                    src="/catalog/whiteArrowRight.svg"
                                                    alt=""
                                                    layout="fill"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.currentText}>
                                        {props.sliderBottom[bottomSlide].name}
                                    </div>

                                </div>

                                <div className={styles.photoColumn}>
                                    <div className={styles.sidePhoto}>
                                        <Image
                                            src={
                                                bottomSlide == props.sliderBottom.length - 1 ? 
                                                props.sliderBottom[0].src :
                                                props.sliderBottom[bottomSlide+1].src
                                            }
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>

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