import { createI18n } from "vue-i18n";
import axios from "axios";

const i18n = createI18n({
    locale: localStorage.getItem("locale"),
    messages: {},
});
function fetchLocalizationData() {
   const lang = localStorage.getItem("locale") || "en";

    i18n.global.locale = lang;

    axios
        .get("/lang/" + lang)
        .then((response) => {
            i18n.global.setLocaleMessage(lang, response.data);
        })
        .catch((error) => {
            console.error("Failed to load language file", error);
        });
}

export default { i18n, fetchLocalizationData };
