import { RichTextPipe } from './rich-text.pipe';

describe(RichTextPipe.name, () => {
  it('should exist/ create an instance', () => {
    const pipe = new RichTextPipe();
    expect(pipe).toBeTruthy();
  });

  describe('General', () => {
    let pipe: RichTextPipe;

    beforeEach(() => {
      pipe = new RichTextPipe();
    });

    describe('transform', () => {
      it('non-valid html returns empty', () => {
        /** arrange */
        const value = '<a>12345';
        /** act */
        const result = pipe.transform(value);
        /** assert */
        expect(result).toBe('');
      });

      it('empty html returns an empty string', () => {
        /** arrange */
        const value = '<a></a>';
        /** act */
        const result = pipe.transform(value);
        /** assert */
        expect(result).toBe('');
      });

      it('valid non-empty html returns the html', () => {
        /** arrange */
        const value = '<button>Greeting</button>';
        /** act */
        const result = pipe.transform(value);
        /** assert */
        expect(result).toBe(value);
      });
    });
  });
});
