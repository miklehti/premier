'use strict';

angular.module('premierApp')
  .controller('MainCtrl', function($scope, $http, Data) {
    $scope.awesomeThings = [];
    $scope.premTable = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.premTable = Data.getPremTable();
    console.log($scope.premTable);

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
