'use strict';

var expect = require('chai').expect;
var ovt = require('ovt');
var xss = require('xss');
ovt.plugin(require('../'));

var schema = ovt.string();

describe('ovt-plugin-xss', function() {
  [
    // sanitizers
    'xss'
  ].forEach(function(name) {
    it(`should have ${name} sanitizer for string type`, function() {
      expect(schema[name]).to.be.a('function');
      expect(xss).to.be.a('function');
    });
  });
});
