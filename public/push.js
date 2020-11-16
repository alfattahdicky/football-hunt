const webPush = require('web-push');

const vapidKeys = {
  "publicKey":"BFWEeFcLzP1TBS7Bf5NGJysHeZF7GKlGa-1IJO7Ob0iUns--NvPDiEpYH8RyZgNumM8dmipOMZ2WX87x8XiPhPU",
  "privateKey":"kgNyIaQBrwxr77wgHR7q972x1-pubPCqmzMKU2nMvmI"
}

webPush.setVapidDetails(
  'malto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/c44tqHutJfU:APA91bFI-c5Wr03-i9nTMnDVut0oT2UXdXgLD1_lFKBxMFU8MGiV25Bk9wTpgyYQkjg02u2oZyQS39a_gDGlkDtp-SHwYJMwneWSUh8ESl9y8IwgVz5IFslGP16CchcO5d8cby8d2S9P",
  "keys": {
    "p256dh":"BC0u0yE0S+l3OuBqlbaDAV90MurPDG9DZ3Tq/QhVdL0Xpsxo+5C9/iO/DQwRO7skRe7WqE+MN/IMjhnFN85CKrI=",
    "auth": "KKAZeRSqrmMWlNbnodZeeA=="
  }
}

const payload = 'Manchester United Menang atas Everton 3 - 1';
const options = {
  gcmAPIKey: '908658484710',
  TTL: 60
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);