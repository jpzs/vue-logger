const vLogger = {}
vLogger.install = function(Vue, options) {
  var logger = {
      dev: true,
      prefix: '',
      levels: ['log', 'warn', 'debug']
    },
    key, key;
  if (options) {
    for (key of Object.keys(options)) {
      if (key === 'levels') {
        logger[key] = logger[key].concat(options[key])
      } else {
        logger[key] = options[key]
      }
    }
  }
  for (level of logger.levels) {
    logger[level] = function() {
      if (!this.dev || typeof console === 'undefined') return
      var args = Array.from(arguments);
      args.unshift(`[${this.prefix} :: ${level}]`.toUpperCase());
      console[level].apply(console, args);
    }
  }
  Vue.prototype.$log = logger
  Vue.log = logger
}
export default vLogger