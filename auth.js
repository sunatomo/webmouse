(function() {
  var scripts = document.getElementsByTagName('script');
  for(var i=0;i<scripts.length;++i) {
    var src = scripts[i].src;
    if(src.indexOf('auth')>0) {
      var p = src.split('?')[1].split('&');
      var socket_id = '';
      var channel_name = '';
      for(var j=0;j<p.length;++j) {
        var kv = p[j].split('=');
        if(kv[0]=='socket_id') socket_id=kv[1];
        if(kv[0]=='channel_name') channel_name=kv[1];
      }
      
      new jsSHA("SHA-256", "TEXT");
      sha.setHMACKey('638ffaef0dd3ef1c90cd','TEXT');
      sha.update(socket_id+':'+channel_name);
      var auth={
        auth : sha.getHMAC('HEX');
      };
      Pusher.auth_callbacks[1](auth);
      
      break;
    }
    
  }
})()
