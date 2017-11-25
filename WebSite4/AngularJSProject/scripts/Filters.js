/// <reference path="angular.min.js" />
/// <reference path="Script.js" />

myApp.filter("gender", function (){
   return function(sGender) {
        switch (sGender) {
        case 1:
            return "Male";
            break;
        case 2:
            return "Female";
            break;
        case 3:
            return "Unspecified";
            break;
        }
    }
})