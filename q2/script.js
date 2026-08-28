var title_index=document.querySelector(".title_index-html");
var titleNum = 0;
title_index.innerHTML=String(titleNum)+" Seconds!";
setTimeout(function(){
  titleNum++;
  title_index.innerHTML=String(titleNum)+" Second!";
  setInterval(function(){
    titleNum++;
    title_index.innerHTML=String(titleNum)+" Seconds!";
  }, 1000);
}, 1000);
