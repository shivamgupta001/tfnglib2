import { Tfnglib2Page } from './app.po';

describe('tfnglib2 App', () => {
  let page: Tfnglib2Page;

  beforeEach(() => {
    page = new Tfnglib2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
