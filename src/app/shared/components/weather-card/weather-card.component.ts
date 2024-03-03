import { Component, Input } from '@angular/core';
import { CurrentWeather } from '../../../models/current-weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weather: CurrentWeather;
}
