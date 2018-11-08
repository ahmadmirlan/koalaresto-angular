import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../reducers';
import {Observable} from 'rxjs';
import {getToken, isLoggedIn, isLoggedOut} from '../../../auth/auth.selector';
import {Logout} from '../../../auth/auth.actions';
import {LoadUser} from '../../../user/user.actions';
import {User} from '../../../models/user';
import {getUser} from '../../../user/user.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  user$: Observable<User>;
  ngOnInit() {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );

    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
