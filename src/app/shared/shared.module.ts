import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { CardComponent } from '../components/card/card.component';
import { CounterInputComponent } from '../components/counter-input/counter-input.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [
    BannerCutOutComponent,
    CardComponent,
    CounterInputComponent,
    SnackbarComponent,
    FilterTermPipe,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    BannerCutOutComponent,
    CardComponent,
    CounterInputComponent,
    SnackbarComponent,
    FilterTermPipe,
  ],
})
export class SharedModule {}
