import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "90" to "1h 30min"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(90)).toBe('1h 30min');
  });
  it('transforms "60" to "1h"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(60)).toBe('1h');
  });
  it('transforms "125" to "2h 5min"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(125)).toBe('2h 5min');
  });
});
