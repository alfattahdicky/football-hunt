const webPush = require('web-push');

const vapidKeys = {
  "publicKey":"BGGEoB87IK1d1Np4-cjWbBsvNQ4Lh8Z8mWvD9hr2FYk0FjY_hgaDa8aJhc3-q9dUbZArGe9_WyaPpXR8UJOCNDQ",
  "privateKey":"kx3AtiuylF2ozzdjITAkh9K7J0SddLsFKuSdsg4RuaI"
}

webPush.setVapidDetails(
  'malto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cW9_UCXqa0w:APA91bH0gBxMeHSMmjghThaFq7WUkI-H48Mrb-jVmBlC7-PbKvbs3GsIVpwuWB1WZWnEtPw42AnT940_0dLU_48uca85R5NvK8U3g38H0U59qQU4pjIAX5Tsq7BPParwNAf84S-kl5S1",
  "keys": {
    "p256dh":"BPtn0DAFUdPGF1CRGjqgy1/v34iX+OnnsMfsqcYHITXPNDtFbZ8h7O/r+ObwCHuTG0YbCZU6sqEsqwpPVvIBevo=",
    "auth": "WRgtInibad7/JizyHrOrMQ=="
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