import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './components/debounce-search/debounce-search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';
import { PagingComponent } from './components/paging/paging.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    TopOfPageComponent,
    ComponentDocumentationComponent,
    ServiceDocumentationComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
