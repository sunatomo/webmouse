
var pusher = new Pusher('9884e051e0816a0f6f59', {
  encrypted: true
});
var channel = pusher.subscribe('test_channel');
channel.bind('my_event', function(data) {
  alert(data.message);
});

window.addEventListener("load", function(){
  var iframe = document.createElement('iframe');
  iframe.src='http://sunatomo.github.io/webmouse/iframe.html';
  document.appendChild(iframe);
});
