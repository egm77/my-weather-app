import { WeatherDto } from '../../src/app/api-layer/weather/dtos/weather-dto';

export const MOCK_CURRENT_FORECAST: WeatherDto = {
  coord: {
    lon: 2.179,
    lat: 41.3894,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d',
    },
  ],
  base: 'stations',
  main: {
    temp: 14.74,
    feels_like: 13.52,
    temp_min: 13.25,
    temp_max: 16.97,
    pressure: 1002,
    humidity: 48,
  },
  visibility: 10000,
  wind: {
    speed: 10.29,
    deg: 260,
  },
  clouds: {
    all: 20,
  },
  dt: 1709479731,
  sys: {
    type: 2,
    id: 2003688,
    country: 'ES',
    sunrise: 1709446947,
    sunset: 1709487851,
  },
  timezone: 3600,
  id: 3119123,
  name: 'Sant Pere, Santa Caterina i La Ribera',
  cod: 200,
};
