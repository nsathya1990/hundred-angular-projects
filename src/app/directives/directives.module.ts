import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DIRECTIVES_ROUTES } from './directives.routes';

import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';

import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { CopyDirective } from './copy/copy.directive';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { LazyLoadImageDirective } from './lazy-load-image/lazy-load-image.directive';
import { RippleDirective } from './ripple/ripple.directive';
import { ScaleDirective } from './scale/scale.directive';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    AutoFocusDirective,
    CopyDirective,
    DebounceClickDirective,
    LazyLoadImageDirective,
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
    { provide: 'Window', useValue: window },
  ],
})
export class DirectivesModule {}
