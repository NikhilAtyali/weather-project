import React from "react";

// Key = 0b138bc936843a1550150afddce0b012
// API= "https://api.openweathermap.org/data/2.5/"    weather?q={city name}&appid={API key}

const api = {
  key: "b138bc936843a1550150afddce0b012",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const dateBuilder = (d) => {
    const months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septeber",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Monday",
      "Tuesday",
      "Wenesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let Month = months[d.getMonth()];
    let Day = days[d.getDay()];
    let Date = d.getDate();
    let Year = d.getFullYear();

    return ` ${Day} ${Date} ${Month} ${Year}`;
  };

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" placeholder="search..." className="search-bar" />
        </div>
        <div className="location-box">
          <div className="location">Pune</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
