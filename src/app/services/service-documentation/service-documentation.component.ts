import { Component, OnInit } from '@angular/core';

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

  state: { [key: string]: any } = {};

  constructor(
    private snackbarService: SnackbarService,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
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
