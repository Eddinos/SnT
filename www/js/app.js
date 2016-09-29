// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'authentication'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('outside', {
    url: '/outside',
    abstract: true,
    templateUrl: 'templates/outside.html'
  })

  .state('outside.login', {
    url: '/login',
    templateUrl: 'authentication/login/login.html',
    controller: 'LoginController',
    controllerAs: 'Login'
  })

  .state('outside.createAccount', {
    url: '/createAccount',
    templateUrl: 'authentication/createAccount/createAccount.html',
    controller: 'CreateAccountController'
  })



  

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/inside.html'
      }
    }
  })
/*
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('auth.createAccount', {
      url: '/auth/createAccount',
      templateUrl: 'createAccount/createAccount.html',
      controller: 'CreateAccountController'
    }
  ).
  state('auth.login',
    url: '/auth/login',
    templateUrl: 'templates/login.html');
  ).
  state('auth.createAccount',
    url: '/auth/createAccount',
    templateUrl: 'templates/login.html')*/;


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/outside/login');
})

.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    if (!AuthService.isAuthenticated()) {
      console.log(next.name);
      if (next.name !== 'outside.login' && next.name !== 'outside.createAccount') {
        event.preventDefault();
        $state.go('outside.login');
      }
    }
  });
});
