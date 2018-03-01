(function (){
  'use strict' ;

  angular.module('DIApp', [])
  .controller('DIAppController', DIAppController);

  function  DIAppController($scope,$filter,$injector){
    $scope.name = "SASI";

    $scope.lower = function (){

      var loweCase =  $filter('lowercase');
      $scope.name = loweCase($scope.name);
    }
      console.log($injector.annotate(DIController));
  }

  function annotateMe(name,job,blah){
    return "Blah!!";
  }
  console.log(annotateMe.toString());

})();
