describe('Test mail app', function() {
  it('should go click the email with id1 and access the email details then close the window', function() {
    browser.get('http://localhost:8080');

    element(by.css('#id1')).click();
    expect(element(by.css('#emailName')).getText()).toEqual("Name 1");

    element(by.css('#plainMode')).click();
    element(by.css('#htmlMode')).click();

    element(by.css('#closeBtn')).click();
  });
  it('should go click the email with id2 and access the email details then close the window', function() {
    browser.get('http://localhost:8080');

    element(by.css('#id2')).click();
    expect(element(by.css('#emailName')).getText()).toEqual("Name 2");

    element(by.css('#plainMode')).click();
    element(by.css('#htmlMode')).click();

    element(by.css('#closeBtn')).click();
  });
  it('should go click the email with id3 and access the email details then close the window', function() {
    browser.get('http://localhost:8080');

    element(by.css('#id3')).click();
    expect(element(by.css('#emailName')).getText()).toEqual("Name 3");

    element(by.css('#plainMode')).click();
    element(by.css('#htmlMode')).click();

    element(by.css('#closeBtn')).click();
  });
});