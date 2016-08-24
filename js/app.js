var app = angular.module('mySite', ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'partials/about.html'
  })
})
