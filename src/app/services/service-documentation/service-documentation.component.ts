import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { User } from '../user/user.model';

import { SnackbarService } from '../snackbar/snackbar.service';
import { UserService } from '../user/user.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss'],
})
export class ServiceDocumentationComponent implements OnInit {
  user = new User();
  userIdExample = new User();

  state: { [key: string]: any } = {};

  constructor(
    private snackbarService: SnackbarService,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        mergeMap((id) => {
          console.log(id);
          return id
            ? this.userService.getUserById(id)
            : of({ id: 0, name: '', email: '' });
        })
      )
      .subscribe({
        next: (value) => (this.userIdExample = value),
      });

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => console.log(error),
      complete: () => console.log('Done'),
    });

    this.localStorageService.state$.subscribe((data) => {
      console.log(data);
      this.state = data;
    });
  }

  callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }

  updateState(): void {
    this.localStorageService.setState('hello', 'darkness my  old friend');
  }
}
