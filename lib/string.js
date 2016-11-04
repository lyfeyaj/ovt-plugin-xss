'use strict';

module.exports = function StringExtention(Ovt, xss) {
  // Add sanitizers for StringType
  Ovt.addMethod('string', 'xss', function() {
    return xss.apply(null, arguments);
  }, { type: 'sanitizer' });
};
