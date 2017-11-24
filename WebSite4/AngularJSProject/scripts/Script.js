/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.

//Chaining Controller to module itself
var myApp = angular.module("myModule", [])
    .controller("cntrl",
        function($scope) {
            var studentDetails = [
                { sName: "Venkat", sBirth: new Date("October 17, 1992"), sGender: "Male", sSalary: 25500.50 },
                { sName: "Sama", sBirth: new Date("November 17, 1994"), sGender: "Female", sSalary: 50500 },
                { sName: "Sunny", sBirth: new Date("December 17, 1994"), sGender: "Male", sSalary: 20500 },
                { sName: "Arun", sBirth: new Date("September 17, 1992"), sGender: "Male", sSalary: 75500.75 },
                { sName: "Rita", sBirth: new Date("January 17, 1993"), sGender: "Female", sSalary: 100500.50 }
            ];
            $scope.studentDetails = studentDetails;
            $scope.sortColumn = "sName";
            $scope.reverseSort = false;

            $scope.sortData = function(column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.sortClass = function(column) {
                if ($scope.sortColumn == column) {
                    return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                }
                return "";
            };
        });

