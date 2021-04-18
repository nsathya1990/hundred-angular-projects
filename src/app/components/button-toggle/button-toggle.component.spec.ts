import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMeta } from './button-meta.model';

import { ButtonToggleComponent } from './button-toggle.component';

describe('ButtonToggleComponent', () => {
  let component: ButtonToggleComponent;
  let fixture: ComponentFixture<ButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonToggleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(ButtonToggleComponent).toBeDefined();
  });

  describe('defaults', () => {
    it('options is empty', () => {
      expect(Array.isArray(component.options)).toBe(true);
      expect(component.options.length).toBe(0);
    });
  });

  describe('selected', () => {
    it('selects the active option', () => {
      /** Arrange */
      component.options = [
        new ButtonMeta({ title: 'title 1', isActive: true }),
        new ButtonMeta({ title: 'title 2' }),
        new ButtonMeta({ title: 'title 3' }),
      ];
      /** Act */
      component.selected(component.options[1]);
      /** Assertion */
      expect(component.options[0].isActive).toBe(false);
      expect(component.options[1].isActive).toBe(true);
    });

    it('notifies parent of button selection', () => {
      /** Arrange */
      component.options = [
        new ButtonMeta({ title: 'title 1', isActive: true }),
        new ButtonMeta({ title: 'title 2' }),
        new ButtonMeta({ title: 'title 3' }),
      ];
      component.selection.subscribe((value: ButtonMeta) => {
        /** Assertion */
        expect(value).toBe(component.options[2]);
      });
      /** Act */
      component.selected(component.options[2]);
    });
  });
});
