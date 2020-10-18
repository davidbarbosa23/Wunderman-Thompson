import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  API_URI: string = 'http://127.0.0.1:8000/api';
  isSignedIn: boolean = false;
}
