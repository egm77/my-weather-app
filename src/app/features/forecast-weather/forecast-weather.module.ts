import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastWeatherRoutingModule } from './forecast-weather-routing.module';
import { ForecastWeatherComponent } from './forecast-weather.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@NgModule({
  declarations: [ForecastWeatherComponent, ForecastCardComponent],
  imports: [CommonModule, ForecastWeatherRoutingModule],
})
export class ForecastWeatherModule {}
