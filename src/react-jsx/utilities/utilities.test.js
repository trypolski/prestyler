import { addPrefixToBsClasses } from './utilities';

describe('addPrefixToBsClasses', () => {
  it('returns empty string if useBsClasses is false', () => {
    expect(addPrefixToBsClasses(['btn', 'btn-primary'], 'bs-', false)).toBe('');
  });

  it('returns empty string if bsClasses is empty array', () => {
    expect(addPrefixToBsClasses([], 'bs-', true)).toBe('');
  });

  it('returns empty string if bsClasses is empty string', () => {
    expect(addPrefixToBsClasses('', 'bs-', true)).toBe('');
  });

  it('adds prefix to each class in array', () => {
    expect(addPrefixToBsClasses(['btn', 'btn-primary'], 'bs-', true)).toBe('bs-btn bs-btn-primary');
  });

  it('adds prefix to each class in space-separated string', () => {
    expect(addPrefixToBsClasses('btn btn-primary', 'bs-', true)).toBe('bs-btn bs-btn-primary');
  });

  it('trims whitespace and adds prefix in space-separated string', () => {
    expect(addPrefixToBsClasses(' btn btn-primary ', 'bs-', true)).toBe('bs-btn bs-btn-primary');
  });

  it('should trims whitespace around string but not inside', () => {
    expect(addPrefixToBsClasses(' btn  btn-primary ', 'bs-', true)).toBe(
      'bs-btn bs- bs-btn-primary'
    );
  });

  it('handles prefix as empty string', () => {
    expect(addPrefixToBsClasses(['btn', 'btn-primary'], '', true)).toBe('btn btn-primary');
  });

  it('should not handle array with comma-separated strings', () => {
    expect(addPrefixToBsClasses(['btn,btn-primary', 'btn-lg'], 'bs-', true)).toBe(
      'bs-btn,btn-primary bs-btn-lg'
    );
  });
});
