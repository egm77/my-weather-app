import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastWeatherRoutingModule } from './forecast-weather-routing.module';
import { ForecastWeatherComponent } from './forecast-weather.component';

@NgModule({
  declarations: [ForecastWeatherComponent],
  imports: [CommonModule, ForecastWeatherRoutingModule],
})
export class ForecastWeatherModule {}
