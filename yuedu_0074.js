
class Yuedu0074 extends ComicSource {
    name = "SVIP\u6f2b\u753b"
    key = "yuedu_0074"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/yuedu_0074.js"

    baseUrl = "https://m.svipmh.com"
    searchUrl = "https://m.svipmh.com"

    searchItemSelector = ".book-list li, .novel-list li, .list li, li"
    searchNameSelector = "a, .name, .title, h3"
    searchNameAttr = "text"
    searchAuthorSelector = ".author, .writer"
    searchAuthorAttr = "text"
    searchCoverSelector = "img"
    searchCoverAttr = "src"
    searchLinkSelector = "a"
    searchLinkAttr = "href"
    searchLastSelector = ".last, .chapter"
    searchLastAttr = "text"

    detailNameSelector = "h1, .title, .bookname, .book-title"
    detailNameAttr = "text"
    detailAuthorSelector = ".author, .writer"
    detailAuthorAttr = "text"
    detailCoverSelector = "img"
    detailCoverAttr = "src"
    detailIntroSelector = ".intro, .description, .book-intro, .desc, p"
    detailIntroAttr = "text"
    chapterItemSelector = ".chapter-list a, .chapter a, .list a, a"
    chapterNameSelector = ":root"
    chapterNameAttr = "text"
    chapterLinkSelector = ":root"
    chapterLinkAttr = "href"

    contentSelector = "{'content': ' js:\\neval(result.match(/(var\\\\s*loadConf[\\\\s\\\\S]+?)<\\\\/script>/)[1]);\\n\\n_0x11cae0=loadConf;\\n\\n\\n/*\\nCryptoJS v3.1.2\\ncode.google.com/p/crypto-js\\n(c) 2009-2013 by Jeff Mott. All rights reserved.\\ncode.google.com/p/crypto-js/wiki/License\\n*/\\nvar CryptoJS=CryptoJS, function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty(\"init\"), (c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty(\"toString\")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},\\nr=l.WordArray=t.extend({init:function(a,c){a=this.words=a, [];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a, v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<\\n32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join(\"\")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,\\n2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join(\"\")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error(\"Malformed UTF-8 data\");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},\\nq=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){\"string\"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);\\na._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,\\ne)).finalize(b)}}});var n=d.algo={};return d}(Math);\\n(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join(\"\")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<\\nl;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\"}})();\\n(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},\\n_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),\\nf=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,\\nm,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,\\nE,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/\\n4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);\\n(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,\\nl)}})();\\nCryptoJS.lib.Cipher, function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},\\nfinalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return(\"string\"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return(\"string\"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=\\nc[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,\\ne,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,\\nthis,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a, this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,\\n1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},\\ndecrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return\"string\"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d, (d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,\\nb.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();\\n(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,\\n16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d, 4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>\\n8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=\\nd[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();\\n\\n\\n\\n//https://cdn.jsdelivr.net/gh/globalcdn/hxcms/common/utils/pic/a200930.js\\n      var _0x415f6a = CryptoJS[\"enc\"][\"Utf8\"][\"parse\"](_0x11cae0[\"k\"]);\\n      var _0x21f89f = CryptoJS[\"AES\"][\"decrypt\"](_0x11cae0[\"i\"], _0x415f6a, {\\n        \"iv\": _0x415f6a,\\n        \"padding\": CryptoJS[\"pad\"][\"Pkcs7\"]\\n      });\\n      _0x21f89f = _0x21f89f[\"toString\"](CryptoJS[\"enc\"][\"Utf8\"]);\\n      if (_0x21f89f == \"\") {\\n        result=\"\u89e3\u5bc6\u5931\u8d25\";\\n      }\\n      imgs = _0x21f89f[\"split\"](\"|\");\\n      if (imgs[\"length\"] > 0) {\\n        s = \"\";\\n        for (var _0x479972 = 0; _0x479972 < imgs[\"length\"]; _0x479972++) {\\n          s += \"<img src=\\\\\"\" + imgs[_0x479972] + \"\\\\\">\";\\n        }\\n        result=s;\\n      }', 'imageStyle': 'FULL', 'replaceRegex': '"
    contentAttr = "text"

    headers(ref) {
        return {
            "User-Agent": "Mozilla/5.0",
            "Referer": ref || this.baseUrl
        }
    }

