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
}

