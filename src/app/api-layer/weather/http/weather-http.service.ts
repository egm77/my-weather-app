import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDto } from '../dtos/weather-dto';
import { WEATHER_URL } from '../endpoints';

@Injectable({
  providedIn: 'root',
})
export class WeatherHttpService {
  constructor(private httpClient: HttpClient) {}

  public getCurrentWeather(lat: number, long: number): Observable<WeatherDto> {
    return this.httpClient.get<WeatherDto>(WEATHER_URL(lat, long));
  }
}
