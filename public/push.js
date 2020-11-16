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
  "endpoint": "https://fcm.googleapis.com/fcm/send/ennMrO7O6ek:APA91bGiG4c2-Hcd6LJSshq7V60q8tpeA2zmpgmVXHOfPV0LO7V7UQyCmoiQYk-4tDzbJZZmLN_pHwwjyqZJRVz5_8ioRl97waNq4JWSBuUHs17DnFAlZY6F0BhJ1Nuh3iLYQGKWgXao",
  "keys": {
    "p256dh":"BB6rGBdOi0dFxGNCBt51MbnY6QgPDQHlS1nazX7sIXT0LJKJ3dnCPQG1+5ZkCox+Ytnmh1vNeuQ2Ivcs5tnUp40=",
    "auth": "k8d/UeDWIK8JtJqFJvQW5w=="
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