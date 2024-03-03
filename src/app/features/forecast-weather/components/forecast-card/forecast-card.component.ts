import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '../../../../models/weather.interface';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent {
  @Input() weather: Weather;
  @Input() isSelectedCard: boolean;
  @Output() weatherSelected: EventEmitter<Weather> =
    new EventEmitter<Weather>();

  public onWeatherSelected(): void {
    this.weatherSelected.emit(this.weather);
  }
}
