'use strict';

var _startTime;

var stopwatch;

var start = function () {
	_startTime = Date.now();
};

var stop = function () {};

var read = function () {
	if (_startTime) {
		return Date.now() - _startTime;
	}
};

var reset = function () {
	return stopwatch; 
};

stopwatch = {
	start: start,
	stop: stop,
	read: read,
	reset: reset,
};

module.exports = stopwatch;

