import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {Login} from '../auth.actions';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {LoadUser} from '../../user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regulerFrom: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.regulerFrom = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login() {
    this.authService.login(this.regulerFrom.value).pipe(
      tap( token => {
        this.store.dispatch(new Login(token));
        this.router.navigateByUrl('/foods');
      })
    ).subscribe(
      noop,
      () => alert('Login Failed')
    );
  }
}
