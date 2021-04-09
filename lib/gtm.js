export const GTM_ID = "GTM-KVZF4S9"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}