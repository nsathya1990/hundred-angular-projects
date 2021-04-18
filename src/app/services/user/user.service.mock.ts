import { Observable, of } from 'rxjs';

export class HttpClientMock {
  lastUrl = '';
  lastOptions = null;
  response: { [key: string]: any };

  get(url: string, options?: { [key: string]: any }): Observable<any> {
    this.lastUrl = url;
    this.lastOptions = options;

    return of(this.response);
  }
}
