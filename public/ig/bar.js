 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Bar = Parse.Object.extend("Bar");

 function getPosts(){
 	var query = new Parse.Query(Bar);
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
          $("#bars").html(output);
 	},
 	error:function(error){
      alert("Unable to get bars from the server");
 	}
 });
 }

   getPosts();


$("#bar").submit(function(event){
	event.preventDefault();
	var name = $("#namebar").val();
	var location = $("#barloc").val();
	var user = Parse.User.current();

	var newBar = new Bar();
	newBar.set("name", name);
	newBar.set("location", location);
	newBar.set("user", user);

  var photobar1 = $("#photo-two")[0];
  var photobar1path = $("#photo-two").val();
  var photobar1name = photobar1path.split("\\").pop();

  if(photobar1.files.length > 0) {
    var pic1 = photobar1.files[0];
    var bar1 = new Parse.File(photobar1name, pic1);
     bar1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newBar.set("photo1", theFirstPhoto);
      newBar.save({

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
     newBar.save({
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


