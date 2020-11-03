const BASE_URL = 'https://api.football-data.org/v2';
const API_KEY = '05a36867cd4e4d8bbf37e7fb67f24339';

const LEAGUE_ID = 2021;
const ENDPOINT_COMPETITION = `${BASE_URL}/competitions/${LEAGUE_ID}/standings`;

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