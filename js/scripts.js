//front end
$(document).ready(function(){
  $("#pingpongForm").submit(function(event){
    event.preventDefault();
    var num = $("#numberInput").val();
    //$("#romanNumeral").text(ifState(num));
    $("#pingpongString").text(pingpong(number));
  });
});
