import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "WIND",
  color: "white",
  size: 112,
  animate: true,
};

const WeatherData = ({ data, saerchCity, setsSaerchCity, fetchData, icon }) => {
  return (
    <div className="forecast">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search any city"
          onChange={(e) => setsSaerchCity(e.target.value)}
          value={saerchCity}
        />
        <button
          className="shadow-botton"
          onClick={(e) => fetchData(e.target.value)}
        >
          Search{" "}
        </button>
      </div>

      {data ? (
        <>
          <div className="forecast-icon">
            <ReactAnimatedWeather
              icon={icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>

          <div className="today-weather">
            <h3>{data.weather[0].main}</h3>

            <ul>
              <div>
                <li>
                  Feels Like
                  <span className="temp">{data.main.feels_like}°c</span>
                </li>
                <li>
                  Humidity <span className="temp">{data.main.humidity} %</span>
                </li>
                <li>
                  Visibility <span className="temp">{data.visibility} mi</span>
                </li>
                <li>
                  Wind Speed{" "}
                  <span className="temp">{data.wind.speed} Km/h</span>
                </li>
              </div>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default WeatherData;
