import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PIPE_ROUTES } from './pipes.routes';

import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';

import { TruncatePipe } from './truncate/truncate.pipe';

@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe],
  imports: [RouterModule.forChild(PIPE_ROUTES), CommonModule, SharedModule],
})
export class PipesModule {}
