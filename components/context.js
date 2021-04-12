import React from "react";

export const NavbarContext = React.createContext({
  open: false,
  setOpen: () => {}
});

// export const MobileNavbarContext = React.createContext({
//   openMobile: false,
//   setOpenMobile: () => {}
// });

export const LanguageContext = React.createContext({
  language: 0,
  setLanguage: () => {}
});

export const WidthContext = React.createContext({
  width: 0,
  setWidth: () => {}
})