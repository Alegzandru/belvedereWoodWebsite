import Layout from "../../components/layout"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {sliderParchetPunteBottom, sliderParchetPunteTop} from "../../components/catalogPage/sliderContent"
import {products} from "../../components/catalogPage/products"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function ParchetPuntePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout title={"Parchet Punte | Belvedere Wood Parquet"}>
            <ProdusPage
                sliderTop={sliderParchetPunteTop}
                sliderBottom={sliderParchetPunteBottom}
                showTypes={1}
                showPriceButton={1}
                name="Parchet Punte"
                upperText="Modelul acestui tip de parchet vine încă din frumoasă perioadă a expedițiilor marine și a corăbiilor din lemn, la puntea cărora erau montate plăci din lemn."
                description="Astăzi, acest tip de parchet este foarte des întâlnit în diverse proiecte de design interior, datorită caracteristicilor întunecate rectilinii, care se vor combina minunat cu stilul minimalist, una din tendințele majore ale ultimilor 2 ani."
                product={products.parchetPunte[language]}
                lang={language}
            ></ProdusPage>
        </Layout>
    )
}
  
export default ParchetPuntePage