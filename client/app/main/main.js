'use strict'

angular.module('dndSpace')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: './app/main/main.html'
      });
  });