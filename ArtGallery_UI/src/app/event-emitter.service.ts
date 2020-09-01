import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeHomePageIdleWatch = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onHomePageIdleWatch(){
    this.invokeHomePageIdleWatch.emit();
  }
}
