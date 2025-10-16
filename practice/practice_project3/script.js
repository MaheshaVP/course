
const pokename = document.getElementById('poke-name');
const pokeimage = document.getElementById('poke-image');
const pokedesc = document.getElementById('poke-desc');
const nextbtn = document.getElementById('next-btn');

let currentID = 1;

async function loadPokemon(id) {
    try{

        const api = `https://pokeapi.co/api/v2/pokemon/${id}`;

        const res = await fetch(api);
        const data = await res.json();
        console.log(data)

        const api_desc = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

        const speciesres = await fetch(api_desc);
        const speciesdata = await speciesres.json();
        console.log(speciesdata)

        const flavor = speciesdata.flavor_text_entries.find(
            entry => entry.language.name === "en"
        );

        pokename.innerHTML = data.name.toUpperCase();
        pokeimage.src = data.sprites.other["official-artwork"].front_default;
        pokedesc.innerText = flavor ? flavor.flavor_text.replace(/\f/g, "") : "No description available";

    }
    catch(err){
        pokename.innerText = "Error loading pokemon";
        pokeimage.src = "";
        pokedesc.innerText = "";
        console.error(err);
    }
}

loadPokemon(currentID);

nextbtn.addEventListener("click", ()=>{
    currentID++;

    if(currentID>1025) currentID = 1;
    loadPokemon(currentID);
})