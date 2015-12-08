'use strict';

var will = require('willy').will;
var app = require('../app.js');

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

describe('reset', function () {
	it('should be chainable', function () {
		will(app.reset()).be(app);
	});
});

describe('read', function () {
	before(function () {
		app.reset();
	});

	it('should return undefined when no timer has been started', function () {
		will(app.read()).be(undefined);
	});

	it('should return ms since the timer started', function (done) {
		var TIMEOUT = 10;
		var timeout2 = TIMEOUT + 10;
		app.start();

		setTimeout(function () {
			var result = app.read();
			will(result >= TIMEOUT).be(true);
		}, TIMEOUT);

		setTimeout(function () {
			var result = app.read();
			will(result >= timeout2).be(true);
			done();
		}, timeout2);

	});
});

describe('stop', function () {
	before(function () {
		app.start();
	});

	it('should stop the timer', function () {

	});
});

