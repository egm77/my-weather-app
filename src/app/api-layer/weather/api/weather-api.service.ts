import { Injectable } from '@angular/core';
import { WeatherHttpService } from '../http/weather-http.service';
import { map, Observable } from 'rxjs';
import { Weather } from '../../../models/weather.interface';
import { mapWeatherToDomain } from '../mappers/weather.mapper';
import { mapForecastToDomain } from '../mappers/forecast.mapper';

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
    return this.weatherHttpService
      .getForecastWeather(lat, long)
      .pipe(map(mapForecastToDomain));
  }
}
