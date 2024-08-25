import { useState, useEffect } from "react";

import fetchApi from "../api/fetchApi";

const GetData = () => {
  const [data, setData] = useState(null);
  const [saerchCity, setsSaerchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [icon, setIcon] = useState();
  const [desc, setDesc] = useState();

  const [wallpaper, setWallpaper] = useState("bg-defult");

  const key = process.env.REACT_APP_API_KEY;
  const baseURL = process.env.REACT_APP_BASE_URL;

  const fetchData = async () => {
    setLoading(true);
    fetchApi
      .get(`${baseURL}/weather?q=${saerchCity}&appid=${key}&units=metric`)
      .then((res) => {
        setData(res.data);
        setDesc(res.data.weather[0].icon);

        console.log(res.data);
        console.log(res.data.weather[0].main);
      })
      .catch(function (error) {
        console.log("Show error notification!");
        // return Promise.reject(error);
        setData("");
        setError(true);
        return null;
      });

    setLoading(false);
    setsSaerchCity("");
  };

  // choose Desciption weather Icon
  // choose background wallpaper
  let i;
  let w;
  console.log(desc);

  const chooseIcon = () => {
    switch (desc) {
      case "01d":
        return (i = "CLEAR_DAY"), (w = "bg-clear-day");
      case "01n":
        return (i = "CLEAR_NIGHT"), (w = "bg-clear-night");
      case "02d":
        return (i = "PARTLY_CLOUDY_DAY"), (w = "bg-partial-cloudy-day");
      case "02n":
        return (i = "PARTLY_CLOUDY_NIGHT"), (w = "bg-partial-cloudy-night");
      case "04d":
        return (i = "PARTLY_CLOUDY_DAY"), (w = "bg-partial-cloudy-day");
      case "04n":
        return (i = "PARTLY_CLOUDY_NIGHT"), (w = "bg-partial-cloudy-night");
      case "13d":
        return (i = "SNOW"), (w = "bg-bg-snow-day");
      case "13n":
        return (i = "SNOW"), (w = "bg-bg-snow-night");
      case "10d":
        return (i = "RAIN"), (w = "bg-rainy-day");
      case "10n":
        return (i = "RAIN"), (w = "bg-rainy-night");
      case "03d":
        return (i = "CLOUDY"), (w = "bg-cloudy-day");
      case "03n":
        return (i = "CLOUDY"), (w = "bg-cloudy-night");
      case "09d":
        return (i = "SLEET"), (w = "bg-shower-rain-day");
      case "09n":
        return (i = "SLEET"), (w = "bg-shower-rain-night");
      case "11d":
        return (i = "WIND"), (w = "bg-thunderstorm");
      case "11n":
        return (i = "WIND"), (w = "bg-thunderstorm");
      default:
        return { i: "FOG", w: "bg-defult" };
    }
  };

  chooseIcon();

  useEffect(() => {
    setIcon(i);
    document.body.classList.remove(wallpaper);
    setWallpaper(w);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  return [
    data,
    saerchCity,
    setsSaerchCity,
    loading,
    error,
    fetchData,
    icon,
    wallpaper,
  ];
};

export default GetData;

// choose Desciption weather Icon
// choose background wallpaper
let imgWall = {
  i: "",
  w: "",
};

console.log(desc);

const chooseIcon = () => {
  switch (desc) {
    case "01d":
      return { i: "CLEAR_DAY", w: "bg-clear-day" };
    case "01n":
      return { i: "CLEAR_NIGHT", wall: "bg-clear-night" };
    case "02d":
      return { i: "PARTLY_CLOUDY_DAY", w: "bg-partial-cloudy-day" };
    case "02n":
      return { i: "PARTLY_CLOUDY_NIGHT", w: "bg-partial-cloudy-night" };
    case "04d":
      return { i: "PARTLY_CLOUDY_DAY", w: "bg-partial-cloudy-day" };
    case "04n":
      return { i: "PARTLY_CLOUDY_NIGHT", w: "bg-partial-cloudy-night" };
    case "13d":
      return { i: "SNOW", w: "bg-bg-snow-day" };
    case "13n":
      return { i: "SNOW", w: "bg-bg-snow-night" };
    case "10d":
      return { i: "RAIN", w: "bg-rainy-day" };
    case "10n":
      return { i: "RAIN", w: "bg-rainy-night" };
    case "03d":
      return { i: "CLOUDY", w: "bg-cloudy-day" };
    case "03n":
      return { i: "CLOUDY", w: "bg-cloudy-night" };
    case "09d":
      return { i: "SLEET", w: "bg-shower-rain-day" };
    case "09n":
      return { i: "SLEET", w: "bg-shower-rain-night" };
    case "11d":
      return { i: "WIND", w: "bg-thunderstorm" };
    case "11n":
      return { i: "WIND", w: "bg-thunderstorm" };
    default:
      return { i: "FOG", w: "bg-defult" };
  }
};

chooseIcon();

useEffect(() => {
  setIcon(imgWall.i);
  document.body.classList.remove(wallpaper);
  setWallpaper(imgWall.w);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [icon]);
