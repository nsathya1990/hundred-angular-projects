import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { CardComponent } from '../components/card/card.component';
import { CounterInputComponent } from '../components/counter-input/counter-input.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ModalComponent } from '../components/modal/modal.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabComponent } from '../components/tab/tab.component';

import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [
    BannerCutOutComponent,
    CardComponent,
    CounterInputComponent,
    FooterComponent,
    ModalComponent,
    SnackbarComponent,
    TabComponent,
    FilterTermPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    BannerCutOutComponent,
    CardComponent,
    CounterInputComponent,
    FooterComponent,
    ModalComponent,
    SnackbarComponent,
    TabComponent,
    FilterTermPipe,
  ],
})
export class SharedModule {}
