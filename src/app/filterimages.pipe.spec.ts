import { FilterImagesPipes } from './filterimages.pipe';

xdescribe('FilterImagesPipes', () => {
  it('create an instance', () => {
    const pipe = new FilterImagesPipes();
    expect(pipe).toBeTruthy();
  });
});
