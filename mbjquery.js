



// ******** 6th SCRIPT - HIDE ALL THESE DIVS ON PAGE LOAD

$(function(){
    $('#facebooklike').hide();
    $('#shop').hide();
    $(".hidden").hide();
    $('#upload').hide();
})

// END OF THIS SCRIPT


$(function(){
    $('#signup a').live('click', function(){
        $('#upload').hide();
    })
})

// ************ SCRIPT NUMBER 1 - MAIN SEARCH BIT

$(document).ready(function() {
$('#mysearchinput').live('keyup', function()  {
$('#facebooklike').hide();
// END OF HIDING INSTRUCTIONS

var mysearchinput=$(this).val();
if(mysearchinput.length>1) {
var dataString="thispage=1&" + "keyword=" + mysearchinput;
$.ajax({
type: "GET",
url: "ajax-search3.php",
data: dataString,
success: function(sayhello){
$('#ajaxLoadedContent').html(sayhello).show();
var url=("#ajax-search3.php?thispage=1&keyword=" + mysearchinput);
hash=url.replace(/^.*#/, '');
jQuery.history.load(hash);
}
});
}
})
})


$(function(){
   $( "#mysearchinput" ).val( function( index, val ) {
    return val = "search:   destination | attraction | accomodation | restaurant | car rental | travel firm";
});
})



$(function(){
 $.history.init(function(hash){
        if(hash == "") {
            jQuery.history.load(hash);
            // initialize your app
	    	    $('#ajaxLoadedContent').empty();
        } else if (hash== "addguide.php?part=2") {
        $('#upload').show();
        } else {
	    $('#ajaxLoadedContent').load(hash);
    
            // restore the state from hash
        }
    },
    { unescape: ",/" });
});





//$(function(){
//  getState= window.location.hash;
//  getState=(getState).replace('#', '');
//if ((getState)=="") {
//     } else {
 //   $('#ajaxLoadedContent').load(getState);
//  }
// })



// ********** 5th SCRIPT - THIS IS THE FUNCTION TO DISPLAY LOGIN FORM

$(function(){
    $('.loginshow').live('click', function(event){
        event.preventDefault();
        $('#login').fadeIn();
        $('#loginresult').empty();
        $.address.parameter("page", $(this).attr("href"));
    })  
})

////////// END OF THIS SCRIPT





// ******** 7th SCRIPT - THIS IS TO TAKE AWAY THE WATERMARK IMPRESSION

$(function(){
    $("input").click(function(){
        $(this).val("");
        $(this).css("color","navy");
    })
})

// END OF THIS SCRIPT

// MY OWN FORM VALIDATOR

$(function(){
    $('.password1').live('click', function(){
      var password2=$(this).val();
      if(password2.length==8) {
$('.password2image').append("<img src='images/Greentick.png' />");
}
      })
})


// REGISTRATION FORM
$(function(){
  $('#register').live('submit', function(event) {
  event.preventDefault();
   $.ajax({  
       type: "POST",  
        url: "register.php",  
        data: $(this).serialize(),  
      dataType: "json",
 success: function(msg){
    $('#register').hide();
    $('#registrationresults').html(msg.message);
 },
 error: function(msg){
    $('#register').hide();
   $('#registrationresults').append("Sorry, your password and confirmed password field do not match. Please try again.");
 }
   });
 });
 })



// TEST

$(function(){
 $('.anothertester').live('click', function(event){
   event.preventDefault();
      var toLoad=$(this).attr('href');
        $('#newresults').load(toLoad).fadeIn(2000);
 });
})


$(function(){
 $('.smallblue').live('click', function(event){
   event.preventDefault();
        $('#bodycontent').append('<p>hello</p>').fadeIn(2000);
        
 });
})

$(function(){
  $('#loginform').live('submit', function(event) {
  event.preventDefault();
   $.ajax({  
       type: "POST",  
        url: "userlogin.php",  
        data: $(this).serialize(),  
      dataType: "json",
 success: function(msg){
    $("#loginform").hide();
    $("#loginresults").html(msg.message);
   $("#loginresults").show();
   $("#loginresults").addClass("borderme");
  $("#loginresults").append("<img src='images/green-tick.png' class='spaceme' />");
 },
 error: function(){
   $("#loginresults").append("<p>Sorry, your username and password do not match</p>");
 }
   });
 });
 })



jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
    return this;
}




$(function(){
    $(".selectOption").click(function(){
    alert("hello");
    })
})

$(function(){
  $('#AddGuide').live('submit', function(event) {
  event.preventDefault();
  var formData=$(this).serialize();
  var postStarRating= '&starRating=' + starRating;
  var dataVar= formData + postStarRating;
   $.ajax({  
       type: "POST",  
        url: "postGuide.php",  
        data: dataVar,
      dataType: "json",
success: function(msg){
        plswork=(msg.message);
        $('#AddGuide').empty();
        $('#upload').show();
        $('#hiddenField').append("<input type='hidden' name='folder' value='" + plswork + "' />");
        url="addguide.php?part=2";
        hash=url.replace(/^.*#/, '');
        jQuery.history.load(hash);
}
   });
  })
})

$(function(){
    $('#signup').live('click', function(){
        $('#bodycontent').removeClass("bookbackground");
        $('#selectionmenu').hide();
        $('#shop').hide();
        $('#shoplogo').hide();
    })
})
  
  
$(function(){
    $('#testButton').click(function(event){
         $("#upload-form").submit();
    })
})


$(function(){
    $('#file').change(function(){
        var Filename= $('#file').val();
        var BeforeStop= Filename.indexOf('.');
        Filename3=  Filename.substr(BeforeStop);
    })
})

 $(function(){
    $("#upload-form").submit(function(){
       currentUploadFile=$('#file').val();

    });
}); 
  

