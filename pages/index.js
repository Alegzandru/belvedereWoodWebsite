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
            title={"Belvedere Wood Parchet"}
            description="Belvedere Wood Parchet - producerea, instalarea, restaurarea parchetului, pereților și scărilor din lemn în Chișinău, Moldova. Puteți vedea exemple ale parchetului și lucrărior noastre din lemn la showroomul de pe strada Uzinelor 15/4, Chișinău, Moldova"
            lang={0}
            langStr=""
        >
            <HeroPage2 
                lang={0}
                langStr=""
            ></HeroPage2>
            <TreeTrunkPage 
                lang={0}
                langStr=""
            ></TreeTrunkPage>
            <ServicesPage 
                lang={0}
                langStr=""
            ></ServicesPage>
            <ClientsPage 
                lang={0}
                langStr=""
            ></ClientsPage>
            <AvantajePage 
                lang={0}
                langStr=""
            ></AvantajePage>
            <ProiectePage 
                lang={language}
                langStr=""
            ></ProiectePage>
        </Layout>
    )
}

export default HomePage