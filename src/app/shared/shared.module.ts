import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../components/card/card.component';
import { CounterInputComponent } from '../components/counter-input/counter-input.component';

import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [CardComponent, CounterInputComponent, FilterTermPipe],
  imports: [CommonModule, FormsModule],
  exports: [CardComponent, CounterInputComponent, FilterTermPipe],
})
export class SharedModule {}
