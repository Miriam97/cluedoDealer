const { people, rooms, weapons, players } = require("./constants");
const { shuffleArray, select3AndRemove } = require("./setupFunctions");
const { deal } = require("./dealer");
const { text, save } = require("./distribute");

play();

function play() {
  const answers = select3AndRemove(people, rooms, weapons);
  shuffleArray(people);
  shuffleArray(rooms);
  shuffleArray(weapons);
  shuffleArray(players);
  deal(people, rooms, weapons, players);
  text(players);
  save(JSON.stringify(answers));
}
