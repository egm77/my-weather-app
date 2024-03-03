import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDto } from '../dtos/weather-dto';
import { FORECAST_URL, WEATHER_URL } from '../endpoints';
import { ForecastDto } from '../dtos/forecast-dto';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  constructor(private httpClient: HttpClient) {}

  public getCurrentWeather(lat: number, long: number): Observable<WeatherDto> {
    return this.httpClient.get<WeatherDto>(WEATHER_URL(lat, long));
  }

  public getForecastWeather(
    lat: number,
    long: number,
  ): Observable<ForecastDto> {
    return this.httpClient.get<ForecastDto>(FORECAST_URL(lat, long));
  }
}
