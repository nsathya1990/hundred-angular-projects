import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PIPE_ROUTES } from './pipes.routes';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';

import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';

@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, CreditCardFormatterPipe],
  imports: [RouterModule.forChild(PIPE_ROUTES), CommonModule, SharedModule],
})
export class PipesModule {}
