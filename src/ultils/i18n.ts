import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANGUAGE, LANGUAGE_OPTION } from "../common/constants";
import viCommon from "../assets/translations/vi/common.json";
import enCommon from "../assets/translations/en/common.json";
import enHomeTranslate from "../assets/translations/en/home.json";
import enAboutTranslate from "../assets/translations/en/about.json";
import viHomeTranslate from "../assets/translations/vi/home.json";
import viAboutTranslate from "../assets/translations/vi/about.json";

const resources = {
    [LANGUAGE_OPTION.VI]: {
        common: viCommon,
        home: viHomeTranslate,
        about: viAboutTranslate
    },
    [LANGUAGE_OPTION.EN]: {
        common: enCommon,
        home: enHomeTranslate,
        about: enAboutTranslate
    }
}

const ns = [
    "common",
    "home",
    "about"
]

const getCurrentLang = () => {
    let language: string = window.localStorage.getItem('language') || DEFAULT_LANGUAGE
    const isDifferenLang: boolean = Object.values(LANGUAGE_OPTION).every((lang) => lang !== language);

    if (isDifferenLang) {
        window.localStorage.setItem('language', DEFAULT_LANGUAGE)
        language = DEFAULT_LANGUAGE
    }

    return language
}

i18n.use(initReactI18next).init({
    resources,
    lng: getCurrentLang(),
    fallbackLng: DEFAULT_LANGUAGE,
    ns,
    interpolation: {
        escapeValue: false
    },
    defaultNS: ["common"],
    debug: false
});

export default i18n
