'use strict';
angular.module('inventoryControl.newProduct', [])
.controller('NewProductCtrl', function($scope, ProductSvc, $state, $cordovaBarcodeScanner){
  $scope.products = ProductSvc.getProducts();
  $scope.product = {};
  $scope.addProduct = function(product){
    $scope.products.$add(product);
    $state.go('app.inventory');
  }

  document.addEventListener("deviceready", function(){
    $scope.scanMe = function(){
      $cordovaBarcodeScanner.scan()
      .then(function(response){
        $scope.product.upc = response.text;
      });
    }
  });

});