    absUrl(url, base) {
        if (!url) return ""
        url = String(url).trim()
        if (url.startsWith("http://") || url.startsWith("https://")) return url
        if (url.startsWith("//")) return "https:" + url
        let b = base || this.baseUrl
        if (url.startsWith("/")) return b.replace(/\/$/, "") + url
        return b.replace(/\/$/, "") + "/" + url
    }

    buildSearchUrl(keyword, page) {
        let u = this.searchUrl || this.baseUrl
        let k = encodeURIComponent(keyword)
        let p = String(page || 1)

        u = u.replace(/\{\{key\}\}/g, k)
             .replace(/\{key\}/g, k)
             .replace(/\{\{searchKey\}\}/g, k)
             .replace(/\{searchKey\}/g, k)
             .replace(/searchKey/g, k)
             .replace(/\{\{page\}\}/g, p)
             .replace(/\{page\}/g, p)
             .replace(/\{\{pageNum\}\}/g, p)
             .replace(/\{pageNum\}/g, p)
             .replace(/\{\{searchPage\}\}/g, p)
             .replace(/\{searchPage\}/g, p)
             .replace(/searchPage/g, p)

        return this.absUrl(u, this.baseUrl)
    }

    async getHtml(url, ref) {
        let res = await Network.get(url, this.headers(ref))
        if (res.status < 200 || res.status >= 400) {
            throw "HTTP " + res.status + ": " + url
        }
        return res.body
    }

    qsa(root, selector) {
        if (!selector) return []
        try {
            return Array.from(root.querySelectorAll(selector))
        } catch (e) {
            return []
        }
    }

    qs(root, selector) {
        if (!selector || selector === ":root") return root
        try {
            return root.querySelector(selector)
        } catch (e) {
            return null
        }
    }

    pick(root, selector, attr, base) {
        let el = this.qs(root, selector)
        if (!el) return ""

        if (!attr || attr === "text") return (el.text || "").trim()
        if (attr === "html") return (el.innerHtml || "").trim()

        let attrs = el.attributes || {}
        let v = attrs[attr] || ""

        if (!v && attr === "src") {
            v = attrs["data-src"] || attrs["data-original"] || attrs["data-url"] || ""
        }

        if (["href", "src", "data-src", "data-original", "data-url"].includes(attr)) {
            return this.absUrl(v, base)
        }

        return String(v || "").trim()
    }

    parseDoc(html) {
        return new HtmlDocument(html)
    }

    makeComicFromItem(item, pageUrl) {
        let title = this.pick(item, this.searchNameSelector, this.searchNameAttr, pageUrl)
        let href = this.pick(item, this.searchLinkSelector, this.searchLinkAttr, pageUrl)
        let cover = this.pick(item, this.searchCoverSelector, this.searchCoverAttr, pageUrl)
        let author = this.pick(item, this.searchAuthorSelector, this.searchAuthorAttr, pageUrl)
        let last = this.pick(item, this.searchLastSelector, this.searchLastAttr, pageUrl)

        if (!href) href = pageUrl
        if (!title) title = href

        return new Comic({
            id: this.absUrl(href, pageUrl),
            title: title,
            subTitle: [author, last].filter(x => x).join(" / "),
            cover: "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png",
            tags: [],
            description: ""
        })
    }

    search = {
        load: async (keyword, options, page) => {
            let url = this.buildSearchUrl(keyword, page || 1)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.parseDoc(html)

            let items = this.qsa(doc, this.searchItemSelector)
            if (items.length === 0) {
                items = this.qsa(doc, "li, .item, .book, .bookbox, .book-list li, .novel-list li, .list li")
            }

            let comics = []
            for (let item of items) {
                let c = this.makeComicFromItem(item, url)
                if (c.title && c.id) comics.push(c)
            }

            doc.dispose()
            return { comics: comics, maxPage: comics.length > 0 ? (page || 1) + 1 : 1 }
        },
        optionList: []
    }

