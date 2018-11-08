import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../models/food';
import {map} from 'rxjs/operators';

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFoods(): Observable<Food[]> {
    return this.http.get('server/api/foods')
      .pipe(
        map(foods => foods['_embedded']['foods'])
      );
  }
  getFood(foodId: number): Observable<Food> {
    return this.http.get<Food>(`server/api/foods/${foodId}`);
  }
  saveFood(food: Food, token: string): Observable<Food> {
    return this.http.post<Food>('/server/api/foods', food, {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }});
  }
}
