'use strict';

var startTime
var times = [];
var isRunning = false;
var stopwatch;

var start = function () {
	startTime = Date.now();
};

var stop = function () {
	times.push(read());
};

var read = function () {
	if (isRunning) {
		return Date.now() - startTime;
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

