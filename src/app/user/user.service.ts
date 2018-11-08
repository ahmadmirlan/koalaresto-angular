import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {getToken} from '../auth/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getMyProfile(token: string): Observable<User> {
    return this.http.post<User>('server/api/users/myprofile', token, {headers: {
        'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      }});
  }

  ngOnInit(): void {

  }
}
