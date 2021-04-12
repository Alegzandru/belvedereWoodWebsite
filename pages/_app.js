import '../styles/global.css'
import {LanguageContext, WidthContext} from "../components/context"
import {useState} from "react"
import GoogleTagManager from '../components/GoogleTagManager'


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(0);
  const valueLanguage = {language, setLanguage}

  const [width, setWidth] = useState(0)
  const valueWidth = {width, setWidth}

  return (
    <GoogleTagManager>
      <WidthContext.Provider value={valueWidth}>
        <LanguageContext.Provider value={valueLanguage}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </WidthContext.Provider>
    </GoogleTagManager>
  )
}