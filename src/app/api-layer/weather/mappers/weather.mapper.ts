import { Weather } from '../../../models/weather.interface';
import { WeatherDto } from '../dtos/weather-dto';

export function mapWeatherToDomain(weatherResponse: WeatherDto): Weather {
  return {
    name: weatherResponse.name,
    description: weatherResponse.weather[0].description,
    icon: mapIcon(weatherResponse.weather[0].icon),
    temp_max: Math.round(weatherResponse.main.temp_max),
    temp: Math.round(weatherResponse.main.temp),
    temp_min: Math.round(weatherResponse.main.temp_min),
    feels_like: Math.round(weatherResponse.main.feels_like),
    date: new Date(weatherResponse.dt),
  };
}

function mapIcon(id: string): string {
  return `https://openweathermap.org/img/wn/${id}@2x.png`;
}
