import Layout from "../../components/layout"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {sliderParchetBradutTop, sliderParchetBradutBottom} from "../../components/catalogPage/sliderContent"
import {products} from "../../components/catalogPage/products"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function ParchetBradutPage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={`${products.parchetBradut[language].name} | Belvedere Wood Parquet`}
            description="Rafinamentul și stilul clasic mereu au definit acest tip de parchet, preferat de monarhii europeni pentru a decora dormitoarele și curțile regale. Belvedere Wood Parquet propune 3 unghiuri diferite de de aranjare a plăcilor de parchet: 45 grade (Chevron), 60 (Brăduț Unguresc) grade si 90 de grade (Heringbone), în dependență de nota de stil pe care doriți să o aduceți interiorului."
        >
            <ProdusPage
                sliderTop={sliderParchetBradutTop}
                sliderBottom={sliderParchetBradutBottom}
                showTypes={1}
                showPriceButton={1}
                name={"Parchet Brăduț"}
                upperText="Rafinamentul și stilul clasic mereu au definit acest tip de parchet, preferat de monarhii europeni pentru a decora dormitoarele și curțile regale."
                description="Noi propunem 3 unghiuri diferite de de aranjare a plăcilor de parchet: 45 grade (Chevron), 60 (Brăduț Unguresc) grade si 90 de grade (Heringbone), în dependență de nota de stil pe care doriți să o aduceți interiorului. Oricare stil de amenajare a plăcuțelor de parchet veți alege, în casa dvs va fi prezentă o atmosferă aristocratică."
                product={products.parchetBradut[language]}
                lang = {language}
            ></ProdusPage>
        </Layout>
    )
}
  
export default ParchetBradutPage