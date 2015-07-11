
// Enable pusher logging - don't include this in production
var pusher = new Pusher('9884e051e0816a0f6f59', {
  encrypted: true
});
var channel = pusher.subscribe('test_channel');
channel.bind('my_event', function(data) {
  alert(data.message);
});

window.addEventListener("load", function(){
  var iframe = 
});
