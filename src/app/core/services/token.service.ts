import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  ); 
  
  constructor() { }

  updateToken(status: boolean) {
    this.isAuthentication.next(status);
  }

  setToken(token: string) {
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token); 
  }

  getToken(): string | null {
   return localStorage.getItem(constants.CURRENT_TOKEN);
  }

  removeToken() {
    localStorage.removeItem(constants.CURRENT_TOKEN);
   }
}
