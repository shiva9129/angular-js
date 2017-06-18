var linkrControllers = angular.module('myControllers', []);

linkrControllers.controller('MyCtrl', function($scope) {
  $scope.basketballPlayer = {
    name: 'Johnny Basketball',
    number: '33',
    position: 'Guard',
    points: 0,
    assists: 0
  };
});
