import Layout from "../../components/layout"
import {ParchetBradut} from "../../components/catalogPage/parchetBradut"
import {sliderParchetPunteBottom, sliderParchetPunteTop} from "../../components/catalogPage/sliderContent"
import {products} from "../../components/catalogPage/products"


function ParchetPuntePage() {
    return(
        <Layout>
            <ParchetBradut
                sliderTop={sliderParchetPunteTop}
                sliderBottom={sliderParchetPunteBottom}
                showTypes={1}
                showPriceButton={1}
                // prices={parchetPunte}
                upperPhotoSrc={"/catalog/parchetPunte/ManucBei-32.jpg"}
                name="Parchet Punte"
                upperText="Modelul acestui tip de parchet vine încă din frumoasă perioadă a expedițiilor marine și a corăbiilor din lemn, la puntea cărora erau montate plăci din lemn."
                description="Astăzi, acest tip de parchet este foarte des întâlnit în diverse proiecte de design interior, datorită caracteristicilor întunecate rectilinii, care se vor combina minunat cu stilul minimalist, una din tendințele majore ale ultimilor 2 ani."
                product={products.parchetPunte}
            ></ParchetBradut>
        </Layout>
    )
}
  
export default ParchetPuntePage