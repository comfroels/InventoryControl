'use strict';

angular.module('inventoryControl.productEdit', [])
.controller('ProductEditCtrl', function($scope, $stateParams, ProductSvc, $state){
  var products = ProductSvc.getProducts();

  products.$loaded().then(function(x){
    $scope.product = x.$getRecord($stateParams.id);
  });

  $scope.editProduct = function(product) {
    products.$save($scope.product);
    $state.go('app.inventory');
  }
});
