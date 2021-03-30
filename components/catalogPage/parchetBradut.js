import { useState } from "react"
import styles from "../../styles/catalog/parchetBradut.module.css"
import {sliderParchetBradutTop, sliderParchetBradutBottom} from "./sliderContent"
import {parchetBradut} from "./prices"
import Link from 'next/link'


export function ParchetBradut(){

    const [slide, setSlide] = useState(0)
    const [bottomSlide, setBottomSlide] = useState(0)
    const [popupOpen, setPopupOpen] = useState(false)
    const [dropdownHover, setDropdownHover] = useState(false)
    const [selected, setSelected] = useState(0)
    const [area, setArea] = useState(0)

    function handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setArea(value)
        console.log(area)
    }

    return(
        <div>
            <div 
                className={styles.popupWrapper}
                style={{
                    display : popupOpen ? "block" : "none"
                }}
            >

                <img
                    src="/catalog/closeIcon2.svg"
                    className={styles.closeIcon}
                    onClick={() => setPopupOpen(false)}
                />

                <div className={styles.popupHeading}>
                    Calculează prețul parchetului
                </div>

                <div className={styles.selectionBox}>
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
                                {parchetBradut[selected].name}
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
                                    selected == 0 ? 
                                    setSelected(1) :
                                    selected == 1 ? 
                                    setSelected(2) :
                                    selected == 2 ? 
                                    setSelected(0) : setSelected("")
                                }}
                            >
                                <div className={styles.dropdownTextInactive}>
                                    {
                                        selected == 0 ? 
                                        parchetBradut[1].name :
                                        selected == 1 ? 
                                        parchetBradut[2].name :
                                        selected == 2 ? 
                                        parchetBradut[0].name : ""
                                    }
                                </div>
                            </div>
                            <div 
                                className={styles.dropdownBoxInactive}
                                onClick={() =>{
                                    selected == 0 ? 
                                    setSelected(2) :
                                    selected == 1 ? 
                                    setSelected(0) :
                                    selected == 2 ? 
                                    setSelected(1) : setSelected("")
                                }}
                            >
                                <div className={styles.dropdownTextInactive}>
                                    {
                                        selected == 0 ? 
                                        parchetBradut[2].name:
                                        selected == 1 ? 
                                        parchetBradut[0].name :
                                        selected == 2 ? 
                                        parchetBradut[1].name : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.selectionBox}>
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
                            onChange={handleInputChange}
                            required
                            value={area}
                        />
                        m
                        <sup>2</sup>
                    </div>
                </div>

                <div className={styles.priceBoxPopup}>
                    <div className={styles.priceText}>
                        Preț final:
                    </div>
                    <div className={styles.priceInsideBox}>
                        <div className={styles.price}>
                            {area * parchetBradut[selected].price}
                        </div>
                        <div className={styles.currency}>
                            &euro;
                        </div>
                    </div>
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
                    <div className={styles.upperPhotoWrapper}>
                        <h1 className={styles.h1}>
                            Parchet bradut
                        </h1>
                        <p className={styles.subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio at est blandit venenatis. Nunc quis sollicitudin leo, non commodo lacus.
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
                                Parchet bradut
                            </span>
                        </div>

                        <div className={styles.productDescriptionWrapper}>
                            <div className={styles.sliderWrapper}>
                                <img 
                                    className={styles.productImg}
                                    src={sliderParchetBradutTop[slide].src}
                                />
                                <div className={styles.slideButtonsWrapper}>
                                    <div 
                                        className={slide == 0 ? styles.slideButtonActive : styles.slideButtonInactive}
                                        onClick={() => setSlide(0)}
                                    ></div>
                                    <div 
                                        className={slide == 1 ? styles.slideButtonActive : styles.slideButtonInactive}
                                        onClick={() => setSlide(1)}
                                    ></div>
                                    <div 
                                        className={slide == 2 ? styles.slideButtonActive : styles.slideButtonInactive}
                                        onClick={() => setSlide(2)}
                                    ></div>
                                    <div 
                                        className={slide == 3 ? styles.slideButtonActive : styles.slideButtonInactive}
                                        onClick={() => setSlide(3)}
                                    ></div>
                                    <div 
                                        className={slide == 4 ? styles.slideButtonActive : styles.slideButtonInactive}
                                        onClick={() => setSlide(4)}
                                    ></div>
                                </div>

                                <div
                                    className={styles.changeSlideWrapper}
                                >
                                    <div 
                                        className={styles.changeSlideButton}
                                        onClick={()=>{
                                            if(slide==0){
                                                setSlide(4)
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
                                            if(slide==4){
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
                                    Parchet bradut
                                </h2>
                                <div className={styles.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et risus sapien. Vivamus sodales cursus sem, vitae sollicitudin lacus ornare accumsan. 
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    <div 
                                        className={styles.button}
                                        onClick={ () => setPopupOpen(true) }
                                    >
                                        Calculează prețul
                                    </div>
                                    <div className={styles.button}>
                                        Ofertă individuală
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.scrollWrapper}>
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

                        <div className={styles.productTypesWrapper}>
                            <h2 className={styles.h2}>
                                Tipuri de parchet bradut
                            </h2>

                            <div className={styles.productTypesBox}>
                                <div className={styles.mobileTypeWrapper}>
                                    <div className={styles.productTypeBox}>
                                        <div className={styles.productNameWrapper}>
                                            <div className={styles.productTypeName}>
                                                Parchet Chevron
                                            </div>
                                            <div className={styles.productTypeDeg}>
                                                (45 grade)
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.priceBox}>
                                        Pret : <span className={styles.price}>75 EUR/mp</span>
                                    </div>
                                </div>

                                <div className={styles.mobileTypeWrapper}>
                                    <div className={styles.productTypeBox}>
                                        <div className={styles.productNameWrapper}>
                                            <div className={styles.productTypeName}>
                                                Parchet Chevron
                                            </div>
                                            <div className={styles.productTypeDeg}>
                                                (45 grade)
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.priceBox}>
                                        Pret : <span className={styles.price}>75 EUR/mp</span>
                                    </div>
                                </div>

                                <div className={styles.mobileTypeWrapper}>
                                    <div className={styles.productTypeBox}>
                                        <div className={styles.productNameWrapper}>
                                            <div className={styles.productTypeName}>
                                                Parchet Chevron
                                            </div>
                                            <div className={styles.productTypeDeg}>
                                                (45 grade)
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.priceBox}>
                                        Pret : <span className={styles.price}>75 EUR/mp</span>
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

                        <div className={styles.characteristicsWrapper}>
                            <h2 className={styles.h2}>
                                Caracteristicile produsului
                            </h2>
                            <div className={styles.characteristicsBox}>
                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Structura</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.accentChar}>
                                        1 strat
                                    </div>
                                    <div className={styles.char}>
                                        Solid wood.
                                    </div>
                                    <div className={styles.accentChar}>
                                        al 2-lea strat
                                    </div>
                                    <div className={styles.char}>
                                        Birch plywood core.
                                    </div>
                                    <div className={styles.accentChar}>
                                        al 3-lea strat
                                    </div>
                                    <div className={styles.char}>
                                        Solid fir backing orthogonal to 1st Layer.
                                    </div>
                                </div>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Marime</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.accentChar}>
                                        Grosime                               
                                    </div>
                                    <div className={styles.char}>
                                        16 mm (± 0,5)
                                    </div>
                                    <div 
                                        className={styles.accentChar}
                                        style={{fontSize:"22px"}}
                                    >
                                        Disponibil in marimile:
                                    </div>
                                    <div className={styles.accentChar}>
                                        small
                                    </div>
                                    <div className={styles.char}>
                                        width 130/140 mm length 10% (600/1200) 40% (1200/1800) 50% (1800/3000) mm 
                                    </div>
                                    <div className={styles.accentChar}>
                                        medium
                                    </div>
                                    <div className={styles.char}>
                                        width 175/185 mm length 10% (600/1200) 40% (1200/1800) 50% (1800/3800) mm 
                                    </div>
                                    <div className={styles.accentChar}>
                                        large
                                    </div>
                                    <div className={styles.char}>
                                        width 270/290 mm length 10% (600/1200) 40% (1200/1800) 50% (1800/3800) mm 
                                    </div>
                                </div>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Avantaje</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.avantajBox}>
                                        <img
                                            className={styles.avantajImg}
                                            src="/catalog/waterResistant.svg"
                                        ></img>
                                        <div className={styles.avantajText}>
                                            Rezistenta sporita la apa
                                        </div>
                                    </div>

                                    <div className={styles.avantajBox}>
                                        <img
                                            className={styles.avantajImg}
                                            src="/catalog/waterResistant.svg"
                                        ></img>
                                        <div className={styles.avantajText}>
                                            Rezistenta sporita la apa
                                        </div>
                                    </div>

                                    <div className={styles.avantajBox}>
                                        <img
                                            className={styles.avantajImg}
                                            src="/catalog/waterResistant.svg"
                                        ></img>
                                        <div className={styles.avantajText}>
                                            Rezistenta sporita la apa
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.photosWrapper}>
                            <h2 className={styles.h2}>
                                Lucrarile noastre
                            </h2>
                            <div className={styles.photosBox}>
                                <div className={styles.photoColumn}>
                                    <img
                                        src={
                                            bottomSlide == 0 ? 
                                            sliderParchetBradutBottom[sliderParchetBradutBottom.length - 1].src :
                                            sliderParchetBradutBottom[bottomSlide-1].src
                                        }
                                        className={styles.sidePhoto}
                                    ></img>

                                    <div 
                                        className={styles.changeSlideButton1}
                                        style={{marginLeft: "auto"}}
                                        onClick={()=>{
                                            if(bottomSlide==0){
                                                setBottomSlide(4)
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
                                        src={sliderParchetBradutBottom[bottomSlide].src}
                                        className={styles.centerPhoto}
                                    ></img>
                                    <div className={styles.currentText}>Castel Mimi</div>

                                    <div className={styles.mobileButtonsWrapper}>
                                        <div 
                                            className={styles.changeSlideButtonTablet}
                                            style={{marginRight: "auto"}}
                                            onClick={()=>{
                                                if(bottomSlide==0){
                                                    setBottomSlide(4)
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
                                                if(bottomSlide==4){
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

                                <div className={styles.photoColumn}>
                                    <img
                                        src={
                                        bottomSlide == sliderParchetBradutBottom.length - 1 ? 
                                        sliderParchetBradutBottom[0].src :
                                        sliderParchetBradutBottom[bottomSlide+1].src
                                        }
                                        className={styles.sidePhoto}
                                    ></img>

                                    <div 
                                        className={styles.changeSlideButton1}
                                        onClick={()=>{
                                            if(bottomSlide==4){
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