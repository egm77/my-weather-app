const DOMAIN_URL = 'https://api.openweathermap.org'; // move to environment files
const APP_KEY = '43c4c3a6b374fd7f70a1de7257bf9afe';

export const WEATHER_URL = (lat: number, long: number): string =>
  `${DOMAIN_URL}/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APP_KEY}&units=metric`;

export const FORECAST_URL = (lat: number, long: number): string =>
  `${DOMAIN_URL}/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${APP_KEY}&units=metric`;
