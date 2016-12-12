'use strict';

const xss = require('xss');

module.exports = function(ovt) {
  // Add sanitizers for StringType
  ovt.addMethod('string', 'xss', function() {
    return xss.apply(null, arguments);
  }, { type: 'sanitizer' });
};
