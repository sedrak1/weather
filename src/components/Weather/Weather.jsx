import "./Weather.css"
export default function Weather({ day, image, temp }) {
    return (
        <div className="weatherCard">
            <h1>{day}</h1>
            <img src={image} alt="" />
            <p>{temp}</p>
        </div>
    );
}
