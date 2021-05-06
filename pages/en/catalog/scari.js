import Layout from "../../../components/layout"
import {ProdusPage} from "../../../components/catalogPage/produsPage"
import {sliderScariBottom, sliderScariTop} from "../../../components/catalogPage/sliderContent"
import {products} from "../../../components/catalogPage/products"
import {LanguageContext} from "../../../components/context"
import { useContext } from "react"


function ScariPage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={`${products.scari[2].name} | Belvedere Wood Parquet`}
            description="Belvedere Wood Parquet wooden stairs are a very inspired choice to complete the design of any house and unite its floors in an elegant fashion."
            lang={2}
            langStr="/en"
        >
            <ProdusPage
                sliderTop={sliderScariTop}
                sliderBottom={sliderScariBottom}
                showTypes={0}
                showPriceButton={0}
                name="Scări din lemn masiv"
                upperText="Scările din lemn sunt o alegere deosebit de inspirată pentru a completa designul din orice casă și a uni etajele acesteia."
                description="Datorită căldurii și aspectului primitor al lemnului, iar mai nou, tehnologiilor performante, care ne permit o prelucrare profundă a acestui material, putem scoate în evidență toate calitățile unei plăci de lemn masiv. Structura, fibrele, lamelele, nodurile lăsate de trecerea anilor, toate sunt valorificate și accentuate la crearea treptelor din lemn."
                product={products.scari[2]}
                lang={2}
                langStr={"/en"}
            ></ProdusPage>
        </Layout>
    )
}
  
export default ScariPage