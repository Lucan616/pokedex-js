// Fetch first 151 (gen1) Pokemon
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const gridContainer = document.querySelector('.grid-container');
    let output = '';
    let indexNum = 0;

    // Fetch further data for each Pokemon
    data.results.forEach(async (pokemon) => {

      // Fetch data for images
      await fetch(pokemon.url)
        .then(await function (res) {
          return res.json();
        })
        .then(data => {
          // Index/id number iterator
          indexNum++;

          // Card output
          output += `
          <div class="card">
            <h4 class="index">${indexNum}</h4>
            <img src="${data.sprites.front_default}" alt="" class="sprite">
            <h3 class="name">${pokemon.name}</h3>
          </div>
          `;
        })

      // Insert HTML
      gridContainer.innerHTML = output;
    });
  })
  .catch(err => console.log(err));

// cardNames = document.querySelector('.name').innerHTML;
// console.log(cardNames);