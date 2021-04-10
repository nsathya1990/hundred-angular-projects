import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';

import { DIRECTIVES_ROUTES } from './directives.routes';

@NgModule({
  declarations: [DirectiveDocumentationComponent],
  imports: [CommonModule, RouterModule.forChild(DIRECTIVES_ROUTES)],
})
export class DirectivesModule {}
