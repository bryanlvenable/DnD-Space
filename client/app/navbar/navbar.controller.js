'use strict'

angular.module('dndSpace')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Also Home',
      'link': '/'
    }];
  });