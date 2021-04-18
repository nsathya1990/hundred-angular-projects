import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PIPE_ROUTES } from './pipes.routes';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';

import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';
import { RichTextPipe } from './rich-text/rich-text.pipe';
import { SortByKeyPipe } from './sort-by-key/sort-by-key.pipe';
import { SortByPipe } from './sort-by/sort-by.pipe';
import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
    CreditCardFormatterPipe,
    FlattenPipe,
    RichTextPipe,
    SortByKeyPipe,
    SortByPipe,
    TruncatePipe,
  ],
  imports: [RouterModule.forChild(PIPE_ROUTES), CommonModule, SharedModule],
})
export class PipesModule {}
