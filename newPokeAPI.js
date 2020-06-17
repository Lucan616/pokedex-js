const gridContainer = document.querySelector('.grid-container');

// // Async returns a promise

async function getPokemon() {
  // Await response of the fetch call
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
  // Only proceed once its resolved
  const data = await response.json();
  // Only proceed once second promise is resolved
  return data.results;
}

// async function getPokemonSprite(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

function Pokemon(name, sprite) {
  this.name = name;
  this.sprite = sprite;
}

let pokedex = [];

getPokemon()
  .then(
    pokemon => {
      let output;
      pokemon.forEach(mon => {
        pokedex.push(new Pokemon(mon.name, mon.url));
      });
      pokedex.forEach((pokemon, index) => {
        // console.log(index + 1, pokemon.name);

        output += `
      <div class="card">
        <h4 class="index">${index + 1}</h4>
        <img src="" alt="" class="sprite">
        <h3 class="name">${pokemon.name}</h3>
      </div>
      `;
      });
      gridContainer.innerHTML = output;
    }
  );

// console.log(pokedex);

