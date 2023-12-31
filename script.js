// MODEL ////////////////////////////////////////////////////////////////////////////////
let allPokemon = [
  {
    name: "Pikachu",
    health: 45,
    image: "./Images/pikachu.png",
    level: 8,
  },
  {
    name: "Bulbasaur",
    health: 70,
    image: "./Images/bulbasaur.png",
    level: 12,
  },
  {
    name: "Oranguru",
    health: 170,
    image: "./Images/oranguru.png",
    level: 45,
  },
  {
    name: "Drowzee",
    health: 90,
    image: "./Images/drowzee.png",
    level: 33,
  },
];

let player = {
  name: "Bjarne",
  image: "./Images/pokemonTrainerIdle.png",
  pokemon: [],
}



// VIEW /////////////////////////////////////////////////////////////////////////////////
let app = document.getElementById("app");
updateView();
function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name} </div>
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showPokemon()">Vis dine pokemon</button>       
        </div>

    </div>
  </div>
  `;
}
function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du fanget ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  </div>
  `;
}

function PlayersPokemonView() {
  let myPokemon = ``;
  app.innerHTML = /*HTML*/ `
  <div>
    <ul>
      ${createPokemonList(myPokemon)}
    </ul>
  </div>
  <div class="buttonContainer">
    <button onclick="updateView()">Finn en ny pokemon</button>
  </div>
  `;
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////
function createPokemonList(myPokemon) {
  for (let i = 0; i < player.pokemon.length; i++) {
    myPokemon += `<li>${player.pokemon[i].name}</li>`;
  }
  return myPokemon
}

function showPokemon() {
  PlayersPokemonView()
}

function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * allPokemon.length);
  randomPokemon = allPokemon[randomNum];
}
