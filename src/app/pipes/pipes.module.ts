import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PIPE_ROUTES } from './pipes.routes';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';

import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { RichTextPipe } from './rich-text/rich-text.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
    SortByPipe,
  ],
  imports: [RouterModule.forChild(PIPE_ROUTES), CommonModule, SharedModule],
})
export class PipesModule {}
