$routeProvider.when('/', {
  templateUrl: 'templates/splash.html',
  controller: 'SplashController',
  isPublic: true // Custom properties
}).
// Route with parameters
when('/events/:event', {
  templateUrl: 'templates/event.html',
  controller: 'EventsController'
}).
// Redirect to a 404 page
otherwise({
  templateUrl: 'templates/404.html',
  controller: 'ErrorController',
  isPublic: true
});
