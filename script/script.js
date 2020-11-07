document.addEventListener('DOMContentLoaded', function() {
  const btnSave = document.getElementById('save');
  const btnDelete = document.getElementById('delete');
  const urlParams = new URLSearchParams(window.location.search);
  const isFromSaved = urlParams.get('saved');
  const floatingButton = document.querySelectorAll('.fixed-action-btn');
  const item = getAllTeamNameId();
  M.FloatingActionButton.init(floatingButton);
  
  if(isFromSaved) {
    getSavedTeamById();
  } else {
    btnSave.addEventListener('click', () => {
      console.log('test');
      item.then(team => {
        saveForLater(team);
      })
    })
  }

  btnDelete.addEventListener('click', () =>{
    deleteTeamById();
  })
})
