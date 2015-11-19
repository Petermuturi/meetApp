 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Events = Parse.Object.extend("Events");

 function getPosts(){
 	var query = new Parse.Query(Events);
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
             output+="<div class='card col s9' style='margin:30px;'>";             
              output+="<div >"+img+"</div>";
             output+="<p class='mm'>"+name+"<br/>"+"<span class='mn fa fa-map-marker'>"+location+"</span>"+"</p>";
             output+="<div class='rating'>";
             output+="<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";
             output+="</div>";
             output+="</div>";
             output+="</div>";
          }
          $("#events").html(output);
 	},
 	error:function(error){
      alert("Unable to get events from the server");
 	}
 });
 }

   getPosts();


$("#event").submit(function(event){
	event.preventDefault();
	var name = $("#nameevent").val();
	var location = $("#eventloc").val();
	var user = Parse.User.current();

	var newEvent = new Events();
	newEvent.set("name", name);
	newEvent.set("location", location);
	newEvent.set("user", user);


var photoevent1 = $("#photo-six")[0];
  var photoevent1path = $("#photo-six").val();
  var photoevent1name = photoevent1path.split("\\").pop();

  if(photoevent1.files.length > 0) {
    var pic1 = photoevent1.files[0];
    var event1 = new Parse.File(photoevent1name, pic1);
     event1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newEvent.set("photo1", theFirstPhoto);
      newEvent.save({

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
     newEvent.save({
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