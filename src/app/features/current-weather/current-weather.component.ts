import { Component, OnInit } from '@angular/core';
import { finalize, switchMap } from 'rxjs';
import { PositionService } from '../../core/services/position/position.service';
import { WeatherApiService } from '../../api-layer/weather/api/weather-api.service';
import { Weather } from '../../models/weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  public isLoading: boolean;
  public isError: boolean;
  public currentWeather: Weather;
  constructor(
    private positionService: PositionService,
    private weatherService: WeatherApiService,
  ) {}

  ngOnInit() {
    this.getCurrentWeather();
  }

  private getCurrentWeather(): void {
    this.isLoading = true;
    this.isError = false;
    this.positionService
      .getPosition()
      .pipe(
        finalize(() => (this.isLoading = false)),
        switchMap((value) =>
          this.weatherService.getCurrentWeather(
            value.latitude,
            value.longitude,
          ),
        ),
      )
      .subscribe(
        (value) => {
          this.currentWeather = value;
        },
        () => {
          this.isError = true;
        },
      );
  }
}
