import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentWeatherRoutingModule } from './current-weather-routing.module';
import { CurrentWeatherComponent } from './current-weather.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [CommonModule, CurrentWeatherRoutingModule, SharedModule],
})
export class CurrentWeatherModule {}
