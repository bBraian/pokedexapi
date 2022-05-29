const POKEMONS_COLORS = {
    "bulbasaur":"#68A890","ivysaur":"#498899","venusaur":"#489180","charmander":"#FFD57B","charmeleon":"#FC6C6D",
    "caterpie":"#6AD531","squirtle":"#76BEFE","metapod":"#5bbb27","wartortle":"#627BC5","weedle":"#EEAC41",
    "blastoise":"#5A8BCD","charizard":"#EE8329","kakuna":"#F6CD31","beedrill":"#DECDF6","pidgey":"#CD835A",
    "pidgeotto":"#AC7B5A","butterfree":"#8383BD","pidgeot":"#E6B462","spearow":"#EEAC52","fearow":"#EDD3B0",
    "raichu":"#FFD43E","nidorina":"#C5E6EE","rattata":"#D59CD5","nidorino":"#CD83DE","raticate":"#C59439",
    "ninetales":"#E6C552","ekans":"#EEA4D5","oddish":"#9CD54A","arbok":"#A483C5","pikachu":"#F6E652",
    "gloom":"#7B83A4","vileplume":"#5A6283","sandshrew":"#EEDE10","venonat":"#A48BBD",
    "venonat":"#A48BBD",
};

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
                            var color = "";
                            if(POKEMONS_COLORS[val.nome] !== undefined) {
                                color = POKEMONS_COLORS[val.nome];
                            } else {
                                color = "#ccc";
                            }
                            pokemon_boxes.innerHTML += `

                                <div class="pokemon-box" style="background-color: `+color+`">
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