import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: CurrentWeatherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class CurrentWeatherRoutingModule {}
