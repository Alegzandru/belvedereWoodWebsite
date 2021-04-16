import {HeroPage2} from "../components/mainPage/heroPage2"
import {TreeTrunkPage} from "../components/mainPage/treeTrunkPage.js"
import {ClientsPage} from "../components/mainPage/clientsPage.js"
import {AvantajePage} from "../components/mainPage/avantajePage.js"
import {ProiectePage} from "../components/mainPage/proiectePage.js"
import {ServicesPage} from "../components/mainPage/servicesPage.js"
import Layout from "../components/layout"

function HomePage() {
    return(
        <Layout>
            <HeroPage2></HeroPage2>
            <TreeTrunkPage></TreeTrunkPage>
            <ServicesPage></ServicesPage>
            <ClientsPage></ClientsPage>
            <AvantajePage></AvantajePage>
            <ProiectePage></ProiectePage>
        </Layout>
    )
}

export default HomePage