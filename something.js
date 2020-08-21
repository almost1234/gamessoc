var gamesContainer = document.getElementById("gamesContent");
var gamesData = "";
function LoadGames() {
    gamesData = fetch('Book1.txt');
    console.log(gamesData);
  }
console.log("function will be executed");
LoadGames();
