var app = angular.module("noteApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/") //needs to match "home" url

  $stateProvider

  .state("home", {
        url: "/",
        templateUrl: "./views/home.html",
        controller: "noteController"
    })

  // .state("users", {
  //       url: "/users",
  //       templateUrl: "./views/users.html", //the name on the address bar
  //       controller: "userController"
  //   })
  //
  // .state("artist", {
  //       url: "/artists",
  //       templateUrl: "./views/artists.html",
  //       controller: "artistController"
  //   })
  //
  // .state("ticket", {
  //       url: "/tickets",
  //       templateUrl: "./views/tickets.html",
  //       controller: "ticketController"
  //   })



});
