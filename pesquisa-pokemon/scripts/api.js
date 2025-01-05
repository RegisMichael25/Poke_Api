const form = document.querySelector('.form');
const inputPkm = document.querySelector('.input-pokemon');
const mainContainer = document.querySelector('.main-container');

const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

const fetchPokemon = async (pokemon) => {
    try {
        const responseApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!responseApi.ok) throw new Error('Pokémon não encontrado');
        const data = await responseApi.json();
        captPkm(data);
    } catch (error) {
        console.error(error);
        mainContainer.innerHTML = `<p>Erro: Pokémon não encontrado</p>`;
    }
};

const captPkm = async (data) => {
    mainContainer.innerHTML = ''; 

    const container = document.createElement('div');
    container.className = "conteiner-principal";
    container.innerHTML = `
        <p class="id">${data.id}</p>
        <img class="pkm-img" src="${data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}" alt="">
        <p>Nome: <span class="nome">${data.name}</span></p>
        <p>Tipo: <span class="tipo">${await typesPokemon(data)}</span></p>
    `;

    
    mainContainer.appendChild(container);
    mainContainer.style.display = 'block';

   
    const tipoElement = container.querySelector('.tipo');
    const color = data.types[0].type.name.toLowerCase();
    if (typeColors[color]) {
        tipoElement.style.background = typeColors[color];
    } else {
        console.warn(`Cor não encontrada para o tipo: ${color}`);
    }
};

async function typesPokemon(data) {
    const typeList = [];
    for (let i = 0; i < data.types.length; i++) {
        typeList.push(data.types[i].type.name);
    }
    return typeList.join(', '); 
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokemon = inputPkm.value.trim().toLowerCase(); 
    if (pokemon) {
        fetchPokemon(pokemon);
    }
});
