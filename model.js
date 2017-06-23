//MODEL

var model = {
boardsize:7,
numShips:3,
shipSunk:0,
shipLength:3,

ships: [
        {locations:["06", "16", "26"], hits:["", "", ""]},
        {locations:["24", "34", "44"], hits:["", "", ""]},
        {locations:["10", "11", "12"], hits:["", "", ""]}
       ],

fire: function(guess)
{
   for (var i=0; i<this.numShips; i++)
   {
     var ship = this.ships[i];
     var index = ship.locations.indexOf(guess);
     if (index>=0)
     {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("This is Hit");
        if(this.isSunk(ship))
        {
        view.displayMessage("you sank the ship");  
        this.shipSunk++;
        }
        return true;
     }
   }
  view.displayMiss(guess);
  view.displayMessage("This is MISS.. try again");
  return false;
 },

isSunk: function(ship)
{
   for(var i=0; i<this.shipLength; i++)
   {
     if(ship.hits[i] !== "hit")
     return false;
   }
   return true;
}
}      
