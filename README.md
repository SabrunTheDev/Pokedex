# Pokédex

# Description

This JavaScript code fetches Pokemon data from the [PokeAPI](https://pokeapi.co/) and displays information about each Pokemon on a web page. It utilizes asynchronous functions and the Fetch API for handling HTTP requests.

## Code Explanation

### Variables

- `poke_container`: Represents the HTML element with the id "poke-container" where Pokemon cards will be displayed.
- `pokemon_count`: Holds the total number of Pokemon to be fetched.

### Functions

1. **getPokemonCount**

   - Fetches the total count of Pokemon from the PokeAPI.
   - Sets the `pokemon_count` variable to the obtained count.
   - Calls `fetchPokemon` function to start fetching individual Pokemon data.

2. **createPokemonCount**

   - Creates a count of Pokemon based on the given parameter.
   - Useful for logging or displaying the total count.

3. **fetchPokemon**

   - Loops through Pokemon from 1 to the specified `pokemon_count`.
   - Calls the `getPokemon` function for each Pokemon.

4. **getPokemon**

   - Fetches individual Pokemon data based on the provided ID.
   - Calls the `createPokemonCard` function to display the Pokemon.

5. **createPokemonCard**
   - Creates a Pokemon card using the fetched data.
   - Uses the `poke_container` to append the created card to the web page.

### Pokemon Card HTML Template

Defines the structure of a Pokemon card using an HTML template string.

### Execution

Uncomment the appropriate section to choose between fetching all Pokemon or only the first 250.

- To fetch all Pokemon, uncomment the `getPokemonCount` call and comment out the `fetchPokemon` call.
- To fetch only the first 250 Pokemon, comment out the `getPokemonCount` call and uncomment the `fetchPokemon` call.

Adjustments can be made to customize the code based on specific requirements or styling preferences.
