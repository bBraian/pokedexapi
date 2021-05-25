var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup', function(){
    pegaPokemons(quantidade.value);
})

pegaPokemons(3);
function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];
        
        allpokemon.results.map(function(val){
            

            fetch(val.url)
                .then(response => response.json())
                .then(pokeminSingle => {
                    pokeminSingle.sprites.front_default;
                    pokemons.push({nome:val.name,imagem:pokeminSingle.sprites.front_default});

                    if(pokemons.length == quantidade){

                        var pokemon_boxes = document.querySelector('.pokemon-boxes');
                        pokemon_boxes.innerHTML = "";

                            pokemons.map(function(val){
                            pokemon_boxes.innerHTML += `

                                <div class="pokemon-box">
                                    <img src="`+val.imagem+`" />
                                    <p>`+val.nome+`</p>
                                </div>
                            
                            `;

                            })
                    }

                })

        })

        pokemons.map(function(val){
            console.log(val.nome);
        })

    })
}