import { Ng4SeedPage } from './app.po';

describe('ng4-seed App', () => {
  let page: Ng4SeedPage;

  beforeEach(() => {
    page = new Ng4SeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
