'use strict';

app.directive('songDirective', function() {
	return {
		restrict: 'E',
		templateUrl: '../../views/directives/song.html'
	}
});