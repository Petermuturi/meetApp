 Parse.initialize("jcvmgGCTmx98cxkatcNZ7tmsMyAUPPb0ttsIhXJM", "rFqh6vz2f16xlNindyi0xnzsRa8UPjyzCWF1xe40");

var ProfilePic = Parse.Object.extend("ProfilePic");

 function getDp(){
 	var query = new Parse.Query(ProfilePic);
 	query.find({
 		success:function(results){
 			var output = "";
          for(var i in results){
             var img = "<img src='img/biz.jpg'>";
             if(results[i].get("dp")){
             var file = results[i].get("dp");
             var url = file.url();
              img = "<img style='height:150px;width:290px;'src='"+url+"'>";
            }
              console.log("img: "+img);
             // output+="<div class='row'>";
             // output+="<div class='card col s10' style='margin:20px;'>";             
             //  output+="<div >"+img+"</div>";
             // output+="<p>"+name+"<br/>"+"<span class='fa fa-map-marker'>"+location+"</span>"+"</p>";
             // output+="</div>";
             // output+="</div>";
          }
          // $("#restaurants").html(output);
 	},
 	error:function(error){
      alert("Unable to get DP from the server");
 	}
 });
 }

   getDp();


$("#ppic").submit(function(event){
	event.preventDefault();
  var user = Parse.User.current();
	
	var newDp = new ProfilePic();
	 
  var dp = $("#dp")[0];
  var dppath = $("#dp").val();
  var dpname = dppath.split("\\").pop();

  if(dp.files.length > 0) {
    var pic = dp.files[0];
    var dpic = new Parse.File(dpname, pic1);
     dpic.save({
      success:function(){

     },
     error:function(file, error){
        alert("photo not uploaded\n" + error.message);
     }
     }).then(function(theDP){
      newDp.set("dp", theDP);
      newDp.save({

        success:function(){
         window.open("events.html");
         getDp();
         $(".load").hide();
      },

        error:function(error){
         alert(error.message);
      }

    });
     });


  }

});
