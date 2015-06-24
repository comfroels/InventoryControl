'use strict';
angular.module('inventoryControl.newProduct', [])
.controller('NewProductCtrl', function($scope, ProductSvc, $state){
  $scope.products = ProductSvc.getProducts();
  $scope.product = {};
  $scope.addProduct = function(product){
    $scope.products.$add(product);
    $state.go('app.inventory');
  }
});
