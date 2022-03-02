class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
getCount (){
  var playerCountRef = database.ref("playerCount");
  playerCountRef.on("value", data => {
  playerCount = data.val();
  })
}

updateCount(count){
  database.ref("/").update({
    playerCount: count
  })
}

addPlayer(){
  var playerIndex = "players/player" + this.index;

  if (this.index === 1) {
    this.positionx = width/2 -100;
  } else {
    this.positionx = width/2 +100;
    
  }

console.log("test");
database.ref("playerIndex").set({
  name: this.name,
  positionx: this.postionx,
  positiony: this.positiony
});

}















}


