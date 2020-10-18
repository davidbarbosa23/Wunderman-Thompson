import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { TokenService } from '../shared/token.service';

import { Globals } from './globals';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn());
  userAuthState = this.userState.asObservable();

  constructor(public token: TokenService, public globals: Globals) {
    this.globals.isSignedIn = this.userState.value;
  }

  setAuthState(value: boolean) {
    this.userState.next(value);
    this.globals.isSignedIn = value;
  }
}
