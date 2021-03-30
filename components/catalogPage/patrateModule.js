import { useState } from "react"
import styles from "../../styles/catalog/patrateModule.module.css"
import {sliderPatrateModuleTop, sliderPatrateModuleBottom} from "./sliderContent"
import {parchetBradut} from "./prices"

export function PatrateModule(){

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
                            Pătrate module
                        </h1>
                        <p className={styles.subheading}>
                            Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual.                        </p>
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
                                Pătrate module
                            </span>
                        </div>

                        <div className={styles.productDescriptionWrapper}>
                            <div className={styles.sliderWrapper}>
                                <img 
                                    className={styles.productImg}
                                    src={sliderPatrateModuleTop[slide].src}
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
                                    Pătrate module
                                </h2>
                                <div className={styles.description}>
                                    BWP a realizat modele care pun în valoare și sunt inspirate de elemente naturale, modele geometrice și decoruri tradiționale sugestive. Noi propunem 2 dimensiuni ale plăcilor pătrate cele mai populare, însă susținem orice design individual pe care doriți să îl elaborăm.
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

                        <div className={styles.photosWrapper}>
                            <h2 className={styles.h2}>
                                Lucrarile noastre
                            </h2>
                            <div className={styles.photosBox}>
                                <div className={styles.photoColumn}>
                                    <img
                                        src={
                                            bottomSlide == 0 ? 
                                            sliderPatrateModuleBottom[sliderPatrateModuleBottom.length - 1].src :
                                            sliderPatrateModuleBottom[bottomSlide-1].src
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
                                        src={sliderPatrateModuleBottom[bottomSlide].src}
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
                                        bottomSlide == sliderPatrateModuleBottom.length - 1 ? 
                                        sliderPatrateModuleBottom[0].src :
                                        sliderPatrateModuleBottom[bottomSlide+1].src
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