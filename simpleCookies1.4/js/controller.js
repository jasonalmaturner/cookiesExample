var app = angular.module('quoteBook')

app.controller('myController', function($scope, $cookies){


// This is an example of how to store strings on the $cookies object.

  // Use the put method for strings. The first argument is the key name, the second argument is the value to be stored.
  $cookies.put('theBird',"cedar waxwing");
  // The argument is the key name for the string to be retrieved.
  $scope.theBird = $cookies.get('theBird');




// This is an example of how to store anything other than strings on the
// $cookies object.
  var birdArray = [{
    commonName: "red-breasted merganser",
    family: "anatidae"
  },
  {
    commonName: "western meadowlark",
    family: "icteridae"
  }]

  // Use the putObject method for pretty much anything other than strings, ie objects, arrays, booleans, numbers, etc.
  // This is because the thing to be stored has to be converted to a string to be stored
  // as a cookie. And, the thing to be retrieved has to be converted from a string when retrieved form
  // the cookies. Angular versions prior to 1.4 did not automatically convert the values to and from
  // strings (serialize and deserialize). The methods putObject and getObject methods
  // Automatically convert the values to and from strings (serialize and deserialize).

  // The first argument is the key name, the second argument is the value to be stored.
  $cookies.putObject('birdCookie', birdArray);

  // The argument is the key name of the thing to retrieve.
  $scope.birdArray = $cookies.getObject('birdCookie');
  console.log($cookies)
})
