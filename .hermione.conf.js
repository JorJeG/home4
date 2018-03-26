module.exports = {
  baseUrl: 'http://localhost:3000',
  gridUrl: 'http://0.0.0.0:4444/wd/hub',

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      retry: 2
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox'
      },
      retry: 2
    }
  },

  sets: {
    common: {
      files: [
        'hermione/*.hermione.js'
      ]
    }
  },
}
