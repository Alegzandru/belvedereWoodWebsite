import React from "react";
import '../styles/global.css'
import {LanguageContext, WidthContext} from "../components/context"
import {useState} from "react"
import GoogleTagManager from '../components/GoogleTagManager'
import MessengerCustomerChat from 'react-messenger-customer-chat';


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
          {/* <MessengerCustomerChat
            pageId="<PAGE_ID>"
            appId="<APP_ID>"
            htmlRef="<REF_STRING>"
          /> */}
        </LanguageContext.Provider>
      </WidthContext.Provider>
    </GoogleTagManager>
  )
}