import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, switchMap } from 'rxjs';
import { Weather } from '../../../models/weather.interface';
import { WeatherApiService } from '../../../api-layer/weather/api/weather-api.service';
import { PositionService } from '../../../core/services/position/position.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentWeatherService {
  // TODO create NgRx store to move this logic
  private currentWeatherSubject: BehaviorSubject<Weather | undefined> =
    new BehaviorSubject<Weather | undefined>(undefined);
  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private isErrorSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  get currentWeather$(): Observable<Weather | undefined> {
    return this.currentWeatherSubject.asObservable();
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

  public getCurrentWeather(): void {
    this.isLoadingSubject.next(true);
    this.isErrorSubject.next(false);
    this.positionService
      .getPosition()
      .pipe(
        finalize(() => this.isLoadingSubject.next(false)),
        switchMap((value) =>
          this.weatherService.getCurrentWeather(
            value.latitude,
            value.longitude,
          ),
        ),
      )
      .subscribe(
        (value) => {
          this.currentWeatherSubject.next(value);
        },
        () => {
          this.isErrorSubject.next(true);
        },
      );
  }
}
