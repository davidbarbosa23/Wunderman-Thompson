import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Globals } from '../shared/globals';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public globals: Globals) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogSignIn(state.url);
  }

  checkLogSignIn(url: string) {
    const logSignIn = ['/login', '/register'];

    return logSignIn.includes(url)
      ? !this.globals.isSignedIn
      : this.globals.isSignedIn;
  }
}
