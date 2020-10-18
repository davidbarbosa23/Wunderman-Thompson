import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  @HostBinding('class') classes = 'userProfile row';

  UserProfile: User;

  constructor(
    private title: Title,
    private meta: Meta,
    public authService: AuthService,
    public globals: Globals,
    public router: Router
  ) {
    this.title.setTitle('Profile | Wunderman Thompson');
    this.meta.updateTag(
      { name: 'description', content: 'Lorem Ipsum | Wunderman Thompson' },
      `name='description'`
    );
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
