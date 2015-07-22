'use strict';

angular.module('dndSpace', [
  'ui.router'
])
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ])
  .config('$stateProvider', '$urlRouterProvider', [function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "app/main/main.html"
      });
    }
  ]);


