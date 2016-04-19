'use strict';

app.service('musicTimer', ['$rootScope', function($rootScope) {
	var time = 0;
	var timer;
	$rootScope.freeze = 0;

	// this.startTimer = function(max, offset, callback) {
	// 	time = offset;
	//
	// 	timer = window.setInterval(function() {
	//
	// 		console.log('*** TIMER ***' + time + ' / ' + max);
	//
	// 		if (time < max) time++;
	//
	// 		if (time >= max) {
	// 			clearInterval(timer);
	// 			return callback();
	// 		}
	// 	}, 1000);
	// }

	this.startTimer = function(max) {
		timer = $interval(function() {
			if (time < max) {
				time++;
			}
			else {
				$interval.cancel(timer);
				$rootScope.$broadcast('musicTimer:timerOut');
			}
		}, 1000)
	}

	this.pauseTimer = function() {
		clearInterval(timer);
	}

	this.stopTimer = function() {
		clearInterval(timer);
		time = 0;
	}

	this.getTime = function() {
		return time;
	}

	this.startFreeze = function(dur) {
		$rootScope.freeze = dur;

		timer = $interval(function() {
			if ($rootScope.freeze < 0) {
				$rootScope.freeze--;
			}
			else {
				$interval.stop(timer);
				$rootScope.freeze = 0;
				$rootScope.emit('musicTimer:freezeOut')
			}
		}, 1000);
	}
}]);