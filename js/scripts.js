//back end
function pingpong(num){
  var rangeCount = 0;
  var range = [];
  for(var i = 0;i < num; ++i){
    rangeCount +=1;
    range.push(rangeCount);
  };

  for(var j =0;j<range.length;++j){
    if(range[j]%3===0){
      range[j] = "ping";
    };
    /*if(range[j]%5===0){
      range[j] = "pong";
    };
    if(range[j]%15===0){
      range[j] = "ping-pong";
    };*/
  };

  return range;
};


//front end
$(document).ready(function(){
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    var number = $("#numberInput").val();
    $("#pingpongString").text(pingpong(number));
  });
});
