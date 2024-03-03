import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather.interface';
import { CurrentWeatherService } from './services/current-weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private currentWeatherService: CurrentWeatherService) {}

  get isLoading$(): Observable<boolean> {
    return this.currentWeatherService.isLoading$;
  }
  get isError$(): Observable<boolean> {
    return this.currentWeatherService.isError$;
  }
  get currentWeather$(): Observable<Weather | undefined> {
    return this.currentWeatherService.currentWeather$;
  }
  ngOnInit() {
    this.getCurrentWeather();
  }

  private getCurrentWeather(): void {
    this.currentWeatherService.getCurrentWeather();
  }
}
