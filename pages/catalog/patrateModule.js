import Layout from "../../components/layout"
import {sliderPatrateModuleTop, sliderPatrateModuleBottom} from "../../components/catalogPage/sliderContent"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {products} from "../../components/catalogPage/products"


function PatrateModulePage() {
    return(
        <Layout>
            <ProdusPage
                sliderTop={sliderPatrateModuleTop}
                sliderBottom={sliderPatrateModuleBottom}
                showTypes={1}
                showPriceButton={1}
                name="Pătrate Module"
                upperText="Colecția „Module” combină tradiția artistică a pardoselii încrustate și expresivitatea designului individual."
                description="BWP a realizat modele care pun în valoare și sunt inspirate de elemente naturale, modele geometrice și decoruri tradiționale sugestive. Noi propunem 2 dimensiuni ale plăcilor pătrate cele mai populare, însă susținem orice design individual pe care doriți să îl elaborăm."
                product={products.patrateModule}
            ></ProdusPage>
        </Layout>
    )
}
  
export default PatrateModulePage