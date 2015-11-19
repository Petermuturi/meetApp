 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Night = Parse.Object.extend("Night");

 function getPosts(){
 	var query = new Parse.Query(Nightlife);
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
             output+="<div class='card col s9' style='margin:20px;'>";             
              output+="<div >"+img+"</div>";
             output+="<p class='mm'>"+name+"<br/>"+"<span class='mn fa fa-map-marker'>"+location+"</span>"+"</p>";
             output+="<div class='rating'>";
             output+="<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";
             output+="</div>";
             output+="</div>";
             output+="</div>";
          }
          $("#nights").html(output);
 	},
 	error:function(error){
      alert("Unable to get Nightlife from the server");
 	}
 });
 }

   getPosts();


$("#nightlfe").submit(function(event){
	event.preventDefault();
	var name = $("#namenight").val();
	var location = $("#nightloc").val();
	var User = Parse.User.current();

	var newNightlife = new Night();
	newNightlife.set("name", name);
	newNightlife.set("location", location);
	newNightlife.set("user", user);

 

 var photonight1 = $("#photo-three")[0];
  var photonight1path = $("#photo-three").val();
  var photonight1name = photonight1path.split("\\").pop();

  if(photonight1.files.length > 0) {
    var pic1 = photonight1.files[0];
    var night1 = new Parse.File(photonight1name, pic1);
     night1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newNightlife.set("photo1", theFirstPhoto);
      newNightlife.save({

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
     newNightlife.save({
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