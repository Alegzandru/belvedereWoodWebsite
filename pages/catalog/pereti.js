import Layout from "../../components/layout"
import {ProdusPage} from "../../components/catalogPage/produsPage"
import {sliderPeretiBottom, sliderPeretiTop} from "../../components/catalogPage/sliderContent"
import {products} from "../../components/catalogPage/products"


function PeretiPage() {
    return(
        <Layout>
            <ProdusPage
                sliderTop={sliderPeretiTop}
                sliderBottom={sliderPeretiBottom}
                showTypes={0}
                showPriceButton={0}
                name="Pereți din lemn natural"
                upperText="În căutarea unei abordări originale pentru un décor de interior inedit, în colaborare cu designeri internaționali, noi propunem clienților noștri pereți și tavane din lemn."
                description="Modele de astfel de lucrări pot fi văzute și în showroom-ul nostru, unde deja am expus pentru comoditatea dvs. unele din lucrările executate de noi."
                product={products.scari}
            ></ProdusPage>
        </Layout>
    )
}
  
export default PeretiPage