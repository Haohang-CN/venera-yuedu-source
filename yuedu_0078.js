
class Yuedu0078 extends ComicSource {
    name = "OH\u6f2b\u753b"
    key = "yuedu_0078"
    version = "1.0.0"
    minAppVersion = "1.6.0"
    url = "https://raw.githubusercontent.com/Haohang-CN/venera-yuedu-source/main/yuedu_0078.js"

    baseUrl = "https://www.ohmanhua.com"
    searchUrl = "https://www.ohmanhua.com"

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

    contentSelector = "{'content': ' js:\\n//\u6c42\u653e\u8fc7\\n//https://www.ohmanhua.com/js/l.js\\n!function(t,n){\"object\"==typeof exports?module.exports=exports=n():\"function\"==typeof define&&define.amd?define([],n):t.CryptoJS=n()}(this,function(){var t=t, function(t,n){var i=Object.create, function(){function t(){}return function(n){var i;return t.prototype=n,i=new t,t.prototype=null,i}}(),e={},r=e.lib={},o=r.Base=function(){return{extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty(\"init\")&&this.init!==n.init, (n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty(\"toString\")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=r.WordArray=o.extend({init:function(t,i){t=this.words=t, [],i!=n?this.sigBytes=i:this.sigBytes=4*t.length},toString:function(t){return(t, c).stringify(this)},concat:function(t){var n=this.words,i=t.words,e=this.sigBytes,r=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<r;o++){var s=i[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(var o=0;o<r;o+=4)n[e+o>>>2]=i[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,i=this.sigBytes;n[i>>>2]&=4294967295<<32-i%4*8,n.length=t.ceil(i/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var i,e=[],r=function(n){var n=n,i=987654321,e=4294967295;return function(){i=36969*(65535&i)+(i>>16)&e,n=18e3*(65535&n)+(n>>16)&e;var r=(i<<16)+n&e;return r/=4294967296,r+=.5,r*(t.random()>.5?1:-1)}},o=0;o<n;o+=4){var a=r(4294967296*(i, t.random()));i=987654071*a(),e.push(4294967296*a()|0)}return new s.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join(\"\")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e+=2)i[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new s.init(i,n/2)}},u=a.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push(String.fromCharCode(o))}return e.join(\"\")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e++)i[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new s.init(i,n)}},f=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error(\"Malformed UTF-8 data\")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},h=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){\"string\"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var i=this._data,e=i.words,r=i.sigBytes,o=this.blockSize,a=4*o,c=r/a;c=n?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*o,f=t.min(4*u,r);if(u){for(var h=0;h<u;h+=o)this._doProcessBlock(e,h);var p=e.splice(0,u);i.sigBytes-=f}return new s.init(p,f)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(r.Hasher=h.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new p.HMAC.init(t,i).finalize(n)}}}),e.algo={});return e}(Math);return t});!function(e,t,i){\"object\"==typeof exports?module.exports=exports=t(require(\"./core.min\"),require(\"./sha1.min\"),require(\"./hmac.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\",\"./sha1.min\",\"./hmac.min\"],t):t(e.CryptoJS)}(this,function(e){return function(){var t=e,i=t.lib,r=i.Base,n=i.WordArray,o=t.algo,a=o.MD5,c=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var i=this.cfg,r=i.hasher.create(),o=n.create(),a=o.words,c=i.keySize,f=i.iterations;a.length<c;){s&&r.update(s);var s=r.update(e).finalize(t);r.reset();for(var u=1;u<f;u++)s=r.finalize(s),r.reset();o.concat(s)}return o.sigBytes=4*c,o}});t.EvpKDF=function(e,t,i){return c.create(i).compute(e,t)}}(),e.EvpKDF});!function(r,e){\"object\"==typeof exports?module.exports=exports=e(require(\"./core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\"],e):e(r.CryptoJS)}(this,function(r){return function(){function e(r,e,t){for(var n=[],i=0,o=0;o<e;o++)if(o%4){var f=t[r.charCodeAt(o-1)]<<o%4*2,c=t[r.charCodeAt(o)]>>>6-o%4*2;n[i>>>2]|=(f|c)<<24-i%4*8,i++}return a.create(n,i)}var t=r,n=t.lib,a=n.WordArray,i=t.enc;i.Base64={stringify:function(r){var e=r.words,t=r.sigBytes,n=this._map;r.clamp();for(var a=[],i=0;i<t;i+=3)for(var o=e[i>>>2]>>>24-i%4*8&255,f=e[i+1>>>2]>>>24-(i+1)%4*8&255,c=e[i+2>>>2]>>>24-(i+2)%4*8&255,s=o<<16|f<<8|c,h=0;h<4&&i+.75*h<t;h++)a.push(n.charAt(s>>>6*(3-h)&63));var p=n.charAt(64);if(p)for(;a.length%4;)a.push(p);return a.join(\"\")},parse:function(r){var t=r.length,n=this._map,a=this._reverseMap;if(!a){a=this._reverseMap=[];for(var i=0;i<n.length;i++)a[n.charCodeAt(i)]=i}var o=n.charAt(64);if(o){var f=r.indexOf(o);f!==-1&&(t=f)}return e(r,t,a)},_map:\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\"}}(),r.enc.Base64});!function(e,t,r){\"object\"==typeof exports?module.exports=exports=t(require(\"./core.min\"),require(\"./evpkdf.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\",\"./evpkdf.min\"],t):t(e.CryptoJS)}(this,function(e){e.lib.Cipher, function(t){var r=e,i=r.lib,n=i.Base,c=i.WordArray,o=i.BufferedBlockAlgorithm,s=r.enc,a=(s.Utf8,s.Base64),f=r.algo,p=f.EvpKDF,d=i.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return\"string\"==typeof e?B:x}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()}),h=(i.StreamCipher=d.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),r.mode={}),u=i.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),l=h.CBC=function(){function e(e,r,i){var n=this._iv;if(n){var c=n;this._iv=t}else var c=this._prevBlock;for(var o=0;o<i;o++)e[r+o]^=c[o]}var r=u.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize;e.call(this,t,r,n),i.encryptBlock(t,r),this._prevBlock=t.slice(r,r+n)}}),r.Decryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,c=t.slice(r,r+n);i.decryptBlock(t,r),e.call(this,t,r,n),this._prevBlock=c}}),r}(),_=r.pad={},v=_.Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(n);var a=c.create(o,i);e.concat(a)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},y=(i.BlockCipher=d.extend({cfg:d.cfg.extend({mode:l,padding:v}),reset:function(){d.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=r.createEncryptor;else{var i=r.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==i?this._mode.init(this,t&&t.words):(this._mode=i.call(r,this,t&&t.words),this._mode.__creator=i)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),i.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e, this.formatter).stringify(this)}})),m=r.format={},k=m.OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var i=c.create([1398893684,1701076831]).concat(r).concat(t);else var i=t;return i.toString(a)},parse:function(e){var t=a.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var i=c.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:i})}},x=i.SerializableCipher=n.extend({cfg:n.extend({format:k}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),c=n.finalize(t),o=n.cfg;return y.create({ciphertext:c,key:r,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=e.createDecryptor(r,i).finalize(t.ciphertext);return n},_parse:function(e,t){return\"string\"==typeof e?t.parse(e,this):e}}),g=r.kdf={},S=g.OpenSSL={execute:function(e,t,r,i){i, (i=c.random(8));var n=p.create({keySize:t+r}).compute(e,i),o=c.create(n.words.slice(t),4*r);return n.sigBytes=4*t,y.create({key:n,iv:o,salt:i})}},B=i.PasswordBasedCipher=x.extend({cfg:x.cfg.extend({kdf:S}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=i.kdf.execute(r,e.keySize,e.ivSize);i.iv=n.iv;var c=x.encrypt.call(this,e,t,n.key,i);return c.mixIn(n),c},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);i.iv=n.iv;var c=x.decrypt.call(this,e,t,n.key,i);return c}})}()});!function(e,i){\"object\"==typeof exports?module.exports=exports=i(require(\"./core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\"],i):i(e.CryptoJS)}(this,function(e){!function(){var i=e,t=i.lib,n=t.Base,s=i.enc,r=s.Utf8,o=i.algo;o.HMAC=n.extend({init:function(e,i){e=this._hasher=new e.init,\"string\"==typeof i&&(i=r.parse(i));var t=e.blockSize,n=4*t;i.sigBytes>n&&(i=e.finalize(i)),i.clamp();for(var s=this._oKey=i.clone(),o=this._iKey=i.clone(),a=s.words,f=o.words,c=0;c<t;c++)a[c]^=1549556828,f[c]^=909522486;s.sigBytes=o.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var i=this._hasher,t=i.finalize(e);i.reset();var n=i.finalize(this._oKey.clone().concat(t));return n}})}()});!function(e,o,r){\"object\"==typeof exports?module.exports=exports=o(require(\"./core.min\"),require(\"./cipher-core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\",\"./cipher-core.min\"],o):o(e.CryptoJS)}(this,function(e){return e.mode.ECB=function(){var o=e.lib.BlockCipherMode.extend();return o.Encryptor=o.extend({processBlock:function(e,o){this._cipher.encryptBlock(e,o)}}),o.Decryptor=o.extend({processBlock:function(e,o){this._cipher.decryptBlock(e,o)}}),o}(),e.mode.ECB});!function(e,r,i){\"object\"==typeof exports?module.exports=exports=r(require(\"./core.min\"),require(\"./cipher-core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\",\"./cipher-core.min\"],r):r(e.CryptoJS)}(this,function(e){return e.pad.Pkcs7});!function(e,r,i){\"object\"==typeof exports?module.exports=exports=r(require(\"./core.min\"),require(\"./enc-base64.min\"),require(\"./md5.min\"),require(\"./evpkdf.min\"),require(\"./cipher-core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\",\"./enc-base64.min\",\"./md5.min\",\"./evpkdf.min\",\"./cipher-core.min\"],r):r(e.CryptoJS)}(this,function(e){return function(){var r=e,i=r.lib,n=i.BlockCipher,o=r.algo,t=[],c=[],s=[],f=[],a=[],d=[],u=[],v=[],h=[],y=[];!function(){for(var e=[],r=0;r<256;r++)r<128?e[r]=r<<1:e[r]=r<<1^283;for(var i=0,n=0,r=0;r<256;r++){var o=n^n<<1^n<<2^n<<3^n<<4;o=o>>>8^255&o^99,t[i]=o,c[o]=i;var p=e[i],l=e[p],_=e[l],k=257*e[o]^16843008*o;s[i]=k<<24|k>>>8,f[i]=k<<16|k>>>16,a[i]=k<<8|k>>>24,d[i]=k;var k=16843009*_^65537*l^257*p^16843008*i;u[o]=k<<24|k>>>8,v[o]=k<<16|k>>>16,h[o]=k<<8|k>>>24,y[o]=k,i?(i=p^e[e[e[_^p]]],n^=e[e[n]]):i=n=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],l=o.AES=n.extend({_doReset:function(){if(!this._nRounds, this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,i=e.sigBytes/4,n=this._nRounds=i+6,o=4*(n+1),c=this._keySchedule=[],s=0;s<o;s++)if(s<i)c[s]=r[s];else{var f=c[s-1];s%i?i>6&&s%i==4&&(f=t[f>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f]):(f=f<<8|f>>>24,f=t[f>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f],f^=p[s/i|0]<<24),c[s]=c[s-i]^f}for(var a=this._invKeySchedule=[],d=0;d<o;d++){var s=o-d;if(d%4)var f=c[s];else var f=c[s-4];d<4, s<=4?a[d]=f:a[d]=u[t[f>>>24]]^v[t[f>>>16&255]]^h[t[f>>>8&255]]^y[t[255&f]]}}},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._keySchedule,s,f,a,d,t)},decryptBlock:function(e,r){var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i,this._doCryptBlock(e,r,this._invKeySchedule,u,v,h,y,c);var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i},_doCryptBlock:function(e,r,i,n,o,t,c,s){for(var f=this._nRounds,a=e[r]^i[0],d=e[r+1]^i[1],u=e[r+2]^i[2],v=e[r+3]^i[3],h=4,y=1;y<f;y++){var p=n[a>>>24]^o[d>>>16&255]^t[u>>>8&255]^c[255&v]^i[h++],l=n[d>>>24]^o[u>>>16&255]^t[v>>>8&255]^c[255&a]^i[h++],_=n[u>>>24]^o[v>>>16&255]^t[a>>>8&255]^c[255&d]^i[h++],k=n[v>>>24]^o[a>>>16&255]^t[d>>>8&255]^c[255&u]^i[h++];a=p,d=l,u=_,v=k}var p=(s[a>>>24]<<24|s[d>>>16&255]<<16|s[u>>>8&255]<<8|s[255&v])^i[h++],l=(s[d>>>24]<<24|s[u>>>16&255]<<16|s[v>>>8&255]<<8|s[255&a])^i[h++],_=(s[u>>>24]<<24|s[v>>>16&255]<<16|s[a>>>8&255]<<8|s[255&d])^i[h++],k=(s[v>>>24]<<24|s[a>>>16&255]<<16|s[d>>>8&255]<<8|s[255&u])^i[h++];e[r]=p,e[r+1]=l,e[r+2]=_,e[r+3]=k},keySize:8});r.AES=n._createHelper(l)}(),e.AES});!function(e,n){\"object\"==typeof exports?module.exports=exports=n(require(\"./core.min\")):\"function\"==typeof define&&define.amd?define([\"./core.min\"],n):n(e.CryptoJS)}(this,function(e){return e.enc.Utf8});\\nfunction __cdecrypt(key,word){var key=CryptoJS.enc.Utf8.parse(key);var decrypt=CryptoJS.AES.decrypt(word,key,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});return CryptoJS.enc.Utf8.stringify(decrypt).toString()};\\n\\n//baseUrl\\nvar C_DATA=result.match(/C_DATA\\\\s*=\\\\s*\\\\S([\\\\s\\\\S]+?)[\\'\"]/)[1];\\n\\n//https://www.ohmanhua.com/js/custom.js\\nfunction decode(C_DATA){\\nvar DECRIPT_DATA;\\nvar __READKEY=\"fw12558899ertyui\";\\ntry{\\nDECRIPT_DATA= __cdecrypt(__READKEY,CryptoJS.enc.Base64.parse(C_DATA).toString(CryptoJS.enc.Utf8));}catch(e){\\nDECRIPT_DATA= __cdecrypt(\"JRUIFMVJDIWE569j\",CryptoJS.enc.Base64.parse(C_DATA).toString(CryptoJS.enc.Utf8));}\\nreturn eval(DECRIPT_DATA);}\\n\\ndecode(C_DATA);\\nvar urls__direct=CryptoJS.enc.Base64.parse(image_info.urls__direct).toString(CryptoJS.enc.Utf8).split(\"|SEPARATER|\");\\nvar pics_list=[];\\nvar server=\"http://image.mljzmm.com\";\\n\\nif(!image_info.img_type){\\n\\n//\\nvar path;\\nif (typeof mh_info.enc_code2 == \"undefined\") {\\n            path = mh_info.imgpath\\n        } else {\\n            var _0xfb06x7c = \"fw125gjdi9ertyui\";\\n            \\n            try {\\n                path = __cdecrypt(_0xfb06x7c, CryptoJS.enc.Base64.parse(mh_info.enc_code2).toString(CryptoJS.enc.Utf8))\\n            } catch (error) {\\n                path = __cdecrypt(\"\", CryptoJS.enc.Base64.parse(mh_info.enc_code2).toString(CryptoJS.enc.Utf8))\\n            };\\n}\\n\\n//__cr.showPic\\nif (typeof mh_info.enc_code1 == \"undefined\") {\\n    totalImageCount = mh_info.totalimg\\n} else {\\n    totalImageCount=decode(mh_info.enc_code1);\\n}\\n    \\n\\nfor(let i=parseInt(mh_info.startimg);i<= totalImageCount;i++){\\npics_list.push(server+ \"/comic/\"+ encodeURI(path)+ (\"0000\"+ i).slice(-4)+ \".jpg\");}\\n}\\n\\nelse {\\nif(image_info.img_type== 1){\\npics_list= urls__direct.map((url)=>url+ \".webp\")}   \\nelse {pics_list= urls__direct}\\n};\\n//\\nvar options={\\n\"headers\": {\"Referrer\":baseUrl,\"Cookie\":\"a=b;\"}\\n}\\n\\npics_list.map(url=>\\'<img src=\"\\'+ url+\\'\">\\').join(\"\")', 'imageStyle': 'FULL'}"
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

