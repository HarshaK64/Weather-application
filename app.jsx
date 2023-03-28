import { useState } from "react";
import FormContainer from "./FormContainer";
import RightPanel from "./RightPanel";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [zipCode, setzipCode] = useState("");
  const [weather, setWeather] = useState("");

  /* Additonal Param to make http get Request */
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: { zip: zipCode },
    headers: {
      "X-RapidAPI-Key": "d3931ef1ffmsh3a12f419374628cp1974c3jsn4336881f72c2",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
  };

  /* onChangeHandler sets the targetted value of input field */
  const onChangeHandler = (e) => setzipCode(e.target.value);

  /* handlesubmit makes asyn call with get the Weather data and set it to weather variable */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      axios
        .request(options)
        .then((response) => setWeather(response.data))
        .catch((error) => console.error(error));
    } catch (error) {
      setWeather("");
      console.error(error);
    }
  };

  return (
    <div className="App">
      <FormContainer
        title={"Weather App"}
        placeholder={"Enter zip code"}
        onChange={onChangeHandler}
        handleSubmit={handleSubmit}
        value={zipCode}
        buttonName={"Get Weather"}
      />
      {weather && (
        <>
          <div className={"weather-card card-module"}>
            <div className={"weather-card__body"}>
              <div className={"weather-card__panel"}>
                <h2 className={"weather-card__title"}> Current Weather </h2>
                <p className={"weather-card__subtitle"}> 8:06 PM </p>
                <div className={"forecast-container"}>
                  <div className={"temp-container"}>
                    <div className={"temp"}>
                      {weather?.temp}° <span className="after-temp">F</span>
                    </div>
                    <div className="real-feel">
                      RealFeel® {weather?.feels_like}°
                    </div>
                  </div>
                </div>
              </div>
              <div className={"weather-card__panel details-container"}>
                <RightPanel label={"Air Quality"} styled labelValue={"Poor"} />
                <RightPanel label={"Wind"} labelValue={weather?.wind_speed} />
                <RightPanel label={"Humidity"} labelValue={weather?.humidity} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
