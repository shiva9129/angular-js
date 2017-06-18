var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('basketballPlayer', function() {
  return {
    restrict: 'AE',
    scope: {
      player: '='
    },
    templateUrl: 'bball-player-template.html'
  };
});
