import { Component, Input } from '@angular/core';
import { Weather } from '../../../../models/weather.interface';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent {
  @Input() weather: Weather;
}
