/// <reference path="angular.min.js" />

//Create a module // you can say this as a "main" class.

//Chaining Controller to module itself
var myApp = angular.module("myModule", [])
    .controller("cntrl",
        function($scope) {
            var courseCounter = [
                { Name: "C#", Likes: 0, DisLikes: 0 },
                { Name: "Java", Likes: 0, DisLikes: 0 },
                { Name: "VB.NET", Likes: 0, DisLikes: 0 }
            ];
                
            $scope.courseCounter = courseCounter;

            $scope.likeCounter = function(course) {
                course.Likes++;
            };

            $scope.dislikeCounter = function(course) {
                course.DisLikes++;
            };
        });

