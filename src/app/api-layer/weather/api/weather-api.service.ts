import { Injectable } from '@angular/core';
import { WeatherHttpService } from "../http/weather-http.service";
import { map, Observable } from "rxjs";
import { CurrentWeather } from "../../../models/current-weather.interface";
import { mapWeatherToDomain } from "../mappers/weather.mapper";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private weatherHttpService: WeatherHttpService) { }

  public getCurrentWeather(lat: number, long: number): Observable<CurrentWeather> {
    return this.weatherHttpService.getCurrentWeather(lat, long).pipe(map(mapWeatherToDomain))
  }
}
