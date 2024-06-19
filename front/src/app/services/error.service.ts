import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  //objektas, kuriam perduosime informacija apie klaidas (komponentai issius, o subscriberiai pasiims)
  public errorEmitter = new EventEmitter<string>();

  constructor() { }
}
