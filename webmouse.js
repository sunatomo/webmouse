
var webmouseid='webmouse'+(new Date())*1;
function append() {
  if(!document.getElementById(webmouseid)) {
    var iframe = document.createElement('iframe');
    iframe.src='https://sunatomo.github.io/webmouse/iframe.html';
    iframe.id=webmouseid;
    document.body.appendChild(iframe);
  }
}
window.addEventListener("load", function(){
  append();
});
append();
