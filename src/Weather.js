import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-7">
            <input
              type="search"
              placeholder="Enter a city...."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Brussels</h1>
      <ul>
        <li>Tuesday 12:00</li>
        <li>Raining</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Raining"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15% </li>
            <li>Humidity: 72 % </li>
            <li>Wind: 13 km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
