function deal(people, rooms, weapons, players) {
  //GOAL: for each person, create an array of their items, remove those from the list and send it to them
  let totalLength = people.length + rooms.length + weapons.length;
  if (totalLength > 0) {
    let p = 0;
    let r = 0;
    let w = 0;
    let player = 0;
    while (p < people.length) {
      players[player % players.length].myCards.push(people[p]);
      p++;
      player++;
    }
    while (r < rooms.length) {
      players[player % players.length].myCards.push(rooms[r]);
      r++;
      player++;
    }
    while (w < weapons.length) {
      players[player % players.length].myCards.push(weapons[w]);
      w++;
      player++;
    }
  }
}

module.exports = { deal };
