const poke_container = document.getElementById("poke-container");
let pokemon_count;

// Uncomment this below to only view Pokemons #1-250
// const pokemon_count = 250;

// Comment this out to use const pokemon_count = 250
const getPokemonCount = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const response = await fetch(url);
  const countData = await response.json();
  pokemon_count = countData.count;
  fetchPokemon();
};

const createPokemonCount = (poke_count) => {
  const poke_counter = poke_count.count;
  console.log(poke_counter);
};
// Comment till here to use const pokemon_count = 250

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#F4E7DA",
  rock: "#D5D5D4",
  fairy: "#FCEAFF",
  poison: "#98D7A5",
  bug: "#F8D5A3",
  dragon: "#97B3E6",
  psychic: "#EAEDA1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    // console.log(i);
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  // console.log("pokemon", pokemon);
  const poke_types = pokemon.types.map((type) => type.type.name);

  const PokemonInnerHtml = `
    <div class="image-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
    </div>

    <div class="info">
      <span class="number"> # ${pokemon.id}</span>
      <h3 class="name">${pokemon.name}</h3>
      <small class="type">Type <span> ${poke_types} </span></small>
    </div>
    `;

  pokemonEl.innerHTML = PokemonInnerHtml;
  poke_container.appendChild(pokemonEl);
};

// Comment this to use const pokemon_count = 250
getPokemonCount();

// Uncomment this to use const pokemon_count = 250
// fetchPokemon();
