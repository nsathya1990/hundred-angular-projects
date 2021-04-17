import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  passwordStrengthPercent = 0;
  private currentPassword = '';

  set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordSrtrength(value);
  }

  get password(): string {
    return this.currentPassword;
  }

  get is8CharactersOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }

  get hasOneCapitalLetterOrMore(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  get hasOneNumberOrMore(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  get hasOneSpecialCharacterOrMore(): boolean {
    return /\W|_/g.test(this.currentPassword);
  }

  constructor() {}

  ngOnInit(): void {}

  private updatePasswordSrtrength(value: string): void {
    let passwordStrength = 0;
    if (this.is8CharactersOrGreater) {
      passwordStrength += 25;
    }
    if (this.hasOneCapitalLetterOrMore) {
      passwordStrength += 25;
    }
    if (this.hasOneNumberOrMore) {
      passwordStrength += 25;
    }
    if (this.hasOneSpecialCharacterOrMore) {
      passwordStrength += 25;
    }
    this.passwordStrengthPercent = passwordStrength;
  }
}
