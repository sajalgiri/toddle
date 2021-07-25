function blue(x) {
  x.style.color = "#02c5cc";
}

function normal(x) {
  x.style.color = "#212529";
}

$(document).ready(function(){
  $("#del0").click(function(){
    $("#div0").remove();
  });
  $("#del1").click(function(){
    $("#div1").remove();
  });
  $("#del2").click(function(){
    $("#div2").remove();
  });
  $("#del3").click(function(){
    $("#div3").remove();
  });
  $("#del4").click(function(){
    $("#div4").remove();
  });
  $("#l0").click(function(){
    // var margin= $(".i0").css("margin-left");
    // console.log(margin);
    $("#text0").css({"margin-left":"180px"});
  });
  $("#l1").click(function(){
    // var margin= $(".i1").css("margin-left");
    // console.log(margin);
    $("#text1").css({"margin-left":"180px"});
  });
  $("#l2").click(function(){
    // var margin= $(".i2").css("margin-left");
    // console.log(margin);
    $("#text2").css({"margin-left":"180px"});
  });
  $("#l3").click(function(){
    // var margin= $(".i3").css("margin-left");
    // console.log(margin);
    $("#text3").css({"margin-left":"180px"});
  });
  $("#l4").click(function(){
    // var margin= $(".i1").css("margin-left");
    // console.log(margin);
    $("#text4").css({"margin-left":"180px"});
  });
  $("#r0").click(function(){
    // var margin= $(".i0").css("margin-left");
    // console.log(margin);
    $("#text0").css({"margin-left":"250px"});
  });
  $("#r1").click(function(){
    // var margin= $(".i1").css("margin-left");
    // console.log(margin);
    $("#text1").css({"margin-left":"250px"});
  });
  $("#r2").click(function(){
    // var margin= $(".i2").css("margin-left");
    // console.log(margin);
    $("#text2").css({"margin-left":"250px"});
  });
  $("#r3").click(function(){
    // var margin= $(".i3").css("margin-left");
    // console.log(margin);
    $("#text3").css({"margin-left":"250px"});
  });
  $("#r4").click(function(){
    // var margin= $(".i4").css("margin-left");
    // console.log(margin);
    $("#text4").css({"margin-left":"250px"});
  });
});