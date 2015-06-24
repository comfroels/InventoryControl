'use strict';
angular.module('inventoryControl.inventory', [])
.controller('InventoryCtrl', function($scope, ProductSvc, $ionicHistory, $ionicNavBarDelegate){
  $ionicHistory.clearHistory();
  $ionicNavBarDelegate.showBackButton(false);
  $scope.products = ProductSvc.getProducts();
});
