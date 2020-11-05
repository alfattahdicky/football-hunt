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
  fetchApi(ENDPOINT_COMPETITION)
    .then(data => {
      showStandings(data);
    })
    .catch(err => {
      console.log(`Error ${err}`);
    })
}

function showStandings(data) {
  let standings = '';
  let standingsEl = document.getElementById('homeKlasemen');
  console.log(data);
  data.standings[0].table.forEach(function(standing) {
    standings += `
    <tr>
      <td>${standing.position}</td>
      <td><img src="${standing.team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="30px" alt="badge"/></td>
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
  </style>
  <div class="card" style="padding-left: 24px; padding-right: 24px; margin-top: 30px;">

  <table class="striped responsive-table">
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
  console.log(data);
  data.matches.forEach(function(match){
    const date = new Date(Date.parse(match.utcDate));
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const dateToLocalString = date.toLocaleDateString('id-ID', options);
    matchs += `
    <style>
      h6{
        border-bottom: 2px solid #043249;
        padding: 5px 0;
      }
      .match{
        display: flex;
      }
    </style>
    <div class="col s12 m6">
      <h5 class="center-align white-text">${dateToLocalString}</h5>
      <div class="card">
        <h6 class="center-align  card-title">Matchday ${match.matchday}</h6>
          <div class="container">
            <div class="row">
              <div class="match card-content">
                <p class="col s3 left-align">${match.homeTeam.name}</p>
                <p class="col s6 center-align">VS</p>
                <p class="col s3">${match.awayTeam.name}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    ` 
    matchsEl.innerHTML = matchs;
  })
}
// API Match END

// API Team Name
function getAllTeamName() {
  fetchApi(ENDPOINT_TEAM)
    .then(data => showingDataTeamName(data))
    .catch(err => console.log(`Error ${err}`));
}

function showingDataTeamName(data) {
  let teams =  '';
  let teamsEl = document.getElementById('teams');
  console.log(data);
  data.teams.forEach(team => {
    teams += `
      <div class="col s12 m4">
      <div class="card center-align">
        <div class="card-content"><img src="${team.crestUrl.replace(/^http:\/\//i, 'https://')}" width="100px" height="100px"  alt=""></div>
        <div class="card-action">
          <a class="waves-effect waves-block waves-light btn btn-team">${team.name}</a>
        </div>
      </div>
    </div>
    `
    teamsEl.innerHTML = teams;
  })
}
// API TEAM END