import { Observable, of } from 'rxjs';

import { User } from './user.model';

export class HttpClientMock {
  lastUrl = '';
  lastOptions = null;
  response: { [key: string]: any };
  lastHttpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

  get(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'GET';

    return of(this.response);
  }
}

export class UserServiceMock {
  lastId: number = null;
  user = new User();

  getUserById(id: number): Observable<User> {
    this.lastId = id;

    return of(this.user);
  }
}
