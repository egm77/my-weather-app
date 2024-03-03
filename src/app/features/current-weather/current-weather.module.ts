import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentWeatherRoutingModule } from './current-weather-routing.module';
import { CurrentWeatherComponent } from './current-weather.component';

@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [CommonModule, CurrentWeatherRoutingModule],
})
export class CurrentWeatherModule {}
