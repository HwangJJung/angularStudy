// An example configuration file.
exports.config = {

  //  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  Multicapabilities: [
    {
      'browserName': 'chrome',
    },
    {
      'browserName' : 'safari'
    }
  ],

  // capabilities: { 'browserName': 'safari'},


  // Framework to use. Jasmine 2 is recommended.
  // framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/**/*.js'],

  baseUrl: 'http://localhost:9000',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  }
};
