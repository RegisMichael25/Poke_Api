let butNext = document.getElementById('next-button');
let previous ;
let next = 0;

function nextPokemon(){
    next = next + 1;
    getPokemon(next);
}

function previousPokemon(){
    if(next >= 1){
        next = next - 1;
        previous = next;
        getPokemon(previous);
    }
}