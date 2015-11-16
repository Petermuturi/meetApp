 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Restaurant = Parse.Object.extend("Restaurant");

 function getPosts(){
 	var query = new Parse.Query(Restaurant);
 	query.find({
 		success:function(results){
 			var output = "";
          for(var i in results){
             var name = results[i].get("name");
             var location = results[i].get("location");
             var img = "<img src='img/biz.jpg'>";
             if(results[i].get("photo1")){
             var file = results[i].get("photo1");
             var url = file.url();
              img = "<img style='height:150px;width:290px;'src='"+url+"'>";
            }
             // console.log("name: "+name);
             output+="<div class='row'>";
             output+="<div class='card col s10' style='margin:20px;'>";             
              output+="<div >"+img+"</div>";
             output+="<p>"+name+"<br/>"+"<span class='fa fa-map-marker'>"+location+"</span>"+"</p>";
             output+="</div>";
             output+="</div>";
          }
          $("#restaurants").html(output);
 	},
 	error:function(error){
      alert("Unable to get restaurants from the server");
 	}
 });
 }

   getPosts();


$("#restaurant").submit(function(event){
	event.preventDefault();
	var name = $("#namerest").val();
	var location = $("#restloc").val();
  var user = Parse.User.current();
	
	var newRestaurant = new Restaurant();
	newRestaurant.set("name", name);
	newRestaurant.set("location", location);
  newRestaurant.set("user", user);


 
  var photorest1 = $("#photo-one")[0];
  var photorest1path = $("#photo-one").val();
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
         alert("your business has been successfully created");
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
         alert("your business has been successfully created");
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
