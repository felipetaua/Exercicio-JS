//Crinando a função Fetch do botão pesquisar

async function FetchPokemon(){
    try {
        const pokemonID = document.getElementById('pokemonID').value.toLowerCase()
        //se pesquisar em branco da erro, usamos if para conseguir resolver o problema(verificação)
        if(pokemonID == ''){
            alert('Digite um Nome ou ID válido');
            throw new Error('ID inválido ou nome');
        }
    const pokemonNome = document.getElementById('pokemonNome');
    const pokemonType = document.getElementById('pokemonType');

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
        if(! resp.ok){
            throw new Error('Pokemon não encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
            const pokemonSprite = data.sprites.front_default;
            const imgElemento = document.getElementById('pokemonSprite');

            const pokemonNomeData = data.name.toUpperCase();
            /* para arrays é necessário outro método */
            const pokemonTypeData = data.types[0].type.name

            //setando os elementos data no HTML
            imgElemento.src = pokemonSprite;
            imgElemento.style.display = 'block';

            pokemonNome.innerHTML = pokemonNomeData;
            pokemonType.innerHTML = pokemonTypeData;
        }
    } catch (error) {
        console.log(error);
    }
}