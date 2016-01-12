'use strict';

angular.module('angularHero.view4', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view4', {
    url: '/view4/:id',
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', '$stateParams', 'contacts', function ($scope, $stateParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($stateParams.id));
        
        $scope.clickedNext = function () {
            location.hash = '#/view1';
        };
    }]);