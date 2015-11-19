 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var Shopping = Parse.Object.extend("Shopping");

 function getPosts(){
 	var query = new Parse.Query(Shopping);
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
          $("#shops").html(output);
 	},
 	error:function(error){
      alert("Unable to get shops from the server");
 	}
 });
 }

   getPosts();


$("#shopp").submit(function(event){
	event.preventDefault();
	var name = $("#nameshop").val();
	var location = $("#shoploc").val();
	var User = Parse.User.current();

	var newShop = new Shopping();
	newShop.set("name", name);
	newShop.set("location", location);
	newShop.set("user", user);


var photoshop1 = $("#photo-four")[0];
  var photoshop1path = $("#photo-four").val();
  var photoshop1name = photoshop1path.split("\\").pop();

  if(photoshop1.files.length > 0) {
    var pic1 = photoshop1.files[0];
    var shop1 = new Parse.File(photoshop1name, pic1);
     shop1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newShop.set("photo1", theFirstPhoto);
      newShop.save({

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
     newShop.save({
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