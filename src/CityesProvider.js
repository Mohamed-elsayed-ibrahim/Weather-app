import { createContext, useContext, useState, useEffect } from "react";
import "moment/min/locales";
import moment from "moment";
import axios from "axios";
// ===============IMPORT IMAGE=========================
import cairoImg from "./background/cairo.jpg";
import makkaImg from "./background/makka.jpg";
import dubaiImg from "./background/dubai.jpg";
import londonImg from "./background/london.jpg";
import washingtonImg from "./background/washington.jpeg";
import moscowImg from "./background/moscow.jpeg";
// ===============//IMPORT IMAGE//======================

let City = createContext(null);

// ==================**MAIN FUNCTION**==========================
export default function CityProvider({ children }) {
  // ========== MAIN STATE THAT CONTAINED DATA OF CITY SELECTED =======
  let [cityData, setCityData] = useState({});
  // ========== //MAIN STATE THAT CONTAINED DATA OF CITY SELECTED //=====

  let [selectedCity, setSelectedCity] = useState(cities[0]);
  let [lang, setLang] = useState("en");

  let handelLangText = (arbic, english) => {
    return lang == "ar" ? arbic : english;
  };

  let dateToDay = moment().format("ll");
  moment.locale(lang);
  // ===============HANDEL==================
  let handelSelectedCity = (city) => {
    let cityClicked = cities.find((el) => {
      return el.name == city;
    });
    setSelectedCity(cityClicked);
  };

  let handleLang = () => {
    lang == "ar" ? setLang("en") : setLang("ar");
  };
  // ===============//HANDEL//==================

  useEffect(() => {
    let url = selectedCity.url + "&lang=" + lang;
    // ============== REQUEST TEMPRETURE =====================
    axios.get(url).then((response) => {
      let {
        id,
        name,
        main: { temp, temp_min, temp_max },
        weather: [{ description, icon }],
      } = response.data;

      let selectedCityData = {
        id,
        name,
        description,
        temp: Math.round(temp - 273),
        temp_max: Math.round(temp_max - 273),
        temp_min: Math.round(temp_min - 273),
        icon: "https://openweathermap.org/img/wn/" + icon + "@2x.png",
        img: selectedCity.bgImg,
        dateToDay,
      };

      setCityData(selectedCityData);
    });

    // ============== //REQUEST TEMPRETURE// ==================
  }, [selectedCity, lang]);

  return (
    <City.Provider
      value={{
        cityData,
        selectedCity,
        handelSelectedCity,
        handleLang,
        handelLangText,
      }}
    >
      {children}
    </City.Provider>
  );
}
// ==================//MAIN FUNCTION//==========================

export let useCity = () => useContext(City);

// ================ LIST OF CITIES =================
let cities = [
  {
    name: "cairo",
    url: "https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: cairoImg,
  },
  {
    name: "makka",
    url: "https://api.openweathermap.org/data/2.5/weather?q=makka&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: makkaImg,
  },
  {
    name: "dubai",
    url: "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: dubaiImg,
  },
  {
    name: "london",
    url: "https://api.openweathermap.org/data/2.5/weather?q=london&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: londonImg,
  },
  {
    name: "washington",
    url: "https://api.openweathermap.org/data/2.5/weather?q=washington&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: washingtonImg,
  },
  {
    name: "moscow",
    url: "https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=4c7351d4a69b89179ceac40d4e54b024",
    bgImg: moscowImg,
  },
];
// ================ //LIST OF CITIES// =================
