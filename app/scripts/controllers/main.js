'use strict';

/**
 * @ngdoc function
 * @name premierApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the premierApp
 */
angular.module('premierApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
