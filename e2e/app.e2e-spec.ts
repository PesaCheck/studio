import { PesacheckStudioPage } from './app.po';

describe('pesacheck-studio App', () => {
  let page: PesacheckStudioPage;

  beforeEach(() => {
    page = new PesacheckStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
