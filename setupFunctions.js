function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function select3AndRemove(people, rooms, weapons) {
  const peopleIndex = Math.floor(Math.random() * people.length);
  const roomsIndex = Math.floor(Math.random() * rooms.length);
  const weaponsIndex = Math.floor(Math.random() * weapons.length);

  const cardSet = [
    people[peopleIndex],
    rooms[roomsIndex],
    weapons[weaponsIndex],
  ];

  removeFromArray(people, peopleIndex);
  removeFromArray(rooms, roomsIndex);
  removeFromArray(weapons, weaponsIndex);

  return cardSet;
}

function removeFromArray(array, index) {
  if (index > -1) {
    array.splice(index, 1);
  } else {
    console.log("bad card chosen");
  }
}

module.exports = { shuffleArray, select3AndRemove };
