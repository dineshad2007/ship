//CONTROLLER

var controller = {

processGuess: function(guess){
           console.log("Guess is: "+guess);
           var hit = model.fire(guess);  
              },
};

window.onload = init;
function init(){
console.log("A");
var btn = document.getElementsByTagName("button");
for(var i=0; i<btn.length; i++)
 {
  btn[i].onclick = handleFireButton;
 }
}

function handleFireButton(e){
var guess = e.target.id;
controller.processGuess(guess);

}
