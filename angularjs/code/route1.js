$routeProvider.when('/', {
  templateUrl: 'templates/splash.html',
  controller: 'SplashController',
  isPublic: true // Custom properties
}).
// Route with parameters
when('/academics/semester/:semester', {
  templateUrl: 'templates/academics_semester.html',
  controller: 'AcademicsController'
}).
// Redirect to a 404 page
otherwise({
  templateUrl: 'templates/404.html',
  controller: 'ErrorController',
  isPublic: true
});
