var title_index=document.querySelector(".title_index-html");
setInterval(function(){
  title_index.innerHTML="This is title 1!";
  setTimeout(function(){
    title_index.innerHTML="This is title 2!";
  }, 1000);
}, 2000);
