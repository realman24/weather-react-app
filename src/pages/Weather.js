import { dateBuilder } from "../components/DateBuilder";

const Weather = ({ data }) => {
  let unix;

  console.log(unix);

  data ? (unix = data.dt) : (unix = new Date());

  const [day, date, month, year] = dateBuilder(unix);

  return (
    <div className="city">
      {data ? (
        <>
          <div className="title">
            <h2> {data.name}</h2>
            <h3> {data.sys.country}</h3>
          </div>

          <div className="date-time">
            <div className="temperature">
              <p>
                {data.main.temp}°<span>C</span>
              </p>
            </div>
            <div className="dmy">
              <div className="current-time">
                {/* {theHours} : {theMinutes} : {theSeconds}{" "}
                    <span>{meridiem}</span> */}
              </div>
              <div className="current-date-only">
                {" "}
                {day}, {date} {month} {year}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="title-pre">
          <h2>Weather App</h2>
        </div>
      )}
    </div>
  );
};

export default Weather;
