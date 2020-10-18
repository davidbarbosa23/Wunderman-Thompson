import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { HomepageComponent } from './components/homepage/homepage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemFormComponent } from './components/item-form/item-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: SigninComponent, canActivate:[AuthGuard] },
  { path: 'register', component: SignupComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate:[AuthGuard] },
  { path: 'items', component: ItemListComponent, canActivate:[AuthGuard] },
  { path: 'items/add', component: ItemFormComponent, canActivate:[AuthGuard] },
  { path: 'items/edit/:id', component: ItemFormComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
