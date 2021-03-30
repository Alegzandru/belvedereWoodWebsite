import React from "react";

export const NavbarContext = React.createContext({
  open: false,
  setOpen: () => {}
});

export const LanguageContext = React.createContext({
  language: 0,
  setLanguage: () => {}
});

