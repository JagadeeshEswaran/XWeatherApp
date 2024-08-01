/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherTile from "./WeatherTile";

function App() {
  const [cityName, setCityName] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState({
    temp: "",
    humidity: "",
    condition: "",
    windSpeed: "",
  });

  const fetchResult = async () => {
    setLoading(true);
    setSuccess(false);

    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=4141ca89960741949be74011240108&q=${cityName}`
      );

      console.log(response);

      if (response.status === 200) {
        setResult({
          temp: response.data.current.temp_c,
          humidity: response.data.current.humidity,
          condition: response.data.current.condition.text,
          windSpeed: response.data.current.wind_kph,
        });

        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      console.log("====================================");
      console.log("Error Fetching Weather Data: " + error.message);
      console.log("====================================");

      setLoading(false);
      alert("Failed to fetch weather data");
    }
  };

  return (
    <>
      <section>
        <input
          type="text"
          className="input"
          style={{
            height: "2rem",
            width: "20rem",
            marginRight: "2rem",
            border: "3px solid grey",
            borderRadius: "8px",
            padding: "1rem",
            fontSize: "1.3rem",
          }}
          placeholder="Enter City name"
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="btn"
          style={{
            width: "7rem",
            height: "4rem",
            background: "green",
            color: "white",
            fontSize: "1.2rem",
          }}
          onClick={() => fetchResult()}
          type="submit"
        >
          Search
        </button>
      </section>

      {isLoading ? (
        <p style={{ fontSize: "2rem" }}>Loading data...</p>
      ) : (
        isSuccess && (
          <section style={{ marginTop: "5rem", display: "flex" }}>
            <WeatherTile
              disc={"Temparature"}
              data={result.temp}
              unit={"U+00B0"}
            />
            <WeatherTile disc={"Humidity"} data={result.humidity} unit={"%"} />
            <WeatherTile disc={"Condition"} data={result.condition} unit={""} />
            <WeatherTile
              disc={"Wind Speed"}
              data={result.windSpeed}
              unit={" kph"}
            />
          </section>
        )
      )}
    </>
  );
}

export default App;
