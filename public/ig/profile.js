 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var profilepic = Parse.Object.extend("profilepic");

function getDp(){
 	var query = new Parse.Query(profilepic);
 	query.find({
 		success:function(results){
 			var output = "";
                   
             var img = "";
             if(results.get("profpic")){
             var file = results.get("profpic");
             var url = file.url();
              img = "<img style='height:400px;width:420px;border-radius:10px;'src='"+url+"'>";
                       
              output+="<div >"+img+"</div>";
            
          }
          $("#userpic").html(output);
 	},
 	error:function(error){
      var output = "";
                   
             var img = "";
             if(results.get("profpic")){
              img = "<img style='height:400px;width:420px;border-radius:10px;'src='../img/user.png'>";
                       
              output+="<div >"+img+"</div>";
            
          }
          $("#userpic").html(output);
 	}
 });
 }

   getDp();





$("#ppic").submit(function(event){
	event.preventDefault();
	var User = Parse.User.current();

	var newDp = new profilepic();
	newDp.set("user", user);


var prof = $("#dp")[0];
  var profpath = $("#dp").val();
  var profname = profpath.split("\\").pop();

  if(prof.files.length > 0) {
    var pic1 = prof.files[0];
    var prof1 = new Parse.File(profname, pic1);
     prof1.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theFirstPhoto){
      newDp.set("profpic", theFirstPhoto);
      newDp.save({

        success:function(){
         alert("your business has been successfully created");
         window.open("events.html");
         getPosts();
         $(".loading").hide();
      },

        error:function(error){
         alert(error.message);
      }

    });
     });


  }
});