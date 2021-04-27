import {HeroPage2} from "../components/mainPage/heroPage2"
import {TreeTrunkPage} from "../components/mainPage/treeTrunkPage.js"
import {ClientsPage} from "../components/mainPage/clientsPage.js"
import {AvantajePage} from "../components/mainPage/avantajePage.js"
import {ProiectePage} from "../components/mainPage/proiectePage.js"
import {ServicesPage} from "../components/mainPage/servicesPage.js"
import Layout from "../components/layout"
import {LanguageContext} from "../components/context"
import {useContext} from "react"

function HomePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Pagina principală | Belvedere Wood Parquet"}
            description="Forme, desene și structuri inedite ale lucrărilor, la crearea cărora se întâlnesc arta prelucrării manuale a lemnului cu tehnologiile performante. 
            Inspirată de tradiția centenară de producere a parchetului din lemn, Compania Belvedere Wood Parquet vine cu o experiență în crearea lucrărilor sale tocmai din Italia. De unde a adus nu doar rafinament și calitate înaltă, dar și abordare inovativă în procesul de prelucrare a plăcii de lemn.
            Cu noi aveți posibilitatea de a reproduce orice lucrare din domeniul podelelor din parchet, pereților și scărilor din lemn."
        >
            <HeroPage2 lang={language}></HeroPage2>
            <TreeTrunkPage lang={language}></TreeTrunkPage>
            <ServicesPage lang={language}></ServicesPage>
            <ClientsPage lang={language}></ClientsPage>
            <AvantajePage lang={language}></AvantajePage>
            <ProiectePage lang={language}></ProiectePage>
        </Layout>
    )
}

export default HomePage