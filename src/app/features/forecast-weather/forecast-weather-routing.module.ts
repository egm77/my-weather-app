import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastWeatherComponent } from './forecast-weather.component';

const routes: Routes = [{ path: '', component: ForecastWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastWeatherRoutingModule {}