    comic = {
        loadInfo: async (id) => {
            let url = this.absUrl(id, this.baseUrl)
            let html = await this.getHtml(url, this.baseUrl)
            let doc = this.parseDoc(html)

            let title = this.pick(doc, this.detailNameSelector, this.detailNameAttr, url)
            let author = this.pick(doc, this.detailAuthorSelector, this.detailAuthorAttr, url)
            let cover = this.pick(doc, this.detailCoverSelector, this.detailCoverAttr, url)
            let intro = this.pick(doc, this.detailIntroSelector, this.detailIntroAttr, url)

            if (!title) title = this.pick(doc, "h1, .title, .bookname, .book-title", "text", url)

            let chapters = {}
            let chapterItems = this.qsa(doc, this.chapterItemSelector)
            if (chapterItems.length === 0) {
                chapterItems = this.qsa(doc, ".chapter-list a, .chapter a, .list a, .volume a, .ml_list a, a")
            }

            for (let item of chapterItems) {
                let cname = this.pick(item, this.chapterNameSelector, this.chapterNameAttr, url)
                let curl = this.pick(item, this.chapterLinkSelector, this.chapterLinkAttr, url)

                if (!cname) cname = (item.text || "").trim()
                if (!curl) {
                    let attrs = item.attributes || {}
                    curl = attrs.href || ""
                }

                curl = this.absUrl(curl, url)

                if (cname && curl && !chapters[curl]) {
                    chapters[curl] = cname
                }
            }

            doc.dispose()

            return new ComicDetails({
                title: title || this.name,
                subTitle: author,
                cover: "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/placeholder.png",
                description: intro,
                tags: author ? { "浣滆€?: [author] } : {},
                chapters: chapters,
                url: url
            })
        },

        loadEp: async (comicId, epId) => {
            let url = this.absUrl(epId, comicId || this.baseUrl)
            let html = await this.getHtml(url, comicId || this.baseUrl)
            let doc = this.parseDoc(html)

            let images = []
            let texts = []

            let nodes = this.qsa(doc, this.contentSelector)
            if (nodes.length === 0) {
                nodes = this.qsa(doc, "#content, .content, .chapter-content, .read-content, .book-content, .novelcontent, article, p, img")
            }

            for (let node of nodes) {
                let val = this.pick(node, ":root", this.contentAttr, url)

                if (!val && node.localName === "img") {
                    let attrs = node.attributes || {}
                    val = attrs.src || attrs["data-src"] || attrs["data-original"] || ""
                    val = this.absUrl(val, url)
                }

                if (!val) val = (node.text || "").trim()

                if (this.looksLikeImage(val)) {
                    images.push(this.absUrl(val, url))
                } else if (val && val.length > 3) {
                    texts.push(val)
                }
            }

            if (images.length === 0) {
                let found = this.extractImageUrls(html)
                images = images.concat(found.map(x => this.absUrl(x, url)))
            }

            if (images.length > 0) {
                doc.dispose()
                return { images: images }
            }

            let text = texts.join("\n\n").replace(/\n{3,}/g, "\n\n").trim()
            if (!text) {
                text = "鏈兘瑙ｆ瀽姝ｆ枃鍐呭銆俓n\n褰撳墠绔犺妭鍦板潃锛歕n" + url
            }

            doc.dispose()
            return { images: this.textToSvgPages(text) }
        },

        onImageLoad: (url, comicId, epId) => {
            return {
                headers: this.headers(epId || comicId || this.baseUrl)
            }
        }
    }

    looksLikeImage(s) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(String(s || ""))
    }

    extractImageUrls(html) {
        let out = []
        let reg = /https?:\/\/[^"'<> ]+\.(?:jpg|jpeg|png|webp|gif)(?:\?[^"'<> ]*)?/ig
        let m
        while ((m = reg.exec(html)) !== null) {
            if (!out.includes(m[0])) out.push(m[0])
        }
        return out
    }

    textToSvgPages(text) {
        let lines = []
        let clean = String(text || "").replace(/\r/g, "").split("\n")

        for (let para of clean) {
            para = para.trim()
            if (!para) {
                lines.push("")
                continue
            }

            let max = 24
            for (let i = 0; i < para.length; i += max) {
                lines.push(para.slice(i, i + max))
            }
        }

        let pages = []
        let perPage = 28

        for (let i = 0; i < lines.length; i += perPage) {
            let part = lines.slice(i, i + perPage)
            let tspans = part.map((line, idx) => {
                let y = 70 + idx * 34
                return `<text x="40" y="${y}" font-size="26" fill="#222">${this.escapeXml(line)}</text>`
            }).join("")

            let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200">
<rect width="100%" height="100%" fill="#f7f3e8"/>
${tspans}
</svg>`

            pages.push("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg))
        }

        return pages.length ? pages : ["data:image/svg+xml;charset=utf-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200"><text x="40" y="80" font-size="28">绌哄唴瀹?/text></svg>')]
    }

    escapeXml(s) {
        return String(s || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
    }
}

