$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile').attr('src', e.target.result);
            };
         
                      reader.readAsDataURL(input.files[0]);
        }
    };
        $(".file-uploaddp").on('change', function(){
        readURL(this);
    });
        $(".upload-buttondp").on('click', function() {
       $(".file-uploaddp").click();
    });
});
// restaurant pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

   reader.onload = function (e) {
                $('.photox').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadx").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonx").on('click', function() {
       $(".file-uploadx").click();
    });
});

// bar pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

         reader.onload = function (e) {
                $('.photobar').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadbar").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonbar").on('click', function() {
       $(".file-uploadbar").click();
    });
});
// nightlife pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

         reader.onload = function (e) {
                $('.photolife').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadlife").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonlife").on('click', function() {
       $(".file-uploadlife").click();
    });
});
// shopping pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

         reader.onload = function (e) {
                $('.photoshop').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadshop").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonshop").on('click', function() {
       $(".file-uploadshop").click();
    });
});
// activity pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

         reader.onload = function (e) {
                $('.photoactivity').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadactivity").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonactivity").on('click', function() {
       $(".file-uploadactivity").click();
    });
});
// event pic
$(document).ready(function() {    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

         reader.onload = function (e) {
                $('.photoevent').attr('src', e.target.result);
            };
          
                      reader.readAsDataURL(input.files[0]);
        }
    };
    $(".file-uploadevent").on('change', function(){
        readURL(this);
    });
    
    $(".upload-buttonevent").on('click', function() {
       $(".file-uploadevent").click();
    });
});