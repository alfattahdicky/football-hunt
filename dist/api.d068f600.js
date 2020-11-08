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
})({"script/api.js":[function(require,module,exports) {
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
  setTimeout(function () {
    loading.style.display = 'none';
    standingsEl.innerHTML = "\n    <style>\n      th{\n        font-size: 1.2rem;\n      }\n      .card {\n        padding-left: 24px;\n        padding-right: 24px;\n        margin: 30px 0;\n      }\n      table {\n        padding: 0 0 20px;\n      }\n    </style>\n    <div class=\"card\">\n  \n    <table class=\"striped responsive-table centered\">\n        <thead>\n            <tr>\n                <th>No</th>\n                <th></th>\n                <th>Team Name</th>\n                <th>W</th>\n                <th>D</th>\n                <th>L</th>\n                <th>P</th>\n                <th>GF</th>\n                <th>GA</th>\n                <th>GD</th>\n            </tr>\n         </thead>\n        <tbody id=\"standings\">\n            ".concat(standings, "\n        </tbody>\n    </table>\n    \n    </div\n    ");
  }, 1000);
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
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51350" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/api.js"], null)
//# sourceMappingURL=/api.d068f600.js.map