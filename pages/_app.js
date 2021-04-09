import '../styles/global.css'
import {LanguageContext} from "../components/context"
import {useState} from "react"
import GoogleTagManager from '../components/GoogleTagManager'


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(0);
  const valueLanguage = {language, setLanguage}

  return (
    <GoogleTagManager>
      <LanguageContext.Provider value={valueLanguage}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </GoogleTagManager>
  )
}