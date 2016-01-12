'use strict';

angular.module('angularHero.view3', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view3', {
    url: '/view3/:id',
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$stateParams', 'contacts', function ($scope, $stateParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($stateParams.id));
        
        $scope.clickedNext = function () {
            location.hash = '#/view4/' + $stateParams.id;
        };
    }]);