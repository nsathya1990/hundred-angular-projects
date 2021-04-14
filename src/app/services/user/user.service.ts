import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseRoute = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http
      .get(`${this.baseRoute}/${id}`)
      .pipe(map((value) => new User(value)));
  }
}