var title_index=document.querySelector(".title_index-html");
var titleNum = 0;
setInterval(function(){
  titleNum++;
  title_index.innerHTML=String(titleNum)+" Second!";
}, 1000);
