import {HeroPage} from "../components/mainPage/heroPage"
import {TreeTrunkPage} from "../components/mainPage/treeTrunkPage.js"
import {ClientsPage} from "../components/mainPage/clientsPage.js"
import {AvantajePage} from "../components/mainPage/avantajePage.js"
import {ProiectePage} from "../components/mainPage/proiectePage.js"
import {ServicesPage} from "../components/mainPage/servicesPage.js"
import Layout from "../components/layout"

function HomePage() {
    return(
        <Layout>
            <HeroPage></HeroPage>
            <TreeTrunkPage></TreeTrunkPage>
            <ServicesPage></ServicesPage>
            <ClientsPage></ClientsPage>
            <AvantajePage></AvantajePage>
            <ProiectePage></ProiectePage>
        </Layout>
    )
}

export default HomePage