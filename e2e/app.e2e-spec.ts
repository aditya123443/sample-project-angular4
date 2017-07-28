import { DailyAppPage } from './app.po';

describe('daily-app App', () => {
  let page: DailyAppPage;

  beforeEach(() => {
    page = new DailyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
