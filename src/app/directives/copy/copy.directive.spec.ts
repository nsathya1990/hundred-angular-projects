import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

import { CopyDirective } from './copy.directive';

describe(CopyDirective.name, () => {
  it('should exist/ create an instance', () => {
    /** assertion */
    expect(CopyDirective).toBeDefined();
  });

  describe('General', () => {
    let directive: CopyDirective;
    let snackbarService: SnackbarService;
    let nav: any;
    let doc: any;
    let copiedText = null;
    let command = null;

    beforeEach(() => {
      nav = {
        clipboard: {
          writeText: (text: string) => {
            copiedText = text;
          },
        },
      };
      doc = {
        execCommand: (text: string) => {
          command = text;
        },
      };
      snackbarService = new SnackbarService();
      directive = new CopyDirective(nav, doc, snackbarService);
    });

    describe('copy', () => {
      it('copies correct text', async () => {
        /** arrange */
        copiedText = null;
        const text = 'Good Night';
        directive.appCopy = text;
        /** act */
        await directive.copy();
        /** assertion */
        expect(copiedText).toBe(text);
      });

      it('document copies', async () => {
        /** arrange */
        command = null;
        /** act */
        await directive.copy();
        /** assertion */
        expect(command).toBe('copy');
      });

      it('notify snackbar of successful copy', async () => {
        /** arrange */
        spyOn(directive.snackbarService, 'callSnackbar');
        /** act */
        await directive.copy();
        /** assertion */
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith(
          'Copied Successfully'
        );
      });

      /* it('notify snackbar of successful copy', async () => {
        // arrange
        spyOn(directive.snackbarService, 'callSnackbar');
        spyOn(directive.navigator.clipboard, 'writeText').and.throwError('');

        // act
        await directive.copy();

        // assert
        expect(directive.snackbarService.callSnackbar).toHaveBeenCalledWith(
          'Copied Failed.'
        );
      }); */
    });
  });
});
