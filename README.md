# cluedoDealer
Deals cards and texts out the cards to the players using twilio (you will need to set up an account etc). Also saves the secret envelope locally.  

There is still a fair bit of tidying up etc to do, some of this code can definitely be simplified, but this is the initial working version. 

During lockdown, my friends and I have played Cluedo remotely a couple of times. For us all to be able to play, we've had to get household members to deal the cards and then text each person their cards, and then be available to respond when final guesses are made. I decided this should be a fairly simple problem to solve programmatically. 

One of my friends created this amazing spreadsheet board: https://docs.google.com/spreadsheets/d/1bYe2gyMct3KjD0mELfOJA-IeBsBAwC_86ADLWCjVM7I/edit?usp=sharing to match the content of the game. The different coloured cells can be dragged around the board to play. 

We use: http://rolldicewithfriends.com/ to roll dice together for the game. 

# Twilio: 
- A twilio account and phone number. 
  A trial account gives you about £12 to use. 
  It costs about £0.80 to provision a twilio number and about 3p/text so should be okay for a couple of games. 
- https://www.twilio.com/console: Get Account SID and Auth Token 
- https://www.twilio.com/docs/libraries/node ```npm install twilio```

Uncomment this bit in the text() function (just commented for safety to be able to test the rest of the program without spending twilio money).

``` // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = ''; <--- put your Account SID here
    const authToken = '';  <--- Auth token here
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
         body: JSON.stringify(players[i].myCards),
         from: '+', <--- put the twilio number in here.
         to: players[i].phoneNum
       })
      .then(message => console.log(message.sid));
 ```

# Card Arrays

```const people = ['Mustard', 'Plum', 'Green', 'Peacock', 'Scarlet', 'White'];
   const rooms = ['Hall', 'Dining Room', 'Kitchen', 'Patio', 'Observatory', 'Theatre', 'Living Room', 'Spa', 'Guest House'];
   const weapons = ['Knife', 'Candlestick', 'Pistol', 'Poison', 'Trophy', 'Rope', 'Bat', 'Axe', 'Dumbbell'];
```
I built this based on my friend's version of cluedo which we were attempting to play remotely. It has some cards which differ from the classic set, you can change these to anything appropriate for your game. 

# The player array

```const players = [
  {'name': '', 'phoneNum' : '', myCards: []},
  {'name': '', 'phoneNum' : '', myCards: []},
]
```
In this array of player objects, you can add the names of the players, along with their phone numbers for the cards to be texted to. The myCards arrays will be populated by the program. 

```console.log(players[i].name, players[i].phoneNum, players[i].myCards)``` 
You can use this format to access the information for each player within the code. 

# Shuffling 

```
  shuffleArray(people);
  shuffleArray(rooms);
  shuffleArray(weapons);
  shuffleArray(players)
```
Each game, the cards and the player order are shuffled (since the first player in the list will often get more cards). The shuffleArray function is taken from [this stackoverflow answer](https://stackoverflow.com/a/12646864). 



