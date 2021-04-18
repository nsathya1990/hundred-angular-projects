import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stateKey = 'state';
  private state: { [key: string]: any };
  state$ = new BehaviorSubject<{ [key: string]: any }>({});

  constructor(@Inject('LocalStorage') private localStorage: Storage) {
    this.state = JSON.parse(this.localStorage.getItem(this.stateKey) || '{}');
    Object.freeze(this.state);
    console.log(this.state);
    this.state$.next(this.state);
  }

  setState(key: string, value: any): void {
    this.state = { ...this.state, [key]: value };
    this.localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    Object.freeze(this.state);
    this.state$.next(this.state);
  }
}
