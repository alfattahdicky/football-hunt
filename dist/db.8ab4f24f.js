parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"s7vs":[function(require,module,exports) {
var t=idb.open("football-hunt",1,function(t){t.createObjectStore("team",{keyPath:"id"}).createIndex("name","name",{unique:!1})});function e(e){t.then(function(t){var n=t.transaction("team","readwrite"),r=n.objectStore("team");return console.log(e),r.put(e),n.complete}).then(function(){return alert("Team Berhasil Disimpan")})}function n(){return new Promise(function(e,n){t.then(function(t){return t.transaction("team","readonly").objectStore("team").getAll()}).then(function(t){e(t)}).catch(function(t){return n(t)})})}function r(e){return new Promise(function(n,r){t.then(function(t){return t.transaction("team","readonly").objectStore("team").get(e)}).then(function(t){n(t)}).catch(r(team))})}function o(e){return new Promise(function(n,r){t.then(function(t){return t.transaction("team","readwrite").objectStore("team").delete(e)}).then(function(){alert("team Deleted")})})}
},{}]},{},["s7vs"], null)
//# sourceMappingURL=/db.8ab4f24f.js.map