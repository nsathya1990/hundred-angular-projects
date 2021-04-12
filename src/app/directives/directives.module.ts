import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DIRECTIVES_ROUTES } from './directives.routes';

import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';

import { DebounceClickDirective } from './debounce-click/debounce-click.directive';

@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
    SharedModule,
  ],
})
export class DirectivesModule {}
