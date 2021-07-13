import "./App.css";
import Weather from "./components/Weather/Weather";
import weatherInfo from "./components/Weather/WeatherInfo";
export default function App() {
    return (
        <div className="daysWeather">
            {weatherInfo.map((el) => (
                <Weather
                    day={el.weekDay}
                    image={el.imgURL}
                    temp={el.temp}
                ></Weather>
            ))}
        </div>
    );
}
