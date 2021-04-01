import { useState } from "react"
import styles from "../../styles/catalog/parchetPunte.module.css"
import {sliderParchetPunteTop, sliderParchetPunteBottom} from "./sliderContent"
import {parchetPunte} from "./prices"
import Link from 'next/link'


export function ParchetPunte(){

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
                                {parchetPunte[selected].name}
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
                                    setSelected(0) : setSelected("")
                                }}
                            >
                                <div className={styles.dropdownTextInactive}>
                                    {
                                        selected == 0 ? 
                                        parchetPunte[1].name :
                                        selected == 1 ? 
                                        parchetPunte[0].name : ""
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
                            {area * parchetPunte[selected].price}
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
                            Parchet punte
                        </h1>
                        <p className={styles.subheading}>
                            Modelul acestui tip de parchet vine încă din frumoasă perioadă a expedițiilor
                            marine și a corăbiilor din lemn, la puntea cărora erau montate plăci din lemn.                        
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
                                Parchet punte
                            </span>
                        </div>

                        <div className={styles.productDescriptionWrapper}>
                            <div className={styles.sliderWrapper}>
                                <img 
                                    className={styles.productImg}
                                    src={sliderParchetPunteTop[slide].src}
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
                                    Parchet punte
                                </h2>
                                <div className={styles.description}>
                                    Astăzi, acest tip de parchet este foarte des întâlnit în diverse proiecte de design
                                    interior, datorită caracteristicilor întunecate rectilinii, care se vor combina minunat
                                    cu stilul minimalist, una din tendințele majore ale ultimilor 2 ani.                                
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
                                Tipuri de parchet punte
                            </h2>

                            <div className={styles.productTypesBox}>
                                <div className={styles.mobileTypeWrapper}>
                                    <div className={styles.productTypeBox}>
                                        <div className={styles.productNameWrapper}>
                                            <div className={styles.productTypeName}>
                                                Eco Seria
                                            </div>
                                            <div className={styles.productTypeDeg}>
                                                (11 mm)
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.priceBox}>
                                        Pret : <span className={styles.price}>45 EUR/mp</span>
                                    </div>
                                </div>

                                <div className={styles.mobileTypeWrapper}>
                                    <div className={styles.productTypeBox}>
                                        <div className={styles.productNameWrapper}>
                                            <div className={styles.productTypeName}>
                                                Seria BWP
                                            </div>
                                            <div className={styles.productTypeDeg}>
                                                (13-15 mm)
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.priceBox}>
                                        Pret : <span className={styles.price}>50-80 EUR/mp</span>
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
                                    <h3 className={styles.h3}>Grosime</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.accentChar}>
                                        Eco Seria
                                    </div>
                                    <div className={styles.char}>
                                        11 mm
                                    </div>
                                    <div className={styles.accentChar}>
                                        Seria BWP
                                    </div>
                                    <div className={styles.char}>
                                        13-15 mm
                                    </div>
                                </div>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Lățime</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.accentChar}>
                                        Eco Seria                               
                                    </div>
                                    <div className={styles.char}>
                                        120 - 140 mm
                                    </div>
                                    <div className={styles.accentChar}>
                                        Seria BWP
                                    </div>
                                    <div className={styles.char}>
                                        170 - 220 mm
                                    </div>
                                </div>

                                <div className={styles.characteristicsColumn}>
                                    <h3 className={styles.h3}>Lungime</h3>
                                    <div className={styles.line}></div>
                                    <div className={styles.accentChar}>
                                        Eco Seria                               
                                    </div>
                                    <div className={styles.char}>
                                        600 - 1500 mm
                                    </div>
                                    <div className={styles.accentChar}>
                                        Seria BWP
                                    </div>
                                    <div className={styles.char}>
                                        600 - 2800 mm
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
                                            sliderParchetPunteBottom[sliderParchetPunteBottom.length - 1].src :
                                            sliderParchetPunteBottom[bottomSlide-1].src
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
                                        src={sliderParchetPunteBottom[bottomSlide].src}
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
                                        bottomSlide == sliderParchetPunteBottom.length - 1 ? 
                                        sliderParchetPunteBottom[0].src :
                                        sliderParchetPunteBottom[bottomSlide+1].src
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