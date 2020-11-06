const dbPromised = idb.open('football-hunt',1, upgradeDb => {
  const teamsObjectStore = upgradeDb.createObjectStore('teams', {
    keyPath: 'id'
  })
  teamsObjectStore.createIndex('name','name', { unique: false})
})

