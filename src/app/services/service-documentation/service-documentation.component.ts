import { Component, OnInit } from '@angular/core';

import { User } from '../user/user.model';

import { SnackbarService } from '../snackbar/snackbar.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss'],
})
export class ServiceDocumentationComponent implements OnInit {
  user = new User();

  constructor(
    private snackbarService: SnackbarService,
    private userService: UserService
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
  }

  callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }
}
