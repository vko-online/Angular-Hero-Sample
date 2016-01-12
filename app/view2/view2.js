'use strict';

angular.module('angularHero.view2', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('view2', {
    url: '/view2/:id',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$stateParams', 'contacts', function($scope, $stateParams, contacts) {
        $scope.contact = contacts.getContact(parseInt($stateParams.id));

        $scope.clickedNext = function () {
            location.hash = '#/view3/' + $stateParams.id;
        };
}]);