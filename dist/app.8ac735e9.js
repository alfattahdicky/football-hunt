parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"AKjC":[function(require,module,exports) {
module.exports="/icon-512x512.94db7521.svg";
},{}],"VPBB":[function(require,module,exports) {
module.exports="/icon-192x192.082e2952.svg";
},{}],"Fp6P":[function(require,module,exports) {
module.exports="/icon-144x144.7cd6f4bf.png";
},{}],"Sx6z":[function(require,module,exports) {
module.exports={name:"Football Hunt",short_name:"Football Hunt",gcm_sender_id:"908658484710",description:"Berita tentang Sepak Bola Liga Inggris terupdate",start_url:"/index.html",display:"standalone",background_color:"#000",theme_color:"#000",icons:[{src:"assets/icon/icon-144x144.png",sizes:"144x144",type:"image/png",purpose:"any maskable"},{src:"assets/icon/icon-192x192.svg",sizes:"192x192",type:"image/svg",purpose:"any maskable"},{src:"assets/icon/icon-512x512.svg",sizes:"512x512",type:"image/svg",purpose:"any maskable"}]};
},{}],"oM1m":[function(require,module,exports) {
module.exports="/2.9d1f92ac.jpg";
},{}],"ZHGi":[function(require,module,exports) {
module.exports="/1.7dde9f21.jpg";
},{}],"CuER":[function(require,module,exports) {
module.exports="/3.d7d27f36.jpg";
},{}],"k48x":[function(require,module,exports) {
module.exports={1:require("./1.jpg"),2:require("./2.jpg"),3:require("./3.jpg")};
},{"./2.jpg":"oM1m","./1.jpg":"ZHGi","./3.jpg":"CuER"}],"hwLB":[function(require,module,exports) {

},{}],"gmn6":[function(require,module,exports) {
module.exports={"materialize.min":require("./materialize.min.css"),style:require("./style.css")};
},{"./materialize.min.css":"hwLB","./style.css":"hwLB"}],"DeUM":[function(require,module,exports) {
module.exports={home:require("./home.html"),match:require("./match.html"),saved:require("./saved.html")};
},{"./home.html":"S46M","./match.html":"sa6r","./saved.html":"nVge"}],"tvsj":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e,t=document.querySelectorAll(".sidenav");M.Sidenav.init(t),(e=new XMLHttpRequest).onreadystatechange=function(){if(4===this.readyState){if(200!==this.status)return;document.querySelectorAll(".topnav, .sidenav").forEach(function(t){t.innerHTML=e.responseText}),document.querySelectorAll(".sidenav a, .topnav a").forEach(function(e){e.addEventListener("click",function(e){var t=document.querySelector(".sidenav");M.Sidenav.getInstance(t).close(),a(n=e.target.getAttribute("href").substr(1))})})}},e.open("GET","nav.html",!0),e.send();var n=window.location.hash.substr(1);function a(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState){var n=document.querySelector(".body-content");if(200===this.status)if(n.innerHTML=t.responseText,"home"===e){var a=document.querySelectorAll(".slider");M.Slider.init(a,{indicators:!1,height:450}),getAllStandings(),getAllTeamName()}else"match"===e?getMatchAll():"saved"===e&&getSavedTeam();else 404===this.status?n.innerHTML="<p>Page not found.</p>":n.innerHTML="<p>Ups.. page cannot be access"}},t.open("GET","pages/".concat(e,".html"),!0),t.send()}""===n&&(n="home"),a(n)});
},{}],"cCN4":[function(require,module,exports) {
"use strict";!function(){function e(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function t(t,n,o){var r,i=new Promise(function(i,u){e(r=t[n].apply(t,o)).then(i,u)});return i.request=r,i}function n(e,t,n){n.forEach(function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})})}function o(e,n,o,r){r.forEach(function(r){r in o.prototype&&(e.prototype[r]=function(){return t(this[n],r,arguments)})})}function r(e,t,n,o){o.forEach(function(o){o in n.prototype&&(e.prototype[o]=function(){return this[t][o].apply(this[t],arguments)})})}function i(e,n,o,r){r.forEach(function(r){r in o.prototype&&(e.prototype[r]=function(){return e=this[n],(o=t(e,r,arguments)).then(function(e){if(e)return new c(e,o.request)});var e,o})})}function u(e){this._index=e}function c(e,t){this._cursor=e,this._request=t}function s(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise(function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}})}function a(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function f(e){this._db=e}n(u,"_index",["name","keyPath","multiEntry","unique"]),o(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),i(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),n(c,"_cursor",["direction","key","primaryKey","value"]),o(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,o=arguments;return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,o),e(n._request).then(function(e){if(e)return new c(e,n._request)})})})}),s.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},s.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},n(s,"_store",["name","keyPath","indexNames","autoIncrement"]),o(s,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),i(s,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),r(s,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new s(this._tx.objectStore.apply(this._tx,arguments))},n(p,"_tx",["objectStoreNames","mode"]),r(p,"_tx",IDBTransaction,["abort"]),a.prototype.createObjectStore=function(){return new s(this._db.createObjectStore.apply(this._db,arguments))},n(a,"_db",["name","version","objectStoreNames"]),r(a,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},n(f,"_db",["name","version","objectStoreNames"]),r(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(e){[s,u].forEach(function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t,n=(t=arguments,Array.prototype.slice.call(t)),o=n[n.length-1],r=this._store||this._index,i=r[e].apply(r,n.slice(0,-1));i.onsuccess=function(){o(i.result)}})})}),[u,s].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,o=[];return new Promise(function(r){n.iterateCursor(e,function(e){e?(o.push(e.value),void 0===t||o.length!=t?e.continue():r(o)):r(o)})})})});var d={open:function(e,n,o){var r=t(indexedDB,"open",[e,n]),i=r.request;return i&&(i.onupgradeneeded=function(e){o&&o(new a(i.result,e.oldVersion,i.transaction))}),r.then(function(e){return new f(e)})},delete:function(e){return t(indexedDB,"deleteDatabase",[e])}};"undefined"!=typeof module?(module.exports=d,module.exports.default=module.exports):self.idb=d}();
},{}],"s7vs":[function(require,module,exports) {
var t=idb.open("football-hunt",1,function(t){t.createObjectStore("team",{keyPath:"id"}).createIndex("name","name",{unique:!1})});function e(e){t.then(function(t){var n=t.transaction("team","readwrite"),r=n.objectStore("team");return console.log(e),r.put(e),n.complete}).then(function(){return alert("Team Berhasil Disimpan")})}function n(){return new Promise(function(e,n){t.then(function(t){return t.transaction("team","readonly").objectStore("team").getAll()}).then(function(t){e(t)}).catch(function(t){return n(t)})})}function r(e){return new Promise(function(n,r){t.then(function(t){return t.transaction("team","readonly").objectStore("team").get(e)}).then(function(t){n(t)}).catch(r(team))})}function o(e){return new Promise(function(n,r){t.then(function(t){return t.transaction("team","readwrite").objectStore("team").delete(e)}).then(function(){alert("team Deleted")})})}
},{}],"Br6p":[function(require,module,exports) {
var n="https://api.football-data.org/v2",t="05a36867cd4e4d8bbf37e7fb67f24339",c=document.querySelector(".loading"),e=2021,a="".concat(n,"/competitions/").concat(e,"/standings"),o="".concat(n,"/competitions/").concat(e,"/matches?status=SCHEDULED"),i="".concat(n,"/teams"),d=function(n){return fetch(n,{headers:{"X-Auth-Token":t}}).then(function(n){return 200===n.status?Promise.resolve(n):(console.log("Error: ".concat(n.status)),Promise.reject(new Error(n.statusText)))}).then(function(n){return n.json()}).catch(function(n){return console.log("Error",n)})};function s(){return new Promise(function(n,t){"caches"in window&&(caches.match(a).then(function(t){t&&t.json().then(function(t){r(t),n(t)})}),d(a).then(function(n){r(n)}).catch(function(n){console.log("Error ".concat(n))}))})}function r(n){var t="",c=document.getElementById("homeKlasemen");n.standings[0].table.forEach(function(n){t+="\n    <tr>\n      <td>".concat(n.position,'</td>\n      <td><img src="').concat(n.team.crestUrl.replace(/^http:\/\//i,"https://"),'" width="30px" height="30px" alt="badge"/></td>\n      <td>').concat(n.team.name,"</td>\n      <td>").concat(n.won,"</td>\n      <td>").concat(n.draw,"</td>\n      <td>").concat(n.lost,"</td>\n      <td>").concat(n.points,"</td>\n      <td>").concat(n.goalsFor,"</td>\n      <td>").concat(n.goalsAgainst,"</td>\n      <td>").concat(n.goalDifference,"</td>\n    </tr>\n    ")}),c.innerHTML='\n  <style>\n    th{\n      font-size: 1.2rem;\n    }\n    .card {\n      padding-left: 24px;\n      padding-right: 24px;\n      margin: 30px 0;\n    }\n    table {\n      padding: 0 0 20px;\n    }\n  </style>\n  <div class="card">\n\n  <table class="striped responsive-table centered">\n      <thead>\n          <tr>\n              <th>No</th>\n              <th></th>\n              <th>Team Name</th>\n              <th>W</th>\n              <th>D</th>\n              <th>L</th>\n              <th>P</th>\n              <th>GF</th>\n              <th>GA</th>\n              <th>GD</th>\n          </tr>\n        </thead>\n      <tbody id="standings">\n          '.concat(t,"\n      </tbody>\n  </table>\n  \n  </div\n  ")}function h(){"caches"in window&&caches.match(o).then(function(n){n&&n.json().then(function(n){l(n)})}),d(o).then(function(n){l(n)}).catch(function(n){console.log("Error ".concat(n))})}function l(n){var t="",c=document.getElementById("match");n.matches.forEach(function(n){var e=new Date(Date.parse(n.utcDate)),a=e.toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),o=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0});t+='\n      <style>\n        thead {\n          background-color: #043249;\n        }\n      </style>\n      <thead>\n        <tr class="white-text">\n          <th></th>\n          <th >'.concat(a,"</th>\n          <th>Matchday ").concat(n.matchday,"</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>").concat(n.homeTeam.name,"</td>\n          <td>VS</td>\n          <td>").concat(n.awayTeam.name,"</td>\n        </tr>\n        <tr>\n          <td>").concat(n.score.fullTime.homeTeam||0,"</td>\n          <td>").concat(o,"</td>\n          <td>").concat(n.score.fullTime.awayTeam||0,"</td>\n        </tr>\n      </tbody>\n    "),c.innerHTML='\n      <table class="centered">\n        '.concat(t,"\n      </table>\n    ")})}function m(){"caches"in window&&caches.match(i).then(function(n){n&&n.json().then(function(n){u(n)})}),d(i).then(function(n){u(n)}).catch(function(n){return console.log("Error ".concat(n))})}function u(n){var t="",c=document.getElementById("teams");n.teams.forEach(function(n){t+='\n      <div class="col s12 m4">\n      <div class="card center-align">\n        <div class="section">\n          <img src="'.concat(n.crestUrl.replace(/^http:\/\//i,"https://"),'" width="100px" height="100px"  alt="Picture ').concat(n.name,'">\n        </div>\n        <div class="card-action">\n          <a class="waves-effect waves-block waves-light btn btn-team" href="./team.html?id=').concat(n.id,'">').concat(n.name,"</a>\n        </div>\n      </div>\n    </div>\n    "),c.innerHTML=t})}function f(){getAll().then(function(n){var t="",c=document.getElementById("teams");n.forEach(function(n){t+='\n        <div class="col s12 m4">\n        <div class="card center-align">\n          <div class="section">\n            <img src="'.concat(n.crestUrl.replace(/^http:\/\//i,"https://"),'" width="100px" height="100px"  alt="Picture ').concat(n.name,'">\n          </div>\n          <div class="card-action">\n            <a class="waves-effect waves-block waves-light btn btn-team" href="./team.html?id=').concat(n.id,'&#saved=true">').concat(n.name,"</a>\n          </div>\n        </div>\n      </div>\n      "),c.innerHTML=t})})}var p=new URLSearchParams(window.location.search),v=p.get("id");function g(){return new Promise(function(n,t){"caches"in window&&caches.match("".concat(i,"/").concat(v)).then(function(t){t&&t.json().then(function(t){b(t),n(t)})}),d("".concat(i,"/").concat(v)).then(function(t){b(t),n(t)}).catch(function(n){return console.error("Error ".concat(n))})})}function b(n){var t="",c="",e=document.getElementById("content-team");n.squad.forEach(function(n){c+="\n    <tbody> \n        <td>".concat(n.name,"</td>\n        <td>").concat(n.position||"","</td>\n        <td>").concat(n.nationality,"</td>\n    </tbody>\n    ")}),t+='\n    <div class="section center">\n      <div class="container">\n        <div class="row">\n          <div class="col s12 m6">\n            <img src="'.concat(n.crestUrl.replace(/^http:\/\//i,"https://"),'" alt="').concat(n.name,'">\n          </div>\n          <div class="col s12 m6 left-align">\n            <h3>').concat(n.name,"</h3>\n            <p>").concat(n.name," berdiri sejak tahun ").concat(n.founded,"</p>\n            <p>Venue  : ").concat(n.venue,"</p>\n            <p>Phone  : ").concat(n.phone,"</p>\n            <p>Email  : ").concat(n.email,"</p>\n            <p>Address: ").concat(n.address,"</p>\n            <p>Kunjungi Website ").concat(n.website,'</p>\n          </div>\n        </div>\n        <table class="centered">\n          <thead>\n            <tr>\n                <th>Name</th>\n                <th>Posisi</th>\n                <th>Nasional</th>\n            </tr>\n          </thead>\n          ').concat(c,"\n        </table>\n      </div>\n    </div>\n    "),e.innerHTML=t}function w(){getById(v).then(function(n){var t="",c="",e=document.getElementById("content-team");n.forEach(function(n){c+="\n      <tbody> \n          <td>".concat(n.name,"</td>\n          <td>").concat(n.position||"","</td>\n          <td>").concat(n.nationality,"</td>\n      </tbody>\n      ")}),t+='\n      <div class="section center">\n        <div class="container">\n          <div class="row">\n            <div class="col s12 m6">\n              <img src="'.concat(n.crestUrl.replace(/^http:\/\//i,"https://"),'" alt="').concat(n.name,'">\n            </div>\n            <div class="col s12 m6 left-align">\n              <h3>').concat(n.name,"</h3>\n              <p>").concat(n.name," berdiri sejak tahun ").concat(n.founded,"</p>\n              <p>Venue  : ").concat(n.venue,"</p>\n              <p>Phone  : ").concat(n.phone,"</p>\n              <p>Email  : ").concat(n.email,"</p>\n              <p>Address: ").concat(n.address,"</p>\n              <p>Kunjungi Website ").concat(n.website,'</p>\n            </div>\n          </div>\n          <table class="centered">\n            <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Posisi</th>\n                  <th>Nasional</th>\n              </tr>\n            </thead>\n            ').concat(c,"\n          </table>\n        </div>\n      </div>\n      "),e.innerHTML=t})}
},{}],"JVpL":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("save"),t=document.getElementById("delete"),n=new URLSearchParams(window.location.search),d=n.get("saved"),a=n.get("id"),o=document.querySelectorAll(".fixed-action-btn"),c=getAllTeamNameId();M.FloatingActionButton.init(o),d?getSavedTeamById():e.addEventListener("click",function(){console.log("test"),c.then(function(e){saveForLater(e)})}),t.addEventListener("click",function(){deleteTeam(parseInt(a))})});
},{}],"sMzO":[function(require,module,exports) {
function e(){"Notification"in window&&Notification.requestPermission().then(function(e){"denied"!==e?"default"!==e?"PushManager"in window&&navigator.serviceWorker.getRegistration().then(function(e){e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n("BGGEoB87IK1d1Np4-cjWbBsvNQ4Lh8Z8mWvD9hr2FYk0FjY_hgaDa8aJhc3-q9dUbZArGe9_WyaPpXR8UJOCNDQ")}).then(function(e){}).catch(function(e){return console.log("Tidak dapat melakukan subscribe",e.message)})}):console.error("Pengguna menutup kotak dialog permintaan izin."):console.log("Fitur notifikasi tidak diizinkan")})}function n(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(n),a=new Uint8Array(i.length),r=0;r<i.length;++r)a[r]=i.charCodeAt(r);return a}"serviceWorker"in navigator?window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Pendaftaran ServiceWorker berhasil")}).catch(function(){console.log("Pendaftaran ServiceWorker gagal")}),e()}):console.log("ServiceWorker belum didukung browser ini.");
},{"E:\\Folder Dicky\\Ngoding\\Dicoding\\Tutorial\\PWA\\Submission\\Submission 2\\football\\src\\service-worker.js":[["service-worker.js","AaGI"],"service-worker.js.map","AaGI"]}],"A2T1":[function(require,module,exports) {
"use strict";require("./assets/icon/icon-512x512.svg"),require("./assets/icon/icon-192x192.svg"),require("./assets/icon/icon-144x144.png"),require("./manifest.json"),require("./assets/*.jpg"),require("./style/*.css"),require("./pages/*.html"),require("./nav.html"),require("./team.html"),require("./script/nav.js"),require("./script/idb.js"),require("./script/db.js"),require("./script/api.js"),require("./script/script.js"),require("./script/sw-register.js");
},{"./assets/icon/icon-512x512.svg":"AKjC","./assets/icon/icon-192x192.svg":"VPBB","./assets/icon/icon-144x144.png":"Fp6P","./manifest.json":"Sx6z","./assets/*.jpg":"k48x","./style/*.css":"gmn6","./pages/*.html":"DeUM","./nav.html":"GwML","./team.html":"LUgJ","./script/nav.js":"tvsj","./script/idb.js":"cCN4","./script/db.js":"s7vs","./script/api.js":"Br6p","./script/script.js":"JVpL","./script/sw-register.js":"sMzO"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"A3BY":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("html",require("A3BY"));b.register("js",require("Yi9z"));b.load([["home.5d83b159.html","S46M"],["match.9504a14f.html","sa6r"],["saved.fb008179.html","nVge"],["nav.d7008e5f.html","GwML"],["team.c2cbae40.html","LUgJ"]]).then(function(){require("A2T1");});
},{}]},{},[0], null)
//# sourceMappingURL=/app.8ac735e9.js.map