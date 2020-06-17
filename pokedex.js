const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151', true);

xhr.onload = function () {
  if (this.status === 200) {
    const response = JSON.parse(this.responseText).results;
    // console.log(response);

    response.forEach((pokemon) => {
      console.log(pokemon.name);

      // xhr.open('GET', pokemon.url, true);

      // xhr.onload = () => {
      //   if (this.status === 200) {
      //     const sprite = JSON.parse(this.responseText).sprites;
      //     console.log(sprite.front_default);
      //   }
      // };

      // xhr.send();
    });
  }
}

xhr.send();



// const xhr = new XMLHttpRequest();

// xhr.getPokemon = function (url, callback) {
//   xhr.open('GET', url, true);

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText).results;
//       // console.log(response);
//       callback(JSON.parse(this.responseText).results);

//     }
//   }

//   xhr.send();
// }

// xhr.getPokemon('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151', function (response) {
//   // console.log(response);
//   response.forEach((pokemon) => {
//     console.log(pokemon.name);

//     xhr.getSprites = function (url, callback) {

//       xhr.open('GET', pokemon.url, true);

//       xhr.onload = () => {
//         if (this.status === 200) {
//           callback(JSON.parse(this.responseText).sprites);
//           // const sprite = JSON.parse(this.responseText).sprites;
//           // console.log(sprite.front_default);
//         }
//       };

//       xhr.send();
//     }

//     xhr.getSprites(pokemon.url, function (response) {
//       console.log(response.front_default);
//     });

//   });
// });