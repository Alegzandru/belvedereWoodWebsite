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
            title={"Главная страница | Belvedere Wood Паркет"}
            description="Belvedere Wood Parquet - производство, установка, реставрация паркета, деревянных стен и лестниц в Кишиневе, Молдова. Вы можете увидеть образцы нашего паркета и изделий из дерева в выставочном зале на улице 'Узинелор 15/4', Кишинев, Молдова."
            lang={1}
            langStr="/ru"
        >
            <HeroPage2 
                lang={1}
                langStr={"/ru"}
            ></HeroPage2>
            <TreeTrunkPage 
                lang={1}
                langStr={"/ru"}
            ></TreeTrunkPage>
            <ServicesPage 
                lang={1}
                langStr={"/ru"}
            ></ServicesPage>
            <ClientsPage 
                lang={1}
                langStr={"/ru"}
            ></ClientsPage>
            <AvantajePage 
                lang={1}
                langStr={"/ru"}
            ></AvantajePage>
            <ProiectePage 
                lang={1}
                langStr={"/ru"}
            ></ProiectePage>
        </Layout>
    )
}

export default HomePage