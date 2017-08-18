//back end
function pingpong(num){
  var rangeCount = 0;
  var range = [];
  for(var i = 0;i < num; ++i){
    rangeCount +=1;
    range.push(rangeCount);
  };

  for(var j =0;j<range.length;++j){
    if(range[j]%3===0 && !(range[j]%5===0)){
      range[j] = "ping";
    };
    if(range[j]%5===0 && !(range[j]%3===0)){
      range[j] = "pong";
    };
    if(range[j]%5===0 && range[j]%3===0){
      range[j] = "ping-pong";
    };
  };
  return range;
};


//front end
$(document).ready(function(){
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    var number = $("#numberInput").val();
    if(number > 49){
      $("#big").show();
      alert("That's a big number! This is going to be a long list")
    };
    if(number < 10){
      $("#small").show();
      alert("That's a tiny number! You're not going to see a whole lot there")
    };
    for(var i=0;i<pingpong(number).length;++i){
      $("#pingpongString").append("<li>" + pingpong(number)[i] + "</li>");
      $("#pingpongReversed").prepend("<li>" + pingpong(number)[i] + "</li>");
    };
    $("#pingpongForm").click(function() {
    window.location.reload()
    });
  });
});
