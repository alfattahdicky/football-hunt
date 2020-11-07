document.addEventListener('DOMContentLoaded', function() {
  const btnSave = document.getElementById('save');
  const urlParams = new URLSearchParams(window.location.search);
  const isFromSaved = urlParams.get('saved');

  if(isFromSaved) {
    btnSave.style.display = 'none';
    getSavedTeamById();
  } else {
    const item = getAllTeamNameId();
    save.addEventListener('click', () => {
      console.log('test');
      item.then(team => {
        saveForLater(team);
      })
    })
  }
})