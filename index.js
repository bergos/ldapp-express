var express = require('express')

module.exports = function () {
  var config = this

  config.app = express()

  if (config.expressSettings) {
    for (var key in config.expressSettings) {
      config.app.set(key, config.expressSettings[key])
    }
  }

  config.app.use(express.cookieParser())
  config.app.use(express.session(config.session))
}
