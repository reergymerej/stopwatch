'use strict';

var will = require('willy').will;
var app = require('../app.js');

describe('sanity', function () {
  it('should load', function () {
    will(app).exist();
  });
});

describe('api', function () {
	it('should expose start', function () {
		will(app.start).beA(Function);
	});

	it('should expose stop', function () {
		will(app.stop).beA(Function);
	});

	it('should expose read', function () {
		will(app.read).beA(Function);
	});

	it('should expose reset', function () {
		will(app.reset).beA(Function);
	});
});
