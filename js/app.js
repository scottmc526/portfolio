var app = angular.module('mySite', ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'partials/about.html'
  })
  .when('/work', {
    templateUrl: 'partials/work.html'
  })
  .when('/contact', {
    templateUrl: 'partials/contact.html'
  })
})
