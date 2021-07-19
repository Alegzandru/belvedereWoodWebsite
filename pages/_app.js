import React from "react";
import '../styles/global.css'
import {LanguageContext, WidthContext, PopupContext} from "../components/context"
import {useState} from "react"
import GoogleTagManager from '../components/GoogleTagManager'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import NextNProgress from "../components/NextNProgress"


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(0);
  const valueLanguage = {language, setLanguage}

  const [width, setWidth] = useState(0)
  const valueWidth = {width, setWidth}

  const [popupOpen, setPopupOpen] = useState(0)
  const valuePopup = {popupOpen, setPopupOpen}

  return (
    <GoogleTagManager>
      <PopupContext.Provider value={valuePopup}>
        <WidthContext.Provider value={valueWidth}>
          <LanguageContext.Provider value={valueLanguage}>
            <NextNProgress/>
            <Component {...pageProps} />
            <MessengerCustomerChat
              pageId="1702839073333694"
              appId="1221952348222595"
            />
          </LanguageContext.Provider>
        </WidthContext.Provider>
      </PopupContext.Provider>
    </GoogleTagManager>
  )
}