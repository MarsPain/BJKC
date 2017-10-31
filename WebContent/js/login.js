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
  $("#login").validate();
});

