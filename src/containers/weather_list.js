import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const latitude = cityData.city.coord.lat;
    const longitude = cityData.city.coord.lon;

    return (
      <tr key={name}>
        <td><Map latitude={latitude} longitude={longitude}/></td>
        <td><Chart data={temps} color="red" units="C"/></td>
        <td><Chart data={pressures} color="orang e" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Tempature(C)</th>
          <th>Pressure(hPa)</th>
          <th>Humidity(%)</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// NOTICE: Keep for documentation purposes.
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);