/**
 * The Angular application, no need to modify.
 */

(function () {
  var app = angular.module('app', [
    'ngRoute'
  ]);

  app.config([
    '$routeProvider',

    function ($routeProvider) {
      $routeProvider
        .when('/:page', {
          templateUrl: 'templates/include.html',
          controller: 'PageController'
        })
        .when('/', {
          templateUrl: 'templates/include.html',
          controller: 'PageController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);


  // Controllers

  app.controller('PageController', [
    '$routeParams',
    '$scope',

    function ($routeParams, $scope) {
      var page = $routeParams.page || 'index';

      $scope.templateUrl = 'templates/' + page + '.html';
    }
  ]);

})();
