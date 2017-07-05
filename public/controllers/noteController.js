angular
  .module("noteApp")
  .controller("noteController", function ($scope, $http) {

    $scope.users = [];
   
    $scope.note = [];

    // users
    $scope.id = "";
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.schoolName = "";
    $scope.email = "";
    $scope.note = "";

    // notePost
    $scope.notes = ""
    $scope.postId = "";
    $scope.postedBy = "";
    $scope.postedOn = "";
    //** Get
    $scope.getUserNotes = function () {
      $scope.note = [];
      $http.get('http://localhost:3000/user/notes')
        .then(function (response) {
          for (var i = 0; i < response.data.usersNotes.length; i++) {
            $scope.note.unshift(response.data.usersNotes[i]);
            console.log('This is my index path');
            console.log(response.data);
          }
        })
    }
    $scope.getUserNotes();

    $scope.getUsers = function () {
      $scope.note = [];
      $http.get('http://localhost:3000/users')
        .then(function (response) {
          // for (var i = 0; i < response.data.usersNotes.length; i++) {
            $scope.users.push(response.data);
            console.log('This is my index path');
            console.log(response.data);
          // }
        })
    }
    $scope.getUsers()
    // ****************************** Button functions ******************************:

    // Submit Button POST
    $scope.submitButton = function (notes) {
      console.log("get's here")
      $http.post('http://localhost:3000/user/notes/0', { note: notes })
        .then(function (response) {
          console.log('This is my create path');
          console.log(response.data);
          $scope.getUserNotes();
        })
    }


    // $scope.editButton = function(user) {
    //   for (var i = 0; i < $scope.users.length; i++) {
    //     if(($scope.users[i] ==  user.id) && $scope.notepost == notepost.id)){
    //       currentUserIndex = i

    //       currentUserId = user.id
    //       $scope.firstName = user.firstName;
    //       $scope.lastName = user.lastName;
    //       $scope.userPost = user.userPost;
    //     }
    //   }
    // }

    // Delete Button
    $scope.deleteButton = function (id) {
        $http.delete('http://localhost:3000/user/notes/'+0+"/"+ id)
                .then(function (response) {
                    console.log('This is my destroy path');
                    console.log(response.data);
                     $scope.getUserNotes();
                })
    }



  })
