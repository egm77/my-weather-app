import { Component } from '@angular/core';
import { FOUR_DAYS_ROUTE } from './constants/routes.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly FOUR_DAYS = FOUR_DAYS_ROUTE;
}
