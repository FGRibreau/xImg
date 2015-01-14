# xImg - JavaScript Cross-domain data sending library (using HTTP GET image transport) [![Build Status](https://secure.travis-ci.org/FGRibreau/xImg.png)](http://travis-ci.org/FGRibreau/node-ast-inlining)


## Requirements: ##
* JSON2.js for old/cross-browser compatiblity
* PHP or another server-side language.


## How to use:

* Get the library (and the JSON2 dependency):
	* `git clone git@github.com:FGRibreau/xImg.git`
	* `cd ./xImg && git submodule init && git submodule update`
* Upload `xImg.php` to your server
* Insert `xImg.js` & `json2.js` at the end of your document
* And now you can do this:

```javascript
var mySender = new xImg('http://myServerOnAnotherDomain.com/xImg.php?');
mySender.send({screen:screen, cookie:document.cookie, UA: navigator.useragent}
, function(){
	alert('It\'s done !');
}
, function(){
	alert('Oups something went wrong :s');
});
```


## TODO ##
* Add packets tagging. For now you can't send multiple message at the same time (... I don't take the time to dev this feature)

```javascript
var x1 = new xImg('http://myserver.com/xImg.php?');

// This will not work !
x1.send({h:'llo', w:'orld'}, function(){alert('Message 1 sent !');});
x1.send({h:'llo', w:' the orld'}, function(){alert('Message 2 sent !');});

// Neither this:
(new xImg('http://myserver.com/xImg.php?')).send({h:'llo', w:'orld'}, function(){alert('Message 1 sent !');});
(new xImg('http://myserver.com/xImg.php?')).send({h:'llo', w:' the orld'}, function(){alert('Message 2 sent !');});

// For now, you have to do this:
x1.send({h:'llo', w:'orld'}, function(){
	alert('Message 1 sent !');

	// Then send the next message
	x1.send({h:'llo', w:' the orld'}, function(){alert('Message 2 sent !');});
});

// Or a more robust way
var sendMsg2 = function(){
	x1.send({h:'llo', w:' the orld'}, function(){alert('Message 2 sent !');});
};

x1.send({h:'llo', w:'orld'}, function(){
	alert('Message 1 sent !');
	sendMsg2();
}, function(){
	alert('Message 1 sending has failed');
	sendMsg2();
});
```

## Tested on: ##
* Chrome 11
* Firefox 4.0.1
* Safari 5.0.5 
* Opera 10.10
... Should work in IE (hahaha)

## Donate
[Donate Bitcoins](https://coinbase.com/checkouts/fc3041b9d8116e0b98e7d243c4727a30)
