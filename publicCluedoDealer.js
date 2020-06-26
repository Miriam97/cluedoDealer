const fs = require('fs');

const people = ['Mustard', 'Plum', 'Green', 'Peacock', 'Scarlet', 'White'];
const rooms = ['Hall', 'Dining Room', 'Kitchen', 'Patio', 'Observatory', 'Theatre', 'Living Room', 'Spa', 'Guest House'];
const weapons = ['Knife', 'Candlestick', 'Pistol', 'Poison', 'Trophy', 'Rope', 'Bat', 'Axe', 'Dumbbell'];

const players = [
  {'name': '', 'phoneNum' : '', myCards: []},
  {'name': '', 'phoneNum' : '', myCards: []},
]

play();

function play () {
  const answers = select3AndRemove();
  shuffleArray(people);
  shuffleArray(rooms);
  shuffleArray(weapons);
  shuffleArray(players)
  deal();
  text();
  save(JSON.stringify(answers));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function select3AndRemove() {
  const peopleIndex = Math.floor(Math.random() * people.length)
  const roomsIndex = Math.floor(Math.random() * rooms.length)
  const weaponsIndex = Math.floor(Math.random() * weapons.length)

  console.log(peopleIndex, roomsIndex, weaponsIndex)

  const cardSet = [people[peopleIndex], rooms[roomsIndex], weapons[weaponsIndex]]

  removeFromArray(people, peopleIndex);
  removeFromArray(rooms, roomsIndex);
  removeFromArray(weapons, weaponsIndex);

  return cardSet;
}

function removeFromArray(array, index)
{
  if (index > -1) {
    array.splice(index, 1);
    console.log('card chosen')
  }
  else {
    console.log('bad card chosen')
  }
}

function deal()
{
  //GOAL: for each person, create an array of their items, remove those from the list and send it to them
  let totalLength = people.length + rooms.length + weapons.length
  if(totalLength > 0)
  {
    let p = 0
    let r = 0
    let w = 0
    let player = 0;
    while(p < people.length)
    {
        players[player % players.length].myCards.push(people[p])
        p++;
        player++;
    }
    while(r < rooms.length)
    {
        players[player % players.length].myCards.push(rooms[r])
        r++;
        player++;
    }
    while(w < weapons.length)
    {
        players[player % players.length].myCards.push(weapons[w])
        w++;
        player++;
    }
  }
}

function text(){
  for(let i = 0; i < players.length; i++)
  {
  /*  // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = '';
    const authToken = '';
    const client = require('twilio')(accountSid, authToken);

    client.messages
      .create({
         body: JSON.stringify(players[i].myCards),
        // from: '+', need to provision a new twilio number next time
         to: players[i].phoneNum
       })
      .then(message => console.log(message.sid)); */

    console.log(players[i].name, players[i].phoneNum, players[i].myCards)
  }
}

function save(jsonData){
  fs.writeFile("secretEnvelope.txt", jsonData, function(err) {
      if (err) {
          console.log(err);
      }
  });
}
