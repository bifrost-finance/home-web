import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import resources from "./i18n.json";

let language = navigator.language.split(/[-_]/)[0]; // 第一次从浏览器获取用户语言环境

if (navigator.language.split(/[-_]/)[0] !== "zh") {
  language = "en"; // 如果用户不是 zh，那就设置为 en
}

if (localStorage.getItem("userLangStorage")) {
  language = localStorage.getItem("userLangStorage"); // 如果用户有设置过，那就从用户设置里调取
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language,

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
