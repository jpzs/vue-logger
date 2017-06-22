/*!
 * vue-logger v1.0.0
 * https://github.com/Lluvio/vue-logger
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vueLogger = factory());
}(this, (function () { 'use strict';

var vLogger = {};
vLogger.install = function (Vue, options) {
  var logger = {
    dev: true,
    prefix: '',
    levels: ['log', 'warn', 'debug']
  },
      key,
      key;
  if (options) {
    for (var _iterator = Object.keys(options), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      if (_isArray) {
        if (_i >= _iterator.length) break;
        key = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        key = _i.value;
      }

      if (key === 'levels') {
        logger[key] = logger[key].concat(options[key]);
      } else {
        logger[key] = options[key];
      }
    }
  }
  for (var _iterator2 = logger.levels, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      level = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      level = _i2.value;
    }

    logger[level] = function () {
      if (!this.dev || typeof console === 'undefined') return;
      var args = Array.from(arguments);
      args.unshift(('[' + this.prefix + ' :: ' + level + ']').toUpperCase());
      console[level].apply(console, args);
    };
  }
  Vue.prototype.$log = logger;
  Vue.log = logger;
};

return vLogger;

})));
