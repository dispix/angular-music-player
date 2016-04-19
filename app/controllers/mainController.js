app.controller('MainController', ['$scope', '$interval', 'musicProvider', 'angularPlayer',
	function($scope, $interval, musicProvider, angularPlayer) {
		$scope.songs 	= musicProvider.getSongs();
		$scope.time 	= 0;
		$scope.freeze 	= false;

		var timer;

		$scope.startTimer = function() {
			timer = $interval(function() {
				if ($scope.time < 90000) {
					$scope.time += 100;

					if ($scope.time >= 60000) {
						angularPlayer.stop();
						$scope.freeze = true;
					}
				}
				else {
					$scope.stopTimer();
				}
			}, 100);
		}

		$scope.pauseTimer = function() {
			$interval.cancel(timer);

			timer = undefined;
		}

		$scope.stopTimer = function() {
			$interval.cancel(timer);

			timer 			= undefined;
			$scope.time 	= 0;
			$scope.freeze 	= false;
		}

		$scope.$on('music:isPlaying', function(event, isPlaying) {

			if (isPlaying) {
				$scope.startTimer();
			}
			else {
				if ($scope.time < 60000) {
					$scope.pauseTimer();
				}
			}
		});
	}
]);