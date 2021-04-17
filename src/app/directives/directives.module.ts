import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DIRECTIVES_ROUTES } from './directives.routes';

import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';

import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';
import { CopyDirective } from './copy/copy.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    CopyDirective,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES),
    SharedModule,
  ],
  providers: [
    { provide: 'Navigator', useValue: navigator },
    { provide: 'Document', useValue: document },
  ],
})
export class DirectivesModule {}
