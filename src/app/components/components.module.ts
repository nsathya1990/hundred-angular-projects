import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AccordionComponent } from './accordion/accordion.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { PagingComponent } from './paging/paging.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { TabComponent } from './tab/tab.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfPageComponent } from './top-of-page/top-of-page.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    SimpleTableComponent,
    PagingComponent,
    TabComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    SharedModule,
  ],
  exports: [ToolbarComponent, TopOfPageComponent],
})
export class ComponentsModule {}
