import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, switchMap, tap } from 'rxjs';
import { Weather } from '../../../models/weather.interface';
import { WeatherApiService } from '../../../api-layer/weather/api/weather-api.service';
import { PositionService } from '../../../core/services/position/position.service';
import { LastForecast } from '../../../models/last-forecast.interface';

export const LAST_FORECAST_KEY = 'lastForecast';

@Injectable({
  providedIn: 'root',
})
export class ForecastWeatherService {
  // TODO create NgRx store to move this logic
  private forecastWeatherSubject: BehaviorSubject<Weather[] | undefined> =
    new BehaviorSubject<Weather[] | undefined>(undefined);
  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private isErrorSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get forecastWeather$(): Observable<Weather[] | undefined> {
    return this.forecastWeatherSubject.asObservable();
  }
  get isLoading$(): Observable<boolean> {
    return this.isLoadingSubject.asObservable();
  }
  get isError$(): Observable<boolean> {
    return this.isErrorSubject.asObservable();
  }
  constructor(
    private weatherService: WeatherApiService,
    private positionService: PositionService,
  ) {}

  public getForecastWeather(): void {
    const lastForecastValue = localStorage.getItem(LAST_FORECAST_KEY);

    if (lastForecastValue) {
      const lastForecast: LastForecast = JSON.parse(lastForecastValue);
      if (lastForecast.date === new Date().toDateString()) {
        // TODO improve logic to validate if is the same location
        this.forecastWeatherSubject.next(lastForecast.forecast);
        return;
      }
    }

    this.isLoadingSubject.next(true);
    this.isErrorSubject.next(false);
    this.positionService
      .getPosition()
      .pipe(
        finalize(() => this.isLoadingSubject.next(false)),
        switchMap((value) =>
          this.weatherService.getForecastWeather(
            value.latitude,
            value.longitude,
          ),
        ),
        tap(this.saveLastForecastDate),
      )
      .subscribe(
        (value) => {
          this.forecastWeatherSubject.next(value);
        },
        () => {
          this.isErrorSubject.next(true);
        },
      );
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
