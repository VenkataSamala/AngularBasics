/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.

//Chaining Controller to module itself
var myApp = angular.module("myModule", [])
.controller("cntrl", function ($scope) {
        $scope.Message = "Hell ng";
    });

