import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';

import { SERVICES_ROUTES } from './service.routes';

import { UserService } from './user/user.service';
import { LocalStorageService } from './local-storage/local-storage.service';

@NgModule({
  declarations: [ServiceDocumentationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(SERVICES_ROUTES),
  ],
  providers: [
    UserService,
    LocalStorageService,
    { provide: 'LocalStorage', useValue: window.localStorage },
  ],
})
export class ServicesModule {}
