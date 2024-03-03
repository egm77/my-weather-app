import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FOUR_DAYS } from './constants/routes.constants';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/current-weather/current-weather.module').then(
        (m) => m.CurrentWeatherModule,
      ),
  },
  {
    path: FOUR_DAYS,
    loadChildren: () =>
      import('./features/forecast-weather/forecast-weather.module').then(
        (m) => m.ForecastWeatherModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
