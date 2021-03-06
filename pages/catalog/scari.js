import Layout from "../../components/layout"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {sliderScariBottom, sliderScariTop} from "../../components/catalogPage/sliderContent"
import {products} from "../../components/catalogPage/products"
import {LanguageContext} from "../../components/context"
import { useContext } from "react"


function ScariPage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Scari din lemn masiv | Belvedere Wood Parchet"}
            description="Scarile din lemn marca Belvedere Wood Parchet sunt o alegere deosebit de inspirata pentru a completa designul din orice casa și a uni etajele acesteia."
            lang={0}
            langStr=""
        >
            <ProdusPage
                sliderTop={sliderScariTop}
                sliderBottom={sliderScariBottom}
                showTypes={0}
                showPriceButton={0}
                name="Scări din lemn masiv"
                upperText="Scările din lemn sunt o alegere deosebit de inspirată pentru a completa designul din orice casă și a uni etajele acesteia."
                description="Datorită căldurii și aspectului primitor al lemnului, iar mai nou, tehnologiilor performante, care ne permit o prelucrare profundă a acestui material, putem scoate în evidență toate calitățile unei plăci de lemn masiv. Structura, fibrele, lamelele, nodurile lăsate de trecerea anilor, toate sunt valorificate și accentuate la crearea treptelor din lemn."
                product={products.scari[0]}
                lang={0}
                langStr=""
            ></ProdusPage>
        </Layout>
    )
}
  
export default ScariPage