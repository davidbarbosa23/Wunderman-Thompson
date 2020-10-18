import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @HostBinding('class') classes = 'signIn row';

  loginForm: FormGroup;
  errors = null;

  constructor(
    private title: Title,
    private meta: Meta,
    private token: TokenService,
    private authState: AuthStateService,
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.title.setTitle('Login | Wunderman Thompson');
    this.meta.updateTag(
      { name: 'description', content: 'Lorem Ipsum | Wunderman Thompson' },
      `name='description'`
    );
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['profile']);
      }
    );
  }

  // Handle response
  responseHandler(data) {
    this.token.handleData(data.access_token);
  }
}
