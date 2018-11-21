// script.js

// create the module and name it scotchApp
var app = angular.module('bijbelonderwijsAtHomeApp', ['ngRoute']);

// route config
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

    .when('/home', {
        templateUrl: './pages/home.html',
        controller: 'homeController'
    })
    .when('/who', {
        templateUrl: './pages/who.html',
        controller: 'whoController'
    })
    .when('/education', {
        templateUrl: './pages/education.html',
        controller: 'educationController'
    })
    .when('/vision', {
        templateUrl: './pages/vision.html',
        controller: 'visionController'
    })
    .when('/subscribe', {
        templateUrl: './pages/subscribe.html',
        controller: 'subscribeController'
    })
    .when('/reviews', {
        templateUrl: './pages/reviews.html',
        controller: 'reviewsController'
    })
    .when('/contact', {
        templateUrl: './pages/contact.html',
        controller: 'contactController'
    })

    .otherwise({
        redirectTo: '/home'
    })
}]);

// home controller
app.controller('homeController', function ($scope) {
});

// who controller
app.controller('whoController', function ($scope) {
});

// education controller
app.controller('educationController', function ($scope) {
});

// vision controller
app.controller('visionController', function ($scope) {
});

// subscribe controller
app.controller('subscribeController', function ($scope) {
});

// reviews controller
app.controller('reviewsController', function ($scope) {
});

// contact controller
app.controller('contactControler', function ($scope) {
});