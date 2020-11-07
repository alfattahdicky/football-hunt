const BASE_URL = 'https://api.football-data.org/v2';
const API_KEY = '05a36867cd4e4d8bbf37e7fb67f24339';

const LEAGUE_ID = 2021;
const ENDPOINT_COMPETITION = `${BASE_URL}/competitions/${LEAGUE_ID}/standings`;
const ENDPOINT_MATCH = `${BASE_URL}/competitions/${LEAGUE_ID}/matches?status=SCHEDULED`;
const ENDPOINT_TEAM = `${BASE_URL}/teams`;

const fetchApi = url => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": API_KEY
    }
  })
    .then(response => {
      if(response.status === 200) {
        return Promise.resolve(response);
      } else {
        console.log(`Error: ${response.status}`);
        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(response => response.json())
    .catch(err => console.log('Error', err));
    
};

// API Standing 
function getAllStandings() {
  if('caches' in window) {
    caches.match(ENDPOINT_COMPETITION).then(response => {
      if(response) {
        response.json().then(data => {
          console.log(`Competition : ${data}`);
          showStandings(data);
        })
      }
    })
    fetchApi(ENDPOINT_COMPETITION)
      .then(data => {
        showStandings(data);
      })
      .catch(err => {
        console.log(`Error ${err}`);
      })
  }
}

function showStandings(data) {
  let standings = '';
  let standingsEl = document.getElementById('homeKlasemen');
  // console.log(data);
  data.standings[0].table.forEach(function(standing) {
    standings += `
    <tr>
      <td>${standing.position}</td>
      <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" height="30px" alt="badge"/></td>
      <td>${standing.team.name}</td>
      <td>${standing.won}</td>
      <td>${standing.draw}</td>
      <td>${standing.lost}</td>
      <td>${standing.points}</td>
      <td>${standing.goalsFor}</td>
      <td>${standing.goalsAgainst}</td>
      <td>${standing.goalDifference}</td>
    </tr>
    `;
  });
  standingsEl.innerHTML = `
  <style>
    th{
      font-size: 1.2rem;
    }
    .card {
      padding-left: 24px;
      padding-right: 24px;
      margin: 30px 0;
    }
    table {
      padding: 0 0 20px;
    }
  </style>
  <div class="card">

  <table class="striped responsive-table centered">
      <thead>
          <tr>
              <th>No</th>
              <th></th>
              <th>Team Name</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>P</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
          </tr>
       </thead>
      <tbody id="standings">
          ${standings}
      </tbody>
  </table>
  
  </div
  `;
}
// API Standing ENDS


// API Match
function getMatchAll() {
  if('caches' in window) {
    caches.match(ENDPOINT_MATCH).then( response => {
      if(response) {
        response.json().then(data => {
          showDataMatch(data);
        })
      }
    })
  }
  fetchApi(ENDPOINT_MATCH)
    .then(data => {
      showDataMatch(data);
    })
    .catch(err => {
      console.log(`Error ${err}`);
    })
}

function showDataMatch(data) {
  let matchs = '';
  let matchsEl = document.getElementById('match');
  // console.log(data);
  data.matches.forEach(function(match){
    const date = new Date(Date.parse(match.utcDate));
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const optionsTime = {
      hour: '2-digit', 
      minute:'2-digit',
      hour12: true
    }
    const dateToLocalString = date.toLocaleDateString('id-ID', options);
    const timeToLocalString = date.toLocaleTimeString([],optionsTime);
    matchs += `
      <style>
        thead {
          background-color: #043249;
        }
      </style>
      <thead>
        <tr class="white-text">
          <th></th>
          <th >${dateToLocalString}</th>
          <th>Matchday ${match.matchday}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${match.homeTeam.name}</td>
          <td>VS</td>
          <td>${match.awayTeam.name}</td>
        </tr>
        <tr>
          <td>${match.score.fullTime.homeTeam || 0}</td>
          <td>${timeToLocalString}</td>
          <td>${match.score.fullTime.awayTeam || 0}</td>
        </tr>
      </tbody>
    ` 
    matchsEl.innerHTML = `
      <table class="centered">
        ${matchs}
      </table>
    `;
  })
}
// API Match END

// API Team Name
function getAllTeamName() {
  if('caches' in window) {
    caches.match(ENDPOINT_TEAM).then(response => {
      if(response) {
        response.json().then(data => {
          showingDataTeamName(data);
        })
      }
    })
  }
  fetchApi(ENDPOINT_TEAM)
    .then(data => {
      showingDataTeamName(data);
    })
    .catch(err => console.log(`Error ${err}`));
}

function showingDataTeamName(data) {
  let teamsName =  '';
  let teamsEl = document.getElementById('teams');
  // console.log(data);
  data.teams.forEach(team => {
    teamsName += `
      <div class="col s12 m4">
      <div class="card center-align">
        <div class="section">
          <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="100px" height="100px"  alt="Picture ${team.name}">
        </div>
        <div class="card-action">
          <a class="waves-effect waves-block waves-light btn btn-team" href="./team.html?id=${team.id}">${team.name}</a>
        </div>
      </div>
    </div>
    `
    teamsEl.innerHTML = teamsName;
  })
}

// Save data API TEAM
function getSavedTeam() {
  getAll().then(team => {
    console.log(team);
    let teamsName =  '';
    let teamsEl = document.getElementById('teams');
    // console.log(data);
    team.forEach(team => {
      teamsName += `
        <div class="col s12 m4">
        <div class="card center-align">
          <div class="section">
            <img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="100px" height="100px"  alt="Picture ${team.name}">
          </div>
          <div class="card-action">
            <a class="waves-effect waves-block waves-light btn btn-team" href="./team.html?id=${team.id}&saved=true">${team.name}</a>
          </div>
        </div>
      </div>
      `
      teamsEl.innerHTML = teamsName;
      console.log(team.name)
    })
  })
}


// ID Team

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');

function getAllTeamNameId() {
  return new Promise((resolve,reject) => {
    if('caches' in window) {
      caches.match(`${ENDPOINT_TEAM}/${idParam}`).then(response => {
       if(response) {
         response.json().then(data => {
           showingDataTeamNameId(data);
           resolve(data);
         })
       } 
      })
    }
    fetchApi(`${ENDPOINT_TEAM}/${idParam}`)
      .then(data => {
        showingDataTeamNameId(data);
        resolve(data);
      })
      .catch(err => console.error(`Error ${err}`));
  })
}

function showingDataTeamNameId(data) {
  let teamsHTML = '';
  let squadHTML = '';
  let teamsHTMLEl = document.getElementById('content-team');
  console.log(data);
  data.squad.forEach(squads => {
    squadHTML += `
    <tbody> 
        <td>${squads.name}</td>
        <td>${squads.position || ''}</td>
        <td>${squads.nationality}</td>
    </tbody>
    `
  })
    teamsHTML += `
    <div class="section center">
      <div class="container">
        <div class="row">
          <div class="col s12 m6">
            <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${data.name}">
          </div>
          <div class="col s12 m6 left-align">
            <h3>${data.name}</h3>
            <p>${data.name} berdiri sejak tahun ${data.founded}</p>
            <p>Venue  : ${data.venue}</p>
            <p>Phone  : ${data.phone}</p>
            <p>Email  : ${data.email}</p>
            <p>Address: ${data.address}</p>
            <p>Kunjungi Website ${data.website}</p>
          </div>
        </div>
        <table class="centered">
          <thead>
            <tr>
                <th>Name</th>
                <th>Posisi</th>
                <th>Nasional</th>
            </tr>
          </thead>
          ${squadHTML}
        </table>
      </div>
    </div>
    `
    teamsHTMLEl.innerHTML = teamsHTML;
}

// Save Data Id
function getSavedTeamById() {
  getById(idParam).then(team => {
    let teamsHTML = '';
    let squadHTML = '';
    let teamsHTMLEl = document.getElementById('content-team');
    console.log(team);
    team.forEach(squads => {
      squadHTML += `
      <tbody> 
          <td>${squads.name}</td>
          <td>${squads.position || ''}</td>
          <td>${squads.nationality}</td>
      </tbody>
      `
    })
      teamsHTML += `
      <div class="section center">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <img src="${data.crestUrl.replace(/^http:\/\//i, 'https://')}" alt="${data.name}">
            </div>
            <div class="col s12 m6 left-align">
              <h3>${data.name}</h3>
              <p>${data.name} berdiri sejak tahun ${data.founded}</p>
              <p>Venue  : ${data.venue}</p>
              <p>Phone  : ${data.phone}</p>
              <p>Email  : ${data.email}</p>
              <p>Address: ${data.address}</p>
              <p>Kunjungi Website ${data.website}</p>
            </div>
          </div>
          <table class="centered">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Posisi</th>
                  <th>Nasional</th>
              </tr>
            </thead>
            ${squadHTML}
          </table>
        </div>
      </div>
      `
      teamsHTMLEl.innerHTML = teamsHTML;
  })
}


// API TEAM NAME END


