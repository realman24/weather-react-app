const MyDate = () => {
  let unix = "1714624878";
  const [day, date, month, year, theHours, theMinutes, theSeconds] =
    dateBuilder(unix);

  return (
    <div className="App">
      <h2>dateBuilder</h2>
      <h1>
        {" "}
        {theHours} : {theMinutes} {theSeconds}
      </h1>
      <h3>
        {day}, {date} {month} {year}
      </h3>
    </div>
  );
};

export default MyDate;

export const dateBuilder = (unix) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const fullDate = new Date(unix * 1000);

  let day = days[fullDate.getDay()];
  let date = fullDate.getDate();
  let month = months[fullDate.getMonth()];
  let year = fullDate.getFullYear();

  let theHours;
  if (fullDate.getHours() > 12) {
    theHours = fullDate.getHours() - 12;
  } else {
    theHours = fullDate.getHours();
  }

  let theMinutes = fullDate.getMinutes();
  let theSeconds = fullDate.getSeconds();

  let meridiem;
  if (fullDate.getHours() > 12) {
    meridiem = "pm";
  } else {
    meridiem = "am";
  }

  return [day, date, month, year, theHours, theMinutes, theSeconds, meridiem];
};
