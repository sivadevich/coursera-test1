(function (){
  'use strict' ;
  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function  LunchCheckController($scope){
      $scope.checkLunchMenu = function () {
        var lunchMenuKeyedIn = $scope.lunchMenu;
        if(lunchMenuKeyedIn!=null && lunchMenuKeyedIn!=""){
          var itemCount = lunchMenuKeyedIn.split(",");
          if(itemCount.length<3 || itemCount.length==3){
            $scope.errorMessage="Enjoy!!!!";
          }
          else if(itemCount.length>=4){
            $scope.errorMessage="Too Much";
          }
        }
        else{
          $scope.errorMessage="Please enter data first";
          return;
        }
      };
      $scope.clearErrorMessage = function () {
          $scope.errorMessage="";
          return;
      };
  }
})();
