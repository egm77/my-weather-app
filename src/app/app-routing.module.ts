import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/current-weather/current-weather.module').then(
        (m) => m.CurrentWeatherModule,
      ),
  },
  {
    path: 'four-days',
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
