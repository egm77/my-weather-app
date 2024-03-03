import { Injectable } from '@angular/core';
import { WeatherHttpService } from '../http/weather-http.service';
import { map, Observable, of, tap } from 'rxjs';
import { Weather } from '../../../models/weather.interface';
import { mapWeatherToDomain } from '../mappers/weather.mapper';
import { mapForecastToDomain } from '../mappers/forecast.mapper';
import { LastForecast } from '../../../models/last-forecast.interface';

export const LAST_FORECAST_KEY = 'lastForecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private weatherHttpService: WeatherHttpService) {}

  public getCurrentWeather(lat: number, long: number): Observable<Weather> {
    return this.weatherHttpService
      .getCurrentWeather(lat, long)
      .pipe(map(mapWeatherToDomain));
  }

  public getForecastWeather(lat: number, long: number): Observable<Weather[]> {
    const lastForecastValue = localStorage.getItem(LAST_FORECAST_KEY);
    if (lastForecastValue) {
      const lastForecast: LastForecast = JSON.parse(lastForecastValue);
      if (lastForecast.date === new Date().toDateString()) {
        // TODO improve logic to validate if is the same location
        return of(lastForecast.forecast);
      }
    }
    return this.weatherHttpService
      .getForecastWeather(lat, long)
      .pipe(map(mapForecastToDomain), tap(this.saveLastForecastDate));
  }

  private saveLastForecastDate(value: Weather[]): void {
    const lastForecastWeather: LastForecast = {
      forecast: value,
      date: new Date().toDateString(),
    };
    localStorage.setItem(
      LAST_FORECAST_KEY,
      JSON.stringify(lastForecastWeather),
    );
  }
}
