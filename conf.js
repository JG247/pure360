exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['email-spec.js'],
    capabilities: {
    // FIREFOX portable in version 46.0.1
    'browserName': 'firefox'
    }
}