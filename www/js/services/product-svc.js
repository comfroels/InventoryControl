'use strict';
angular.module('inventoryControl.services', [])
.factory('ProductSvc', function($firebaseArray,$firebaseObject){
  var products = [
    {name: 'Perfume', qty: 10, dsc: 'Nice Smelling', img: 'http://grist.files.wordpress.com/2010/01/perfume_463.jpg', category: 'Health'},
    {name: 'Chair', qty: 3, dsc: 'Nice Sitting', img: 'https://martinclemens.files.wordpress.com/2009/03/magnussen-edge-wood-desk-chair-chair_0_0.jpg', category: 'Home Office'},
    {name: 'Towel', qty: 20, dsc: 'Nice Drying', img: 'http://www.ikea.com/PIAimages/11974_PE089251_S5.JPG', category: 'Health'},
    {name: 'Computer', qty: 4, dsc: 'Nice Working', img: 'http://g-ecx.images-amazon.com/images/G/01/electronics/toshiba/toshiba-12q4-S875-main-anglewin8-bluray-lg.jpg', category: 'Home Office'}
  ];

  var ref = new Firebase('https://schoolcomfroels.firebaseio.com/products');


  function getProducts(){
    return $firebaseArray(ref);
  }

  function setProducts(newProducts){
    products = newProducts;
  }

  function getProduct(productID){
    var refNew = new Firebase('https://schoolcomfroels.firebaseio.com/products/' + productID);
    return $firebaseObject(refNew);
  }

  return {
    getProducts: getProducts,
    setProducts: setProducts,
    getProduct: getProduct
  }
});
