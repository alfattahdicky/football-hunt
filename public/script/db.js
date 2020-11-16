const dbPromised = idb.open('football-hunt',1, upgradeDb => {
  const teamsObjectStore = upgradeDb.createObjectStore('team', {
    keyPath: 'id'
  })
  teamsObjectStore.createIndex('name','name', {unique: false})
})

function saveForLater(team) {
  dbPromised.then(db => {
    const tx = db.transaction('team', 'readwrite');
    const store = tx.objectStore('team');
    console.log(team);
    store.put(team);
    return tx.complete;
  }).then(() => {
    M.toast({html: "Team Berhasil Disimpan"});
  })
}

function getAll() {
  return new Promise((resolve, reject) => {
    dbPromised.then(db => {
      const tx = db.transaction('team', 'readonly');
      const store = tx.objectStore('team');
      return store.getAll();
    }).then(team => {
      resolve(team);
    }).catch(team => reject(team))
  })
}

function getById(id) {
  return new Promise((resolve,reject) => {
    dbPromised.then(db => {
      const tx = db.transaction('team', 'readonly');
      const store = tx.objectStore('team');
      return store.get(id);
    }).then(team => {
      resolve(team);
    }).catch(reject(team))
  })
}

function deleteTeam(id) {
  return new Promise((resolve,reject) => {
    dbPromised.then(db => {
      const tx = db.transaction('team', 'readwrite');
      const store = tx.objectStore('team');
      return store.delete(id);
    }).then(() => {
      M.toast({html: "Team telah dihapus dari Saved"});
    })
  })
}