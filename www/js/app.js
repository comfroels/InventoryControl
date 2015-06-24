// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('inventoryControl', [
  'ionic',
  'firebase',
  'ngCordova',
  'inventoryControl.inventory',
  'inventoryControl.services',
  'inventoryControl.newProduct',
  'inventoryControl.productDetails',
  'inventoryControl.productEdit'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    templateUrl: "templates/menu.html",
  })

  .state('app.inventory', {
    url: "/inventory",
    views: {
      'menuContent': {
        templateUrl: "templates/inventory.html"
      }
    },
    controller: 'InventoryCtrl'
  })

  .state('app.new-product', {
    url: "/new-product",
    views: {
      'menuContent': {
        templateUrl: "templates/new-product.html"
      }
    },
    controller: 'NewProductCtrl'
  })

  .state('app.product-detail', {
    url: "/product/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/product-detail.html"
      }
    },
    controller: 'ProductDetailCtrl'
  })

  .state('app.product-edit', {
    url: "/product/edit/:id",
    views: {
      'menuContent': {
        templateUrl: "templates/product-edit.html"
      }
    },
    controller: 'ProductEditCtrl'
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inventory');
});
