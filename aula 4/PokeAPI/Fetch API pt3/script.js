//Buscando elementos doobjeto da requisição Fetch

//Criando a função assincrona
async function fetchPokemon(){
    try {                                                           //primeira letra maiúscula
        const pokemonID = document.getElementById('pokemonID').value.toLowerCase()
        const pokemonNome = document.getElementById('pokemonNome')
        const pokemonType = document.getElementById('pokemonType')

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)

        if(!resp.ok){
            throw new Error('Pokemon não encontrado');
        } else {
            const data = await resp.json();
            console.log(data);
            const imgElemento = document.getElementById('pokemonSprite');
            const pokemonSprite = data.sprites.front_default;
            const pokemonNomeData = data.name;
            //metodos com array
            const pokemonTipoData = data.types[0].type.name;

            imgElemento.src = pokemonSprite
            imgElemento.style.display = 'block';
            pokemonNome.innerHTML = pokemonNomeData;
            pokemonType.innerHTML = pokemonTipoData;
        }
    } catch (error) {
        console.error(error);
    }
}