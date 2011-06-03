module("xImg");

var url = 'http://ndd.com/serv?';

function mJs(sz){
  return encodeURIComponent(JSON.stringify({'ok':(new Array(sz+1)).join('a')})).substr(23);
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
  
  var data = (new Array(501)).join('a');
  equals(data.length, 500, '');
  
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
  
  var data = (new Array(501)).join('a');
  equals(data.length, 500, '');
  
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
  expect(4);
  
  var data = (new Array(501)).join('a');
  equals(data.length, 500, '');
  
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
  expect(6);
  
  var data = (new Array(501)).join('a');
  equals(data.length, 500, '');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    cbError();
  };
  
  var ximg = new xImg(url);
  
  ximg._sendPacket(data, function(){
    ok(false, "Callback on success called");
  }, function(){
    ok(true, "Callback on error called");
  });
  
  // Another _send
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){ok(true, "_send2 called");cbSuccess();};
  
  ximg.send(data, function(){
    ok(true, "On success callback called");
  }, function(){
    ok(false, "On error callback called");
  });
  
});

test('send with buffer', function(){
  expect(5);
  
  var x = (new xImg(url));
  var data = (new Array(2001)).join('a');
  
  equals(data.length, 2000, 'Data size');
  equals(x._getPacketNb(data), 3, 'Packet number');
  
  var i = 0;
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    
    ++i == 6 ? cbSuccess() : cbError();
  };
  
  x.send(data, function(){
    ok(false, "On success callback called");
  }, function(){
    ok(true, "On error callback called");
  });
  
});

/*
var callback = function(oldValue, newValue){
  ok(true, 'Callback (value changed from '+ oldValue + ' to ' + newValue + ')');
};

test('Input::value', function(){
	var $elmts = $('#qunit-fixture input')
	  , i = $elmts.length
	  , a = 0;
  
  expect(i*4);
  //Init observer
	while(i--){
	  $elmts.eq(i).AttributeObserver('value', callback, 100);
	  
	  equals(typeof($elmts.eq(i).AttributeObserver()), 'object', 'Get instance');
	}

	//Change value (the low level way)
	$elmts.each(function(id, el){
	  this.setAttribute('value','myNewValue');
	});
	
	stop();

	setTimeout(function(){
	  start();//Restart test
	  $elmts.each(function(i){
  	  var inst = $elmts.eq(i).AttributeObserver();
      ok(inst && inst.remove, 'Get instance');
      inst.remove();

      equals($elmts.eq(i).AttributeObserver(), null, 'Remove instance');
    });
    
	},300);
});

test('iFrame::src', function(){
	var $elmt = $('#myiframe')
	  , a = 0;
  
  expect(4);
  //Init observer
	$elmt.AttributeObserver('src', callback);
	var inst = $elmt.AttributeObserver();
	ok(inst && inst.remove, 'Get instance');

	//Change value (jQuery way)
	$elmt.attr('src', 'http://www.google.com/');
	
	stop();

	setTimeout(function(){
	  start();//Restart test
	  
	  var inst = $elmt.AttributeObserver();
    ok(inst && inst.remove, 'Get instance');
    inst.remove();

    equals($elmt.AttributeObserver(), null, 'Remove instance');
	},1100);
});*/