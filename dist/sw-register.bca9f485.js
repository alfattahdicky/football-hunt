parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sMzO":[function(require,module,exports) {
function e(){"Notification"in window&&Notification.requestPermission().then(function(e){"denied"!==e?"default"!==e?"PushManager"in window&&navigator.serviceWorker.getRegistration().then(function(e){e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:n("BGGEoB87IK1d1Np4-cjWbBsvNQ4Lh8Z8mWvD9hr2FYk0FjY_hgaDa8aJhc3-q9dUbZArGe9_WyaPpXR8UJOCNDQ")}).then(function(e){}).catch(function(e){return console.log("Tidak dapat melakukan subscribe",e.message)})}):console.error("Pengguna menutup kotak dialog permintaan izin."):console.log("Fitur notifikasi tidak diizinkan")})}function n(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(n),a=new Uint8Array(i.length),r=0;r<i.length;++r)a[r]=i.charCodeAt(r);return a}"serviceWorker"in navigator?window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Pendaftaran ServiceWorker berhasil")}).catch(function(){console.log("Pendaftaran ServiceWorker gagal")}),e()}):console.log("ServiceWorker belum didukung browser ini.");
},{"E:\\Folder Dicky\\Ngoding\\Dicoding\\Tutorial\\PWA\\Submission\\Submission 2\\football\\src\\service-worker.js":[["service-worker.js","AaGI"],"service-worker.js.map","AaGI"]}]},{},["sMzO"], null)
//# sourceMappingURL=/sw-register.bca9f485.js.map