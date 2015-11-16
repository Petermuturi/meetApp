 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");
  $(".hd").hide();
    angular.module('AuthApp', [])
.run(['$rootScope', function($scope) {
  $scope.scenario = 'Sign up';
  $scope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
     var user = new Parse.User();
user.set("username", form.firstname);
user.set("phone", form.phone);
user.set("email", form.email);
user.set("password", form.password);


    user.signUp(null, {
      success: function(user) {
        window.open("profile.html");
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };
  
  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $("#up").hide();
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;

  };
}]);

// other fields can be set just like with Parse.Object
  
user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});

function sendRes(){
    var email = $("#passwordResetEmail").val();

    Parse.User.requestPasswordReset(email, {
        success:function() {
            alert("Reset instructions emailed to you.");
        },
        error:function(error) {
            alert(error.message);
        }
    });
}
 