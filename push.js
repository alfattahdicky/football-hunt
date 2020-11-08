const webPush = require('web-push');

const vapidKeys = {
  "publicKey":"BAhXtqZ5UYb5KlTE6kWfDyVkMGXagldFdIAlrZRNILKUo-E7iYwbq0jdZ-hOoMbI-t_o9HNeO03_dRSirxFDA-Y",
  "privateKey":"BDcl_Dk4uJgF9XDukbh3sA4i-lHQI5WLtIYNHXMRsNE"
}

webPush.setVapidDetails(
  'malto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cBacmdko6a0:APA91bElEWq-2EiqujRMcG5IR6xkFyoZHbH9EMSRkSn0-N7wwjVW8Yw_szrx2c8YdEUNXDw2rB6ViJJFUCf1wuve2MnVsDyVmnspBfb90Uld-K6yyUw2FKgq_ciy7zTGrWDhn5edcpDI",
  "keys": {
    "p256dh":"BINVdkcPzejdpAIVE6+TI0dNKJ9PXhleOPxtF5U7nHwcYlGiIrw8yyxFmdReLbd2YT0KpPDe73pX4zXX1BnSVDE=",
    "auth": "d6sD1utLbekVIUiqTFrwkQ=="
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