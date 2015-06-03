var app = angular.module('quoteBook')

app.controller('myController', function($scope, $cookies){

// This is an example of how to store strings on the $cookies object.

  // This should look pretty familiar. The $cookies is just an object that we can
  // easily add keys to and store string values.
  $cookies.theBird = "cedar waxwing";
  $scope.theBird = $cookies.theBird;




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

  // Adding anything other than a string to the $cookies is a little bit tricky.
  // Any non string value has to be converted to a string. The angular.toJson
  // method will convert anything to a string, which can then be stored
  // on the $cookies object.
  $cookies.birdCookie = angular.toJson(birdArray);

  // When retrieving something from the $cookies object, we need to convert it
  // from a string into whatever it was before it was converted. The
  // anguler.fromJson method will convert the string value back into an array
  // of objects. This process of converting things to strings and back is called
  // serialize and deserialize. To serialize something is to convert it to a string.
  // To deserialize something is to convert it from a string.
  $scope.birdArray = angular.fromJson($cookies.birdCookie);

  console.log($cookies)
})
