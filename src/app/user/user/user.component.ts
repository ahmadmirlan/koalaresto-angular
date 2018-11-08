import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {getToken} from '../../auth/auth.selector';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {LoadUser} from '../user.actions';
import {getUser} from '../user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.pipe(
      select(getToken)
    ).subscribe( tkn => this.store.dispatch(new LoadUser(tkn)));
    this.user$ = this.store.pipe(
      select(getUser)
    );
  }
}
