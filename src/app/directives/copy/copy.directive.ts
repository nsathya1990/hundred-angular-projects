import { Directive, HostListener, Inject, Input } from '@angular/core';

import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]',
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService
  ) {}

  @HostListener('click')
  async copy(): Promise<void> {
    await this.navigator.clipboard.writeText(this.appCopy); /** Set the Text */
    this.document.execCommand('copy'); /** Copy the Text */
    this.snackbarService.callSnackbar('Copied Successfully');
    try {
    } catch {
      this.snackbarService.callSnackbar('Copy Failed.');
    }
  }
}
