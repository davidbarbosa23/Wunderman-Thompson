import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @HostBinding('class') classes = 'signUp row';

  registerForm: FormGroup;
  errors = null;

  constructor(
    private title: Title,
    private meta: Meta,
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.title.setTitle('Register | Wunderman Thompson');
    this.meta.updateTag(
      { name: 'description', content: 'Lorem Ipsum | Wunderman Thompson' },
      `name='description'`
    );
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }
}
