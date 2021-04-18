import { FormControl, FormGroup } from '@angular/forms';

import { FormDirtyGuard } from './form-dirty.guard';

import { IFormDirty } from './form-dirty.interface';

describe(FormDirtyGuard.name, () => {
  it('should exist', () => {
    /** assertion */
    expect(FormDirtyGuard).toBeDefined();
  });

  describe('General', () => {
    let guard: FormDirtyGuard;
    let component: IFormDirty;

    beforeEach(() => {
      guard = new FormDirtyGuard();
      component = {
        form: new FormGroup({
          firstName: new FormControl('', []),
        }),
      };
    });

    describe('canDeactivate', () => {
      it('when form is clean, proceed', () => {
        /** act */
        const result = guard.canDeactivate(component);
        /** assertion */
        expect(result).toBe(true);
      });

      it('when form is dirty, ask the user if they would like to proceed', () => {
        /** arrange */
        component.form.get('firstName').markAsDirty();
        spyOn(window, 'confirm').and.returnValue(true);
        /** act */
        const result = guard.canDeactivate(component);
        /** assertion */
        expect(window.confirm).toHaveBeenCalled();
      });
    });
  });
});
