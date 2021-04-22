import Layout from "../../components/layout"
import {sliderPatrateModuleTop, sliderPatrateModuleBottom} from "../../components/catalogPage/sliderContent"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {products} from "../../components/catalogPage/products"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function PatrateModulePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout title={"Parchet Modular | Belvedere Wood Parquet"}>
            <ProdusPage
                sliderTop={sliderPatrateModuleTop}
                sliderBottom={sliderPatrateModuleBottom}
                showTypes={1}
                showPriceButton={1}
                name="Parchet Modular"
                upperText="Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual."
                description="BWP a realizat modele care pun în valoare și sunt inspirate de elemente naturale, modele geometrice și decoruri tradiționale sugestive. Noi propunem 2 dimensiuni ale plăcilor pătrate cele mai populare, însă susținem orice design individual pe care doriți să îl elaborăm."
                product={products.patrateModule[language]}
                lang={language}
            ></ProdusPage>
        </Layout>
    )
}
  
export default PatrateModulePage