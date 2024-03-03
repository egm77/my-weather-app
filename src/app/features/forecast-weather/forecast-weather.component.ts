import { Component, OnInit } from '@angular/core';
import { PositionService } from '../../core/services/position/position.service';
import { WeatherApiService } from '../../api-layer/weather/api/weather-api.service';
import { finalize, switchMap } from 'rxjs';
import { Weather } from '../../models/weather.interface';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss'],
})
export class ForecastWeatherComponent implements OnInit {
  public isLoading: boolean;
  public isError: boolean;
  public forecastWeather: Weather[];
  constructor(
    private positionService: PositionService,
    private weatherService: WeatherApiService,
  ) {}

  ngOnInit() {
    this.getForecastData();
  }

  private getForecastData(): void {
    this.isLoading = true;
    this.isError = false;
    this.positionService
      .getPosition()
      .pipe(
        finalize(() => (this.isLoading = false)),
        switchMap((value) =>
          this.weatherService.getForecastWeather(
            value.latitude,
            value.longitude,
          ),
        ),
      )
      .subscribe(
        (value) => {
          this.forecastWeather = value;
          console.log(this.forecastWeather);
        },
        () => {
          this.isError = true;
        },
      );
  }
}
