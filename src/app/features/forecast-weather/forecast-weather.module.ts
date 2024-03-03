import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastWeatherRoutingModule } from './forecast-weather-routing.module';
import { ForecastWeatherComponent } from './forecast-weather.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ForecastWeatherComponent, ForecastCardComponent],
  imports: [CommonModule, ForecastWeatherRoutingModule, SharedModule],
})
export class ForecastWeatherModule {}
