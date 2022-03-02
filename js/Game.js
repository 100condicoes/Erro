class Game {
  constructor() {}

 getState() {
   var gameStateRef= database.ref("gameState");
   gameStateRef.on("value",function(data) {
     gameState = data.val()
   })
 }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()
  }
}
