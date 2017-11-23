/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.
var myApp = angular.module("myModule", []);

//Create a controller and Instalizing into the module

myApp.controller("cntrl", function ($scope) {
    $scope.Message = "My Message!!!";
});
