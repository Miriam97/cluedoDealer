const { twilioNumber, accountSID, authToken } = require("./constants");

function text(players) {
  for (let i = 0; i < players.length; i++) {
    /*  // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = accountSID;
    const authToken = authToken;
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body: JSON.stringify(players[i].myCards),
        from: twilioNumber,
        to: players[i].phoneNum,
      })
      .then((message) => console.log(message.sid));
      */
    console.log(players[i].name, players[i].phoneNum, players[i].myCards);
  }
}

const fs = require("fs");

function save(jsonData) {
  fs.writeFile("secretEnvelope.txt", jsonData, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = { text, save };
