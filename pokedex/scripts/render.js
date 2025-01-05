function renderPokemon(pokemon){
    let pokedex = document.querySelector('#pokedex');
    console.log(pokemon);
    pokedex.innerHTML = `
        <div class="screen">
          <div class="pokemon-info">
            <h2 id="pokemon-name">${pokemon.name}</h2>
            <img id="pokemon-image" src="${pokemon.sprites.front_default}" alt="Pokémon" class="pokemon-img">
            <ol id="pokemon-type">
                ${pokemon.types.map((type) =>`${(type.type.name)}`).join(' ')}
            </ol>
          </div>
        </div>
        <div class="controls">
          <button id="prev-button" onclick="previousPokemon()">Previous</button>
          <button id="next-button" onclick="nextPokemon()">Next</button>
        </div>
`
console.log(pokedex);
}

