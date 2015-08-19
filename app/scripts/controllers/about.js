'use strict';

/**
 * @ngdoc function
 * @name premierApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the premierApp
 */
angular.module('premierApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
