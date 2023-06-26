//demo.js is a JS file under tests folder
module.exports = {
    before : function(browser) {

      //Declaring Global Timeout
      browser.globals.waitForConditionTimeout = 5000;
    },

    'Wikipedia Search 2' : function (browser) {
    browser
      .url('https://www.wikipedia.org/')
      .assert.title('Wikipedia')
      .setValue('#searchInput', 'Google')
      .click('button[type="submit"]')
      .assert.containsText('h1#firstHeading', 'Google')
      .assert.title('Google - Wikipedia')
  },

  'Duck Duck Go Search 2' : function (browser) {
    browser
      .url('https://duckduckgo.com/')
      .assert.title('DuckDuckGo')
      .setValue('#searchbox_input', 'Google')
      .click('button[type="submit"]')
      .assert.title('Google at DuckDuckGo')
  },

  after : function(browser) {
    browser.end();
  }

}