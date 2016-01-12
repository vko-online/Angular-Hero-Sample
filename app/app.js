'use strict';

// Declare app level module which depends on views, and components
angular.module('angularHero', [
  'ui.router',
  'ngAnimate',
  'alAngularHero',
  'angularHero.view1',
  'angularHero.view2',
  'angularHero.view3',
  'angularHero.view4',
  'angularHero.contactsService'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/view1');
}]);
