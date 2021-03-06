﻿myApp.controller('homeCtrl', ['$rootScope', '$scope','$http', function ($rootScope, $scope, $http) {
  $rootScope.header = "Home Page";
  $scope.message = "Welcome to the Home Page!";
  $http.get('http://localhost:64169/CRUD/GetUsers').
        success(function(data) {
            $scope.users = data;
        });
  $scope.predicate = 'UserName';
  $scope.reverse = true;
  $scope.sort = function (predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };
}]);

