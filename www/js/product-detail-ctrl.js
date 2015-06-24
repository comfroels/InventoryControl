'use strict';
angular.module('inventoryControl.productDetails', [])
.controller('ProductDetailCtrl', function($scope, ProductSvc, $stateParams, $state, $ionicPopup){

  var products = ProductSvc.getProducts();

  products.$loaded().then(function(x){
    $scope.product = x.$getRecord($stateParams.id);
  });

  $scope.deleteProduct = function(product){
    var confirmPopup = $ionicPopup.confirm({
     title: 'Are you sure?',
     template: 'Are you sure you want to delete this item?'
    });
    confirmPopup.then(function(res) {
     if(res) {
       products.$remove($scope.product);
       $state.go('app.inventory');
     }
    });
  }

  $scope.addOne = function(product){
    product.qty += 1;
    products.$save(product);
  }

  $scope.minusOne = function(product){
    if ((product.qty - 1) < 0){
      product.qty = 0;
    } else {
      product.qty -= 1;
    }
    products.$save(product);
  }

});
