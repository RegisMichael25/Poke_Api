const typeColors = [
    { type: 'normal', color: '#A8A77A' },
    { type: 'fire', color: '#EE8130' },
    { type: 'water', color: '#6390F0' },
    { type: 'electric', color: '#F7D02C' },
    { type: 'grass', color: '#7AC74C' },
    { type: 'ice', color: '#96D9D6' },
    { type: 'fighting', color: '#C22E28' },
    { type: 'poison', color: '#A33EA1' },
    { type: 'ground', color: '#E2BF65' },
    { type: 'flying', color: '#A98FF3' },
    { type: 'psychic', color: '#F95587' },
    { type: 'bug', color: '#A6B91A' },
    { type: 'rock', color: '#B6A136' },
    { type: 'ghost', color: '#735797' },
    { type: 'dragon', color: '#6F35FC' },
    { type: 'dark', color: '#705746' },
    { type: 'steel', color: '#B7B7CE' },
    { type: 'fairy', color: '#D685AD' },
]

function renderPokemon(pokemon){
    let pokedex = document.querySelector('#pokedex');
    pokedex.innerHTML = `
        <div class="screen">
          <div class="pokemon-info">
            <h2 id="pokemon-name">${pokemon.name}</h2>
            <img id="pokemon-image" src="${pokemon.sprites.front_default}" alt="Pokémon" class="pokemon-img">
            <ol class="pokemon-type type-color" style="background-color: ${typeColors.find((type) => type.type === pokemon.types[0].type.name).color}">
                ${pokemon.types.map((type) =>`${(type.type.name)}`).join(' ')}
            </ol>
          </div>
        </div>
        <div>
          <h3>Status</h3>
          <ul id="pokemon-stats">
            ${pokemon.stats.map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join(' ')}
        </div>
        <div class="controls">
          <button id="prev-button" onclick="previousPokemon()">Previous</button>
          <button id="next-button" onclick="nextPokemon()">Next</button>
        </div>
`
}

