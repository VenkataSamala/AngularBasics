/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.

//Chaining Controller to module itself
var myApp = angular.module("myModule", [])
    .controller("cntrl",
        function($scope) {
            var studentDetails = [
                { sName: "Venkat",sCity:"Kansas City", sGender: 1, sSalary: 25500.50 },
                { sName: "Sama",  sCity:"Jersey City", sGender: 2, sSalary: 50500 },
                { sName: "Sunny", sCity:"Westborough", sGender: 1, sSalary: 20500 },
                { sName: "Arun",  sCity:"South Grafton", sGender: 2, sSalary: 75500.75 },
                { sName: "Rita",  sCity:"Frisco", sGender: 3, sSalary: 100500.50 }
            ];
            $scope.studentDetails = studentDetails;

            $scope.search = function(item) {
                if ($scope.searchText == undefined) {
                    return true;
                } else {
                    if (item.sName.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1 ||
                        item.sCity.toLowerCase().indexOf($scope.searchText.toLowerCase()) !== -1) {
                        return true;
                    }
                }
                return false;
            }
            return true;
        });

