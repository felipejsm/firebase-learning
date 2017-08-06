import { RealtimeappPage } from './app.po';

describe('realtimeapp App', () => {
  let page: RealtimeappPage;

  beforeEach(() => {
    page = new RealtimeappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
