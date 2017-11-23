/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.

//Chaining Controller to module itself
var myApp = angular.module("myModule", [])
    .controller("cntrl",
        function($scope) {
            var std = [
                { name: "India", Sports: [{ name: "Cricket" }, {name: "Hockey" }] },
                { name: "USA", Sports: [{ name: "Football" }, {name: "Soccer" }] },
                {
                    name: "Brazil",
                    Sports: [{ name: "Football" },{ name: "Vollyball" }]
                }
            ];
            $scope.std = std;
        });

