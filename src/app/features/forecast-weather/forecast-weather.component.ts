import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../../models/weather.interface';
import { ForecastWeatherService } from './services/forecast-weather.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss'],
})
export class ForecastWeatherComponent implements OnInit {
  public weatherSelected: Weather;
  constructor(private forecastWeatherService: ForecastWeatherService) {}

  get isLoading$(): Observable<boolean> {
    return this.forecastWeatherService.isLoading$;
  }
  get isError$(): Observable<boolean> {
    return this.forecastWeatherService.isError$;
  }
  get forecastList$(): Observable<Weather[] | undefined> {
    return this.forecastWeatherService.forecastWeather$;
  }

  ngOnInit() {
    this.getForecastData();
  }

  private getForecastData(): void {
    this.forecastWeatherService.getForecastWeather();
  }

  public onWeatherSelected(event: Weather): void {
    this.weatherSelected = event;
  }
}
