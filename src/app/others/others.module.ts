import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { OTHERS_ROUTES } from './others.routes';

import { OthersDocumentationComponent } from './others-documentation/others-documentation.component';

@NgModule({
  declarations: [OthersDocumentationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(OTHERS_ROUTES),
    SharedModule,
  ],
})
export class OthersModule {}
