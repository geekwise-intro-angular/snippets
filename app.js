var app = angular.module('classApp', []);

app.controller('linkList', function($scope){
$scope.welcome = "Hello Students";
//Scope is a service
//Scope is an object
//All services have a dollar sign
//add variable welcome onto the scope
//scope becomes that tie between the view and controller


$scope.class = {description: "This is the main github page for finding all the repositories related to the class"}

$scope.info = [
{title: "Github Organization",
link: "https://github.com/geekwise-intro-angular"},
{title: "Class Site",
link: "http://geekwise-intro-angular.github.io/class-site/#/"},
{title: "The repo to this page",
link: "https://github.com/geekwise-intro-angular/geekwise-intro-angular.github.io"},

]
})
