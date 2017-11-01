window.onload = function(){
  var myTab = document.getElementById("tab"); //整个div
  var myUI = myTab.getElementsByTagName("ul")[0]; //一个节点
  var myLi = myUI.getElementsByTagName("li"); //数组
  var myDiv = myTab.getElementsByTagName("div");  //数组

  for(var i=0; i<myLi.length; i++){
    myLi[i].index = i;
    myLi[i].onclick = function(){
      for(var j=0; j<myLi.length; j++){
        myLi[j].className = "off";
        myDiv[j].className = "hide";
      }
      this.className = "on";
      myDiv[this.index].className = "show"
    }
  }
}

$(document).ready(function(c) {
  $('.alert-close').on('click', function(c){
    $('.message').fadeOut('slow', function(c){
        $('.message').remove();
    });
  });	  
});

$.validator.setDefaults({
  submitHandler: function() {
    alert("提交事件!");
  }
});

$().ready(function() {
  $("#passwordChange").validate();
});



