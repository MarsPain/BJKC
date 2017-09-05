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

  var myTab2 = document.getElementById("tab2"); //整个div
  var myUI2 = myTab2.getElementsByTagName("ul")[0]; //一个节点
  var myLi2 = myUI2.getElementsByTagName("li"); //数组
  var myDiv2 = myTab2.getElementsByTagName("div");  //数组

  for(var i=0; i<myLi2.length; i++){
    myLi2[i].index = i;
    myLi2[i].onclick = function(){
      for(var j=0; j<myLi2.length; j++){
        myLi2[j].className = "off";
        myDiv2[j].className = "hide";
      }
      this.className = "on";
      myDiv2[this.index].className = "show"
    }
  }

  (function (win){ 
    var callboarTimer; 
    var callboard = $(".scroll1"); 
    var callboardUl = callboard.find('ul'); 
    var callboardLi = callboardUl.find('li'); 
    var liLen = callboardUl.find('li').length; 
    var initHeight = callboardLi.first().outerHeight(true); 
  
    win.autoAnimation = function (){ 
      if (liLen <= 1) return; 
      var self = arguments.callee; 
      var callboardLiFirst = callboardUl.find('li').first(); 
      callboardLiFirst.animate({ 
        marginTop:-initHeight 
      }, 500, function (){ 
        clearTimeout(callboarTimer); 
        callboardLiFirst.appendTo(callboardUl).css({marginTop:5}); 
        callboarTimer = setTimeout(self, 500); 
      }); 
    } 
  
    callboard.mouseenter( 
      function (){ 
        clearTimeout(callboarTimer); 
      }).mouseleave(function (){ 
        callboarTimer = setTimeout(win.autoAnimation, 500); 
      }); 
  }(window));
  setTimeout(window.autoAnimation, 500);



}


