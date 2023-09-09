export const fallbackLng = "zh";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  // debug: true,
  supportedLngs: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});
