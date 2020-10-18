import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { User } from '../../models/User';

import { Globals } from '../../shared/globals';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @HostBinding('class') classes = 'container';

  UserProfile: User;

  constructor(
    public authService: AuthService,
    public globals: Globals,
    public router: Router
  ) {
    this.authService.profileUser().subscribe(
      (data: any) => {
        this.UserProfile = data;
      },
      (error) => {
        if (error.status == 401) {
        }
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
