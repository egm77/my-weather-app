import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Position } from '../../../models/position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {
  public getPosition(): Observable<Position> {
    return new Observable((observer: Subscriber<Position>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            observer.complete();
          },
          () => {
            observer.error();
            observer.complete();
          },
        );
      } else {
        observer.error();
        observer.complete();
      }
    });
  }
}
