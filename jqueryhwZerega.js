



// sets up the jquery to run after document is finished loading
$(document).ready(function(){
  //makes it so that there is an there is a event handler that activates
  //on click then fades the second div out
  $("#div1").click(function(){
    $("#div2").fadeOut("slow", function(){});
  })
  // $("#div3").slide()


  $("#div3").click(function(){
      $("#div2").toggle();
      console.log("firing div3")
  });


  $( "#rightbutton" ).click(function() {
     $( "#div4" ).animate({ "left": "+=50px" }, "fast" );
  });

  $( "#leftbutton" ).click(function(){
    $( "#div4" ).animate({ "left": "-=50px" }, "fast" );
  });

$( "#div9" ).click(function() {
  $( "#div9" ).animate({
    width: "60%",
    opacity: 0.1,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 2500 );
});



  $("#div10").click(function(){
    $("#div10").hide();
    console.log("div10 is hiding")
  });

  $("#div11").click(function(){
    $("div10").slideDown("slow",function(){});
    console.log("showing back div10")
  });

  $("div5").hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  })


});