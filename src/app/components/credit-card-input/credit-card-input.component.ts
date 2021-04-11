import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent implements OnInit {
  @Input() creditCardNumber = '';

  private readOnly = false;
  get isReadOnly(): boolean {
    return this.readOnly;
  }
  @Input() set isReadOnly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadOnlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this.readOnly = value;
  }

  constructor() {}

  ngOnInit(): void {}

  private formatReadOnlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }
      return 'xxxx';
    });
    return onlyLast4Shown.join('-');
  }
}
