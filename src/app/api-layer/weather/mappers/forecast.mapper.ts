import { ForecastDto, List } from '../dtos/forecast-dto';
import { Weather } from '../../../models/weather.interface';
import { unixToDate } from '../../../shared/utils/unix-to-date';

export function mapForecastToDomain(forecastResponse: ForecastDto): Weather[] {
  const weatherByDate = groupByDate(forecastResponse.list);
  return mapForecast(weatherByDate, forecastResponse.city.name);
}

function groupByDate(forecastList: List[]): List[][] {
  const map: Map<string, List[]> = new Map();
  forecastList.forEach((obj) => {
    const date = unixToDate(obj.dt);
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

function mapForecast(groupedForecast: List[][], city: string): Weather[] {
  return groupedForecast.map((item) => {
    return {
      date: unixToDate(item[0].dt),
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
