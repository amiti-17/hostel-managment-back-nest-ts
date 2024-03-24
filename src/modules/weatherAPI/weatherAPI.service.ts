import { Coordinates } from 'src/config/types/coordinates';

export class WeatherAPI {
  constructor() {}

  async getWeather(coordinates: Coordinates) {
    const fetchedData = await fetch(this.composeUrl(coordinates));
    const weather = await fetchedData.json();
    weather.daily = weather.daily.slice(0, 3);
    return weather;
  }

  private composeUrl(coordinates: Coordinates) {
    let currentUrl = process.env.OW_URL_ONE_CALL;
    currentUrl += `?appid=${process.env.OW_API_KEY}`;
    currentUrl += `&lat=${coordinates.lat}&lon=${coordinates.lon}`;
    currentUrl += `&exclude=${process.env.OW_EXCLUDE}`;
    currentUrl += `&units=${process.env.OW_UNITS}`;
    return currentUrl;
  }
}
