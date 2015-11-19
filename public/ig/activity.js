 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Activities = Parse.Object.extend("Activities");

 function getPosts(){
 	var query = new Parse.Query(Activities);
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
              img = "<img style='height:150px;width:290px;margin-left:-8px;'src='"+url+"'>";
            }
             // console.log("name: "+name);
             output+="<div class='row'>";
             output+="<div class='card col s9' style='margin:30px;'>";             
              output+="<div >"+img+"</div>";
             output+="<p class='mm'>"+name+"<br/>"+"<span class='mn fa fa-map-marker'>"+location+"</span>"+"</p>";
             output+="<div class='rating'>";
             output+="<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";
             output+="</div>";
             output+="</div>";
             output+="</div>";
          }
          $("#activities").html(output);
 	},
 	error:function(error){
      alert("Unable to get activities from the server");
 	}
 });
 }

   getPosts();


$("#activity").submit(function(event){
	event.preventDefault();
	var name = $("#nameactiv").val();
	var location = $("#activityloc").val();
	var user = Parse.User.current();

	var newActivity = new Activities();
	newActivity.set("name", name);
	newActivity.set("location", location);
	newActivity.set("user", user);


  var photoactivity1 = $("#photo-five")[0];
  var photoactivity1path = $("#photo-five").val();
  var photoactivity1name = photoactivity1path.split("\\").pop();

  if(photoactivity1.files.length > 0) {
    var pic1 = photoactivity1.files[0];
    var activity1 = new Parse.File(photoactivity1name, pic1);
     activity1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newActivity.set("photo1", theFirstPhoto);
      newActivity.save({

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


  }else{
 
     newActivity.save({
     	success:function(){
         alert("your business has been successfully created");
         window.open("events.html");
         getPosts();
     },
      error:function(){
          alert("Something went wrong");
      }
 });  
 }  
});

