import { useEffect } from "react";
import "./App.css";
import Weather from "./pages/Weather";

import GetData from "./hooks/getData";
import WeatherData from "./pages/WeatherData";

function App() {
  const [data, saerchCity, setsSaerchCity, , , fetchData, icon, wallpaper] =
    GetData();

  let bgImg = wallpaper;
  useEffect(() => {
    document.body.classList.add(bgImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallpaper]);

  console.log(bgImg);

  return (
    <>
      <div className="container ">
        <Weather data={data} />
        <WeatherData
          data={data}
          saerchCity={saerchCity}
          setsSaerchCity={setsSaerchCity}
          fetchData={fetchData}
          icon={icon}
        />
      </div>
    </>
  );
}

export default App;
