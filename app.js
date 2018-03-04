(function (){
  'use strict' ;

  angular.module('LunchCheckApp', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function  LunchCheckController($scope){
  //  $scope.lunch-menu = "";


      $scope.checkLunchMenu = function () {

        var lunchMenuKeyedIn = $scope.lunchMenu;

        if(lunchMenuKeyedIn!=null){
          var itemCount = lunchMenuKeyedIn.split(",");
          console.log("ItemCOunt = "+itemCount.length);

          if(itemCount.length<3 || itemCount.length==3){
            console.log("Ietm <3 or eq = 3");
            $scope.errorMessage="Enjoy!!!!";

          }
          else if(itemCount.length>=4){
            $scope.errorMessage="Too Much";

          }

        console.log("onclck menu entered - "+$scope.lunchMenu);

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
    //  console.log($injector.annotate(LunchCheckController));
  }

})();
