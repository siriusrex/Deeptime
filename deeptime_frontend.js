window.onload=function() {
   var windowHeight=window.innerHeight;
   console.log(windowHeight);
   var footerPos=windowHeight-80+"px";
   document.getElementById("footer").style.top=footerPos;
}