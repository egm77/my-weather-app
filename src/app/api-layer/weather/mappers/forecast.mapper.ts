import { ForecastDto, List } from '../dtos/forecast-dto';
import { CurrentWeather } from '../../../models/current-weather.interface';

export function mapForecastToDomain(
  forecastResponse: ForecastDto,
): CurrentWeather[] {
  const weatherByDate = groupByDate(forecastResponse.list);
  return mapForecast(weatherByDate, forecastResponse.city.name);
}

function groupByDate(forecastList: List[]): List[][] {
  const map: Map<string, List[]> = new Map();
  forecastList.forEach((obj) => {
    const date = getDate(obj.dt);
    const dateString = date.toDateString(); // Using toDateString() to remove time part
    if (dateString !== new Date().toDateString()) {
      if (!map.has(dateString)) {
        map.set(dateString, []);
      }
      map.get(dateString)?.push(obj);
    }
  });
  return Array.from(map.values());
}

function mapForecast(
  groupedForecast: List[][],
  city: string,
): CurrentWeather[] {
  return groupedForecast.map((item) => {
    return {
      date: getDate(item[0].dt),
      name: city,
      temp_min: Math.round(
        item.reduce((prev, curr) =>
          prev.main.temp_min < curr.main.temp_min ? prev : curr,
        ).main.temp_min,
      ),
      temp_max: Math.round(
        item.reduce((prev, curr) =>
          prev.main.temp_max > curr.main.temp_max ? prev : curr,
        ).main.temp_max,
      ),
      temp: Math.round(
        item.reduce(function (total, currentValue) {
          return total + currentValue.main.temp;
        }, 0) / item.length,
      ),
    };
  });
}

function getDate(unixDate: number): Date {
  return new Date(unixDate * 1000);
}
