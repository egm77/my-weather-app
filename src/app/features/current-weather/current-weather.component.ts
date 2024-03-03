import { Component, OnInit } from '@angular/core';
import { finalize, switchMap } from 'rxjs';
import { PositionService } from '../../core/services/position/position.service';
import { WeatherApiService } from '../../api-layer/weather/api/weather-api.service';
import { CurrentWeather } from '../../models/current-weather.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  public isLoading: boolean;
  public isError: boolean;
  public currentWeather: CurrentWeather;
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
          console.log(this.currentWeather);
        },
        () => {
          this.isError = true;
        },
      );
  }
}
