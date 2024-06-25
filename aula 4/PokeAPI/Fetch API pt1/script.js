//Fetch Teste 1 Estudando as Promises

//const req = fetch('https://pokeapi.co/api/v2/pokemon/lucario');
//console.log(req);

//Fetch Teste 2 Resolvendo a Promises
//fetch('https://pokeapi.co/api/v2/pokemon/lucario')
//    .then(resp => console.log(resp))
//    .then(error => console.log(error));

//Fetch Teste 3 Convertendo a respota em JSON
//fetch('https://pokeapi.co/api/v2/pokemon/lucario')
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//    .then(error => console.log(error));

//Fetch Teste 4 Acessando informações informações via ID
//fetch('https://pokeapi.co/api/v2/pokemon/1')
//    .then(resp => resp.json())
//    .then(data => console.log(data))
//    .then(error => console.log(error));

//Fetch Teste 5 Utilizando o try catch
async function fetchPokemon(){
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        if(!resp.ok){
            throw new Error('Pokemon não encontrado');
        } else{
            const data = await resp.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
fetchPokemon();