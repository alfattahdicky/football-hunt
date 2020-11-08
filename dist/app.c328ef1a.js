// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/icon/icon-512x512.svg":[function(require,module,exports) {
module.exports = "/icon-512x512.113f8a6b.svg";
},{}],"assets/icon/icon-192x192.svg":[function(require,module,exports) {
module.exports = "/icon-192x192.04c8671c.svg";
},{}],"assets/icon/icon-144x144.png":[function(require,module,exports) {
module.exports = "/icon-144x144.2e9e5e3b.png";
},{}],"manifest.json":[function(require,module,exports) {
module.exports = {
  "name": "Football Hunt",
  "short_name": "Football Hunt",
  "gcm_sender_id": "908658484710",
  "description": "Berita tentang Sepak Bola Liga Inggris terupdate",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#000",
  "theme_color": "#000",
  "icons": [{
    "src": "assets/icon/icon-144x144.png",
    "sizes": "144x144",
    "type": "image/png",
    "purpose": "any maskable"
  }, {
    "src": "assets/icon/icon-192x192.svg",
    "sizes": "192x192",
    "type": "image/svg",
    "purpose": "any maskable"
  }, {
    "src": "assets/icon/icon-512x512.svg",
    "sizes": "512x512",
    "type": "image/svg",
    "purpose": "any maskable"
  }]
};
},{}],"assets/1.jpg":[function(require,module,exports) {
module.exports = "/1.281c93e8.jpg";
},{}],"assets/2.jpg":[function(require,module,exports) {
module.exports = "/2.839d3e25.jpg";
},{}],"assets/3.jpg":[function(require,module,exports) {
module.exports = "/3.fc8018a9.jpg";
},{}],"assets/*.jpg":[function(require,module,exports) {
module.exports = {
  "1": require("./1.jpg"),
  "2": require("./2.jpg"),
  "3": require("./3.jpg")
};
},{"./1.jpg":"assets/1.jpg","./2.jpg":"assets/2.jpg","./3.jpg":"assets/3.jpg"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style/materialize.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style/*.css":[function(require,module,exports) {
module.exports = {
  "materialize.min": require("./materialize.min.css"),
  "style": require("./style.css")
};
},{"./materialize.min.css":"style/materialize.min.css","./style.css":"style/style.css"}],"pages/*.html":[function(require,module,exports) {
module.exports = {
  "home": require("./home.html"),
  "match": require("./match.html"),
  "saved": require("./saved.html")
};
},{"./home.html":"pages/home.html","./match.html":"pages/match.html","./saved.html":"pages/saved.html"}],"script/nav.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelectorAll('.sidenav');
  M.Sidenav.init(navbar);
  loadNav();

  function loadNav() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status !== 200) return;
        document.querySelectorAll('.topnav, .sidenav').forEach(function (e) {
          e.innerHTML = xhttp.responseText;
        });
        document.querySelectorAll('.sidenav a, .topnav a').forEach(function (e) {
          e.addEventListener('click', function (event) {
            var sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav).close();
            page = event.target.getAttribute('href').substr(1);
            loadPage(page);
          });
        });
      }
    };

    xhttp.open('GET', 'nav.html', true);
    xhttp.send();
  }

  var page = window.location.hash.substr(1);
  if (page === '') page = 'home';
  loadPage(page);

  function loadPage(page) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        var content = document.querySelector('.body-content');

        if (this.status === 200) {
          content.innerHTML = xhttp.responseText;

          if (page === 'home') {
            var slider = document.querySelectorAll('.slider');
            M.Slider.init(slider, {
              indicators: false,
              height: 450
            });
            getAllStandings();
            getAllTeamName();
          } else if (page === 'match') {
            getMatchAll();
          } else if (page === 'saved') {
            getSavedTeam();
          } // Slider

        } else if (this.status === 404) {
          content.innerHTML = '<p>Page not found.</p>';
        } else {
          content.innerHTML = '<p>Ups.. page cannot be access';
        }
      }
    };

    xhttp.open('GET', "pages/".concat(page, ".html"), true);
    xhttp.send();
  }
});
},{}],"script/idb.js":[function(require,module,exports) {
'use strict';

(function () {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function (resolve, reject) {
      request.onsuccess = function () {
        resolve(request.result);
      };

      request.onerror = function () {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function (resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });
    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function (value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function (prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function get() {
          return this[targetProp][prop];
        },
        set: function set(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function (prop) {
      if (!(prop in Constructor.prototype)) return;

      ProxyClass.prototype[prop] = function () {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', ['name', 'keyPath', 'multiEntry', 'unique']);
  proxyRequestMethods(Index, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']);
  proxyCursorRequestMethods(Index, '_index', IDBIndex, ['openCursor', 'openKeyCursor']);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', ['direction', 'key', 'primaryKey', 'value']);
  proxyRequestMethods(Cursor, '_cursor', IDBCursor, ['update', 'delete']); // proxy 'next' methods

  ['advance', 'continue', 'continuePrimaryKey'].forEach(function (methodName) {
    if (!(methodName in IDBCursor.prototype)) return;

    Cursor.prototype[methodName] = function () {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function () {
        cursor._cursor[methodName].apply(cursor._cursor, args);

        return promisifyRequest(cursor._request).then(function (value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function () {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function () {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']);
  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']);
  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']);
  proxyMethods(ObjectStore, '_store', IDBObjectStore, ['deleteIndex']);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function (resolve, reject) {
      idbTransaction.oncomplete = function () {
        resolve();
      };

      idbTransaction.onerror = function () {
        reject(idbTransaction.error);
      };

      idbTransaction.onabort = function () {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function () {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', ['objectStoreNames', 'mode']);
  proxyMethods(Transaction, '_tx', IDBTransaction, ['abort']);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function () {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', ['name', 'version', 'objectStoreNames']);
  proxyMethods(UpgradeDB, '_db', IDBDatabase, ['deleteObjectStore', 'close']);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function () {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', ['name', 'version', 'objectStoreNames']);
  proxyMethods(DB, '_db', IDBDatabase, ['close']); // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises

  ['openCursor', 'openKeyCursor'].forEach(function (funcName) {
    [ObjectStore, Index].forEach(function (Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function () {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));

        request.onsuccess = function () {
          callback(request.result);
        };
      };
    });
  }); // polyfill getAll

  [Index, ObjectStore].forEach(function (Constructor) {
    if (Constructor.prototype.getAll) return;

    Constructor.prototype.getAll = function (query, count) {
      var instance = this;
      var items = [];
      return new Promise(function (resolve) {
        instance.iterateCursor(query, function (cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }

          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }

          cursor.continue();
        });
      });
    };
  });
  var exp = {
    open: function open(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      if (request) {
        request.onupgradeneeded = function (event) {
          if (upgradeCallback) {
            upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
          }
        };
      }

      return p.then(function (db) {
        return new DB(db);
      });
    },
    delete: function _delete(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = exp;
    module.exports.default = module.exports;
  } else {
    self.idb = exp;
  }
})();
},{}],"script/db.js":[function(require,module,exports) {
var dbPromised = idb.open('football-hunt', 1, function (upgradeDb) {
  var teamsObjectStore = upgradeDb.createObjectStore('team', {
    keyPath: 'id'
  });
  teamsObjectStore.createIndex('name', 'name', {
    unique: false
  });
});

function saveForLater(team) {
  dbPromised.then(function (db) {
    var tx = db.transaction('team', 'readwrite');
    var store = tx.objectStore('team');
    console.log(team);
    store.put(team);
    return tx.complete;
  }).then(function () {
    return alert('Team Berhasil Disimpan');
  });
}

function getAll() {
  return new Promise(function (resolve, reject) {
    dbPromised.then(function (db) {
      var tx = db.transaction('team', 'readonly');
      var store = tx.objectStore('team');
      return store.getAll();
    }).then(function (team) {
      resolve(team);
    }).catch(function (team) {
      return reject(team);
    });
  });
}

function getById(id) {
  return new Promise(function (resolve, reject) {
    dbPromised.then(function (db) {
      var tx = db.transaction('team', 'readonly');
      var store = tx.objectStore('team');
      return store.get(id);
    }).then(function (team) {
      resolve(team);
    }).catch(reject(team));
  });
}

function deleteTeam(id) {
  return new Promise(function (resolve, reject) {
    dbPromised.then(function (db) {
      var tx = db.transaction('team', 'readwrite');
      var store = tx.objectStore('team');
      return store.delete(id);
    }).then(function () {
      alert('team Deleted');
    });
  });
}
},{}],"script/api.js":[function(require,module,exports) {
var BASE_URL = 'https://api.football-data.org/v2';
var API_KEY = '05a36867cd4e4d8bbf37e7fb67f24339';
var loading = document.querySelector('.loading');
var LEAGUE_ID = 2021;
var ENDPOINT_COMPETITION = "".concat(BASE_URL, "/competitions/").concat(LEAGUE_ID, "/standings");
var ENDPOINT_MATCH = "".concat(BASE_URL, "/competitions/").concat(LEAGUE_ID, "/matches?status=SCHEDULED");
var ENDPOINT_TEAM = "".concat(BASE_URL, "/teams");

var fetchApi = function fetchApi(url) {
  return fetch(url, {
    headers: {
      "X-Auth-Token": API_KEY
    }
  }).then(function (response) {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      console.log("Error: ".concat(response.status));
      return Promise.reject(new Error(response.statusText));
    }
  }).then(function (response) {
    return response.json();
  }).catch(function (err) {
    return console.log('Error', err);
  });
}; // API Standing 


function getAllStandings() {
  return new Promise(function (resolve, reject) {
    if ('caches' in window) {
      caches.match(ENDPOINT_COMPETITION).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            // console.log(`Competition : ${data}`);
            showStandings(data);
            resolve(data);
          });
        }
      });
      fetchApi(ENDPOINT_COMPETITION).then(function (data) {
        showStandings(data);
      }).catch(function (err) {
        console.log("Error ".concat(err));
      });
    }
  });
}

function showStandings(data) {
  var standings = '';
  var standingsEl = document.getElementById('homeKlasemen'); // console.log(data);

  data.standings[0].table.forEach(function (standing) {
    standings += "\n    <tr>\n      <td>".concat(standing.position, "</td>\n      <td><img src=\"").concat(standing.team.crestUrl.replace(/^http:\/\//i, 'https://'), "\" width=\"30px\" height=\"30px\" alt=\"badge\"/></td>\n      <td>").concat(standing.team.name, "</td>\n      <td>").concat(standing.won, "</td>\n      <td>").concat(standing.draw, "</td>\n      <td>").concat(standing.lost, "</td>\n      <td>").concat(standing.points, "</td>\n      <td>").concat(standing.goalsFor, "</td>\n      <td>").concat(standing.goalsAgainst, "</td>\n      <td>").concat(standing.goalDifference, "</td>\n    </tr>\n    ");
  });
  standingsEl.innerHTML = "\n  <style>\n    th{\n      font-size: 1.2rem;\n    }\n    .card {\n      padding-left: 24px;\n      padding-right: 24px;\n      margin: 30px 0;\n    }\n    table {\n      padding: 0 0 20px;\n    }\n  </style>\n  <div class=\"card\">\n\n  <table class=\"striped responsive-table centered\">\n      <thead>\n          <tr>\n              <th>No</th>\n              <th></th>\n              <th>Team Name</th>\n              <th>W</th>\n              <th>D</th>\n              <th>L</th>\n              <th>P</th>\n              <th>GF</th>\n              <th>GA</th>\n              <th>GD</th>\n          </tr>\n        </thead>\n      <tbody id=\"standings\">\n          ".concat(standings, "\n      </tbody>\n  </table>\n  \n  </div\n  ");
} // API Standing ENDS
// API Match


function getMatchAll() {
  if ('caches' in window) {
    caches.match(ENDPOINT_MATCH).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          showDataMatch(data);
        });
      }
    });
  }

  fetchApi(ENDPOINT_MATCH).then(function (data) {
    showDataMatch(data);
  }).catch(function (err) {
    console.log("Error ".concat(err));
  });
}

function showDataMatch(data) {
  var matchs = '';
  var matchsEl = document.getElementById('match'); // console.log(data);

  data.matches.forEach(function (match) {
    var date = new Date(Date.parse(match.utcDate));
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    var optionsTime = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    var dateToLocalString = date.toLocaleDateString('id-ID', options);
    var timeToLocalString = date.toLocaleTimeString([], optionsTime);
    matchs += "\n      <style>\n        thead {\n          background-color: #043249;\n        }\n      </style>\n      <thead>\n        <tr class=\"white-text\">\n          <th></th>\n          <th >".concat(dateToLocalString, "</th>\n          <th>Matchday ").concat(match.matchday, "</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>").concat(match.homeTeam.name, "</td>\n          <td>VS</td>\n          <td>").concat(match.awayTeam.name, "</td>\n        </tr>\n        <tr>\n          <td>").concat(match.score.fullTime.homeTeam || 0, "</td>\n          <td>").concat(timeToLocalString, "</td>\n          <td>").concat(match.score.fullTime.awayTeam || 0, "</td>\n        </tr>\n      </tbody>\n    ");
    matchsEl.innerHTML = "\n      <table class=\"centered\">\n        ".concat(matchs, "\n      </table>\n    ");
  });
} // API Match END
// API Team Name


function getAllTeamName() {
  if ('caches' in window) {
    caches.match(ENDPOINT_TEAM).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          showingDataTeamName(data);
        });
      }
    });
  }

  fetchApi(ENDPOINT_TEAM).then(function (data) {
    showingDataTeamName(data);
  }).catch(function (err) {
    return console.log("Error ".concat(err));
  });
}

function showingDataTeamName(data) {
  var teamsName = '';
  var teamsEl = document.getElementById('teams'); // console.log(data);

  data.teams.forEach(function (team) {
    teamsName += "\n      <div class=\"col s12 m4\">\n      <div class=\"card center-align\">\n        <div class=\"section\">\n          <img src=\"".concat(team.crestUrl.replace(/^http:\/\//i, 'https://'), "\" width=\"100px\" height=\"100px\"  alt=\"Picture ").concat(team.name, "\">\n        </div>\n        <div class=\"card-action\">\n          <a class=\"waves-effect waves-block waves-light btn btn-team\" href=\"./team.html?id=").concat(team.id, "\">").concat(team.name, "</a>\n        </div>\n      </div>\n    </div>\n    ");
    teamsEl.innerHTML = teamsName;
  });
} // Save data API TEAM


function getSavedTeam() {
  getAll().then(function (team) {
    // console.log(team);
    var teamsName = '';
    var teamsEl = document.getElementById('teams'); // console.log(data);

    team.forEach(function (team) {
      teamsName += "\n        <div class=\"col s12 m4\">\n        <div class=\"card center-align\">\n          <div class=\"section\">\n            <img src=\"".concat(team.crestUrl.replace(/^http:\/\//i, 'https://'), "\" width=\"100px\" height=\"100px\"  alt=\"Picture ").concat(team.name, "\">\n          </div>\n          <div class=\"card-action\">\n            <a class=\"waves-effect waves-block waves-light btn btn-team\" href=\"./team.html?id=").concat(team.id, "&#saved=true\">").concat(team.name, "</a>\n          </div>\n        </div>\n      </div>\n      ");
      teamsEl.innerHTML = teamsName;
    });
  });
} // ID Team


var urlParams = new URLSearchParams(window.location.search);
var idParam = urlParams.get('id');

function getAllTeamNameId() {
  return new Promise(function (resolve, reject) {
    if ('caches' in window) {
      caches.match("".concat(ENDPOINT_TEAM, "/").concat(idParam)).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            showingDataTeamNameId(data);
            resolve(data);
          });
        }
      });
    }

    fetchApi("".concat(ENDPOINT_TEAM, "/").concat(idParam)).then(function (data) {
      showingDataTeamNameId(data);
      resolve(data);
    }).catch(function (err) {
      return console.error("Error ".concat(err));
    });
  });
}

function showingDataTeamNameId(data) {
  var teamsHTML = '';
  var squadHTML = '';
  var teamsHTMLEl = document.getElementById('content-team'); // console.log(data);

  data.squad.forEach(function (squads) {
    squadHTML += "\n    <tbody> \n        <td>".concat(squads.name, "</td>\n        <td>").concat(squads.position || '', "</td>\n        <td>").concat(squads.nationality, "</td>\n    </tbody>\n    ");
  });
  teamsHTML += "\n    <div class=\"section center\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col s12 m6\">\n            <img src=\"".concat(data.crestUrl.replace(/^http:\/\//i, 'https://'), "\" alt=\"").concat(data.name, "\">\n          </div>\n          <div class=\"col s12 m6 left-align\">\n            <h3>").concat(data.name, "</h3>\n            <p>").concat(data.name, " berdiri sejak tahun ").concat(data.founded, "</p>\n            <p>Venue  : ").concat(data.venue, "</p>\n            <p>Phone  : ").concat(data.phone, "</p>\n            <p>Email  : ").concat(data.email, "</p>\n            <p>Address: ").concat(data.address, "</p>\n            <p>Kunjungi Website ").concat(data.website, "</p>\n          </div>\n        </div>\n        <table class=\"centered\">\n          <thead>\n            <tr>\n                <th>Name</th>\n                <th>Posisi</th>\n                <th>Nasional</th>\n            </tr>\n          </thead>\n          ").concat(squadHTML, "\n        </table>\n      </div>\n    </div>\n    ");
  teamsHTMLEl.innerHTML = teamsHTML;
} // Save Data Id


function getSavedTeamById() {
  getById(idParam).then(function (team) {
    var teamsHTML = '';
    var squadHTML = '';
    var teamsHTMLEl = document.getElementById('content-team'); // console.log(team);

    team.forEach(function (squads) {
      squadHTML += "\n      <tbody> \n          <td>".concat(squads.name, "</td>\n          <td>").concat(squads.position || '', "</td>\n          <td>").concat(squads.nationality, "</td>\n      </tbody>\n      ");
    });
    teamsHTML += "\n      <div class=\"section center\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col s12 m6\">\n              <img src=\"".concat(team.crestUrl.replace(/^http:\/\//i, 'https://'), "\" alt=\"").concat(team.name, "\">\n            </div>\n            <div class=\"col s12 m6 left-align\">\n              <h3>").concat(team.name, "</h3>\n              <p>").concat(team.name, " berdiri sejak tahun ").concat(team.founded, "</p>\n              <p>Venue  : ").concat(team.venue, "</p>\n              <p>Phone  : ").concat(team.phone, "</p>\n              <p>Email  : ").concat(team.email, "</p>\n              <p>Address: ").concat(team.address, "</p>\n              <p>Kunjungi Website ").concat(team.website, "</p>\n            </div>\n          </div>\n          <table class=\"centered\">\n            <thead>\n              <tr>\n                  <th>Name</th>\n                  <th>Posisi</th>\n                  <th>Nasional</th>\n              </tr>\n            </thead>\n            ").concat(squadHTML, "\n          </table>\n        </div>\n      </div>\n      ");
    teamsHTMLEl.innerHTML = teamsHTML;
  });
} // API TEAM NAME END
},{}],"script/script.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var btnSave = document.getElementById('save');
  var btnDelete = document.getElementById('delete');
  var urlParams = new URLSearchParams(window.location.search);
  var isFromSaved = urlParams.get('saved');
  var deleteId = urlParams.get('id');
  var floatingButton = document.querySelectorAll('.fixed-action-btn');
  var item = getAllTeamNameId();
  M.FloatingActionButton.init(floatingButton);

  if (isFromSaved) {
    getSavedTeamById();
  } else {
    btnSave.addEventListener('click', function () {
      console.log('test');
      item.then(function (team) {
        saveForLater(team);
      });
    });
  }

  btnDelete.addEventListener('click', function () {
    deleteTeam(parseInt(deleteId));
  });
});
},{}],"script/sw-register.js":[function(require,module,exports) {
// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js").then(function () {
      console.log("Pendaftaran ServiceWorker berhasil");
    }).catch(function () {
      console.log("Pendaftaran ServiceWorker gagal");
    });
    requestPermission();
  });
} else {
  console.log("ServiceWorker belum didukung browser ini.");
} // Notification


function requestPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then(function (result) {
      if (result === 'denied') {
        console.log('Fitur notifikasi tidak diizinkan');
        return;
      } else if (result === "default") {
        console.error("Pengguna menutup kotak dialog permintaan izin.");
        return;
      } // navigator.serviceWorker.getRegistration().then(reg =>{
      //   reg.showNotification("Notifikasi Diizinkan");
      // })


      if ('PushManager' in window) {
        navigator.serviceWorker.getRegistration().then(function (registration) {
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            // gunakan public key
            applicationServerKey: urlBase64ToUint8Array("BGGEoB87IK1d1Np4-cjWbBsvNQ4Lh8Z8mWvD9hr2FYk0FjY_hgaDa8aJhc3-q9dUbZArGe9_WyaPpXR8UJOCNDQ")
          }).then(function (subscribe) {// console.log('Berhasil melakukan subscribe dengan endpoint', subscribe.endpoint);
            // console.log('Berhasil melakukan subscribe dengan p256dh key:', btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('p256dh')))));
            // console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey('auth')))));
          }).catch(function (e) {
            return console.log('Tidak dapat melakukan subscribe', e.message);
          });
        });
      }
    });
  }
} // Mengubah string menjadi Uint8Array


function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
},{"E:\\Folder Dicky\\Ngoding\\Dicoding\\Tutorial\\PWA\\Submission\\Submission 2\\football\\src\\service-worker.js":[["service-worker.js","service-worker.js"],"service-worker.js.map","service-worker.js"]}],"app.js":[function(require,module,exports) {
"use strict";

require("./assets/icon/icon-512x512.svg");

require("./assets/icon/icon-192x192.svg");

require("./assets/icon/icon-144x144.png");

require("./manifest.json");

require("./assets/*.jpg");

require("./style/*.css");

require("./pages/*.html");

require("./nav.html");

require("./team.html");

require("./script/nav.js");

require("./script/idb.js");

require("./script/db.js");

require("./script/api.js");

require("./script/script.js");

require("./script/sw-register.js");
},{"./assets/icon/icon-512x512.svg":"assets/icon/icon-512x512.svg","./assets/icon/icon-192x192.svg":"assets/icon/icon-192x192.svg","./assets/icon/icon-144x144.png":"assets/icon/icon-144x144.png","./manifest.json":"manifest.json","./assets/*.jpg":"assets/*.jpg","./style/*.css":"style/*.css","./pages/*.html":"pages/*.html","./nav.html":"nav.html","./team.html":"team.html","./script/nav.js":"script/nav.js","./script/idb.js":"script/idb.js","./script/db.js":"script/db.js","./script/api.js":"script/api.js","./script/script.js":"script/script.js","./script/sw-register.js":"script/sw-register.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52813" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js":[function(require,module,exports) {
module.exports = function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
};
},{}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("html",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js"));b.register("js",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([["home.23ad346c.html","pages/home.html"],["match.0c6c1483.html","pages/match.html"],["saved.5635cb7d.html","pages/saved.html"],["nav.93971121.html","nav.html"],["team.cbfe5294.html","team.html"]]).then(function(){require("app.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/app.c328ef1a.js.map