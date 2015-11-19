 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var profilePic = Parse.Object.extend("profilePic");

 function getPosts(){
  var query = new Parse.Query(profilePic); 
  query.find({
    success:function(results){
      var output = "";
          for(var i in results){
             var img = "<img src='img/user.png'>";
             if(results[i].get("photo1")){
             var file = results[i].get("photo1");
             var url = file.url();
              img = "<img style='height:150px;width:190px;'src='"+url+"'>";
            }
             // console.log("name: "+name);
             
              output+="<div>"+img+"</div>";
            
          }
          $("#userpic").html(output);
  },
  error:function(error){
     
  }
 });
 }

   getPosts();


$("#ppic").submit(function(event){
  event.preventDefault();
  var user = Parse.User.current();
  
  var newRestaurant = new profilePic();
  newRestaurant.set("user", user);


 
  var photorest1 = $("#dp")[0];
  var photorest1path = $("#dp").val();
  var photorest1name = photorest1path.split("\\").pop();

  if(photorest1.files.length > 0) {
    var pic1 = photorest1.files[0];
    var rest1 = new Parse.File(photorest1name, pic1);
     rest1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newRestaurant.set("photo1", theFirstPhoto);
      newRestaurant.save({

        success:function(){
         window.open("events.html");
         getPosts();
         $(".load").hide();
      },

        error:function(error){
         alert(error.message);
      }

    });
     });


  } else{
             newRestaurant.save({
      success:function(){
         window.open("events.html");
         getPosts();
         $(".load").hide();
     },
      error:function(){
          alert("Something went wrong");
      }
  }); 
  }

     

});
