module("xImg");

var url = 'http://ndd.com/serv?';

var oldSend = xImg.prototype._send;

function cJs(sz, l){
  return {'ok':(new Array(sz-22)).join(l || 'a')};
}

function tJs(object){
  return encodeURIComponent(JSON.stringify(object));
}

function mJs(sz){
  return tJs(cJs(sz));
}

test('url', function(){
  
  
  var encodedData = encodeURIComponent(JSON.stringify({h:'llo', w:'orl'}));
  
  var ximg = new xImg(url);
  
  equals(ximg._makeUrl(encodedData), 'http://ndd.com/serv?d=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Simple url');
  
  equals(ximg._makeUrl(encodedData, true, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&strt=1', 'Start buffer');
  equals(ximg._makeUrl(encodedData, true, true, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&strt=1', 'Start buffer');
  
  equals(ximg._makeUrl(encodedData, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');
  equals(ximg._makeUrl(encodedData, true, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');
  equals(ximg._makeUrl(encodedData, true, false, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');

  equals(ximg._makeUrl(encodedData, true, false, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&stp=1', 'Stop buffer');
});

test('get Packet Number', function(){

  var x = (new xImg(url));

  equals(x._getPacketNb(mJs(500)), 1, 500);
  equals(x._getPacketNb(mJs(990)), 2, 990);
  equals(x._getPacketNb(mJs(1500)), 2, 1500);
  equals(x._getPacketNb(mJs(3000)), 4, 3000);
  equals(x._getPacketNb(mJs(30000)), 32, 30000);
});

test('makePackets', function(){
  
  function t(size, _expected){
    var x = (new xImg(url));
    var packets = x._makePackets(mJs(size));
    equals(packets.length, _expected);
    equals(packets[0].length >= 1, true);
  }

  t(500, 1);
  t(990, 2);
  t(1500, 2);
  t(3000, 4);
});

test('send without buffer', function(){
  expect(2);
  
  var data = cJs(500);
  equals(tJs(data).length, 500, '');
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    cbSuccess();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(true, "Callback ok");
  });
  
  
});

test('send without buffer (with error handling)', function(){
  expect(4);
  
  var data = cJs(500);
  equals(tJs(data).length, 500, '');
  
  var i = 0;
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    
    !i++ ? cbError() : cbSuccess();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(true, "Callback ok");
  });
});

test('send without buffer (with error handling + MAX_TRY reached)', function(){
  expect(1 + (xImg.prototype.MAX_TRY+1));
  
  var data = cJs(500);
  equals(tJs(data).length, 500, '');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    cbError();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(false, "Callback on success called");
  }, function(){
    ok(true, "Callback on error called");
  });
});

test('sendSimple without buffer (with error handling + MAX_TRY reached)', function(){
  expect(4 + (xImg.prototype.MAX_TRY+1));
  
  var ximg = new xImg(url);
  var data = cJs(500);
  equals(tJs(data).length, 500, 'Data size');
  equals(ximg._getPacketNb(tJs(data)), 1, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    cbError();
  };
  

  ximg._sendPacket(data, function(){
    ok(false, "Callback on success called");
  }, function(){
    ok(true, "Callback on error called");
  });
  
  // Another _send
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){ok(true, "_send2 called");cbSuccess();};
  
  ximg.send(data, function(){
    ok(true, "On success callback2 called");
  }, function(){
    ok(false, "On error callback2 called");
  });
  
});

test('send with buffer (3 packets)', function(){
  expect(6);
  
  var x = (new xImg(url));
  
  
  var data = cJs(2000);
  equals(tJs(data).length, 2000, 'Data size');
  equals(x._getPacketNb(tJs(data)), 3, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called n°"+(i+1));
    
    cbSuccess();
  };
  
  x.send(data, function(){
    ok(true, "On success callback called");
  }, function(){
    ok(false, "On error callback called");
  });

});


test('send with buffer (3 packets, with error handling)', function(){
  expect(9);
  
  var x = (new xImg(url));
  var data = (new Array(2001)).join('a');
  
  equals(data.length, 2000, 'Data size');
  equals(x._getPacketNb(data), 3, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ++i;
    
    ok(true, "_send called n°"+ i +' '+ (i == 2 || i == 4 || i == 5 ? 'cbError()':''));
    
    i == 2 || i == 4 || i == 5 ? cbError() : cbSuccess();
  };
  
  x.send(data, function(){
    ok(true, "On success callback called");
  }, function(){
    ok(false, "On error callback called");
  });

});

test('_send', function(){
  
  var x = (new xImg(url));
  x._send('','');
});

/*
Real world test:

asyncTest('send with buffer with real url', 3, function(){
  
  var x = (new xImg('http://labs.local/js-xImg/xImg.php'));

  var data = cJs(2000,'d');
  equals(tJs(data).length, 2000, 'Data size');
  equals(x._getPacketNb(tJs(data)), 3, 'Packet number');
  
  xImg.prototype._send = oldSend;
  //stop();
  x.send(data, function(){
    ok(true, "On success callback called");
    start();
  }, function(){
    ok(false, "On error callback called");
    start();
  });

});
*/