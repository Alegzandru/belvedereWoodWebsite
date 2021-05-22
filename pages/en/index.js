import {HeroPage2} from "../../components/mainPage/heroPage2"
import {TreeTrunkPage} from "../../components/mainPage/treeTrunkPage.js"
import {ClientsPage} from "../../components/mainPage/clientsPage.js"
import {AvantajePage} from "../../components/mainPage/avantajePage.js"
import {ProiectePage} from "../../components/mainPage/proiectePage.js"
import {ServicesPage} from "../../components/mainPage/servicesPage.js"
import Layout from "../../components/layout"
import {LanguageContext} from "../../components/context"
import {useContext} from "react"

function HomePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
        <Layout 
            title={"Belvedere Wood Parquet"}
            description="Belvedere Wood Parquet - production, installation, restoration of parquet, wooden walls and stairs in Chisinau, Moldova. You can see examples of our parquet and woodwork at the showroom on '15/4 Uzinelor Street', Chisinau, Moldova"
            lang={2}
            langStr="/en"
        >
            <HeroPage2 
                lang={2}
                langStr={"/en"}
            ></HeroPage2>
            <TreeTrunkPage 
                lang={2}
                langStr={"/en"}
            ></TreeTrunkPage>
            <ServicesPage 
                lang={2}
                langStr={"/en"}
            ></ServicesPage>
            <ClientsPage 
                lang={2}
                langStr={"/en"}
            ></ClientsPage>
            <AvantajePage 
                lang={2}
                langStr={"/en"}
            ></AvantajePage>
            <ProiectePage 
                lang={2}
                langStr={"/en"}
            ></ProiectePage>
        </Layout>
    )
}

export default HomePage