'use strict';
angular.module('inventoryControl.inventory', [])
.controller('InventoryCtrl', function($scope, ProductSvc, $ionicHistory){
  $ionicHistory.clearHistory();
  $scope.products = ProductSvc.getProducts();
});
