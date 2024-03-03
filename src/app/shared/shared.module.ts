import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

@NgModule({
  declarations: [WeatherCardComponent],
  exports: [WeatherCardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
