Function.prototype.bind=Function.prototype.bind||function(d){var a=Array.prototype.splice.call(arguments,1),c=this;var b=function(){var e=a.concat(Array.prototype.splice.call(arguments,0));if(!(this instanceof b)){return c.apply(d,e)}c.apply(this,e)};b.prototype=c.prototype;return b};

if (!Array.prototype.map) {
    Array.prototype.map = function map(fun /*, thisp*/) {
        var len = +this.length;
        if (typeof fun !== "function")
          throw new TypeError();

        var res = new Array(len);
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this)
                res[i] = fun.call(thisp, this[i], i, this);
        }

        return res;
    };
}

(function(global){
  
var xImg = global.xImg = function(url){
  this.tryNb = 0;
  this.url = url;
};

xImg.prototype = {
  // taille des maximums des paramètres "strt=1&b=".length par exemple
  KEYWORD_SZ:9,
  MAX_GET:990,
  MAX_TRY:3,
  
  // Envoi une donnée via un GET sur un fichier php
  // @url doit contenir à la fin un "?"
  // @data est un objet javascript
  // @cbSuccess callback une fois l'envoi terminé
  // @cbError callback une fois l'envoi terminé
  send: function(data, cbSuccess, cbError){
    
    var json = encodeURIComponent(JSON.stringify(data))
    ,   ctx = this;
    
    if(!cbError){
      cbError = $.noop;
    }
    
    
    if(this._getPacketNb(json) > 1){ // json.length > maxRequestSz
      // Send with packet
      var packets = this._makePackets(json)
      ,   packetsLgth = packets.length;
      
      packets = packets.map(function(val, i){
        return ctx._makeUrl(val, true, i === 0, i === packetsLgth - 1);
      });
      
      this._sendPackets(packets, cbSuccess, cbError);
      
    } else {
      // Send without packet
      this._sendPacket(this._makeUrl(json), cbSuccess, cbError);
    }
  },
  
  // Get the number of packet
  _getPacketNb: function(json){
    if(!json){
      throw new Error("No json, or url specified");
    }
    
    return -~(json.length / (this.MAX_GET - this.url.length - this.KEYWORD_SZ));
  },
  
  _makePackets: function(json){
    if(!json){
      throw new Error("No json specified");
    }
    
    var packets = []
    
    // Packet number
    ,   packetsNb = this._getPacketNb(json)
    
    // Packet size
    ,   pSz = (this.MAX_GET - this.url.length - this.KEYWORD_SZ);
    
    // Split json by chunk of (this.MAX_GET - this.url.length - this.KEYWORD_SZ)
    for(var i=0; i < packetsNb; i++) { 
      packets.push(json.substr(i*pSz, pSz));
    }
    
    return packets;
  },
  
  // Create the http get url
  _makeUrl:function(encodedData, isBuffered, isStart, isStop){
    return this.url + (encodedData ? 
                    (isBuffered ? 
                      'b='+encodedData +
                      (
                        (isStart ? '&strt=1': '') +
                        (isStop ? '&stp=1' : '')
                      )
                    : 'd=' + encodedData)
                  : '');
  },
  
  _sendPackets: function(packetsArray, cbSuccess, cbError){

    function sendNext(){
      if(packetsArray.length === 0){
        cbSuccess();
        return;
      }
      
      var packet = packetsArray.shift();
      
      this._sendPacket(packet, sendNext, cbError);
    }
    
    sendNext();
  },
  
  _sendPacket: function(urlWithData, cbSuccess, cbError){
    var ctx = this;
    
    this.tryNb = 0;
    
    function trySend(){
      
      if(ctx.tryNb+1 == ctx.MAX_TRY){
        cbError("MAX_TRY reached");
        return;
      }
      
      ctx._send(urlWithData, cbSuccess, function(){
        // On error, try again until tryNb >= MAX_TRY
        ctx.tryNb++;
        trySend();
      });
    }
    
    trySend();
  },
  
  // Send with image transport. Handle try
  _send: function(urlWithData, cbSuccess, cbError){
    var i = new Image();

    // urlWithData <- encodeURIComponent(urlWithData)
    i.src = urlWithData;

    i.onload = function(){
      i.onload = null;
      cbSuccess();
    }

    i.onError = function(){
      i.onError = null;
      cbError();
    }
  }
  
};


})(window);