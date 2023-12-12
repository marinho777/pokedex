const URL = 'https://pokeapi.co/api/v2/pokemon/'
var atual = 1
var limite = 6 

function get(){
	const inputid = document.getElementById('pokemon_input').value
	if(Number(inputid) >= 1 && Number(inputid) <= 898){
		fetchPokemon(inputid)
		//muda a cor do indicador da pokedex caso exista o id
		document.getElementById('pokedex_img').src = 'img/pokedex_green.png'
	}else{
		const errorElement = document.querySelector('.pokemon_name')
		errorElement.textContent = 'ERRO: ID INVALIDO'
		//muda a cor do indicador da pokedex no else e define a sprite como nada caso o id for invalido
		document.getElementById('pokedex_img').src = 'img/pokedex_red.png'
		document.getElementById('pokemon_sprite').src = ''
	}
}

let pokemonName = ''
let pokemonID = ''

const fetchPokemon = async (pokemon) => {
	const APIResponse = await fetch(URL + pokemon)
	const data = await APIResponse.json()
	pokemonName = data.name
	pokemonID = data.id
	//atualiza o html
	if(APIResponse.ok){
		const nameElement = document.querySelector('.pokemon_name')
		const idElement = document.querySelector('.pokemon_id')

		nameElement.textContent = `${pokemonName}`
		idElement.textContent = `${pokemonID}`
		//atualiza com base no link padrao da api
		const spriteURL = data.sprites.front_default
		document.getElementById('pokemon_sprite').src = spriteURL
	}else{
		//retorna o erro alterando o html do nome do pokemon
		const errorElement = document.querySelector('.pokemon_name')
		errorElement.textContent = 'ERRO'
		document.getElementById('pokedex_img').src = 'img/pokedex_red.png'
		document.getElementById('pokemon_sprite').src = ''
	}
}
//sistema de captura
async function capturar() {
	const inputid = document.getElementById('pokemon_input').value;
	
	if (Number(inputid) >= 1 && Number(inputid) <= 898) {
	  const pokemonData = await fetchPokemon(inputid);
	  const nameElement = document.querySelector('#p' + `${atual}`);
	  
	  nameElement.textContent = "teste";
	  const imgElement = document.getElementById('i' + atual);
	  imgElement.src = pokemonData.sprites.front_default;
	  atual++;
	}
  }

function soltar(i) {
	if (document.getElementById(`i${i}`)) {
	  const imgelement = document.getElementById(`i${i}`);
	  imgelement.src = '';
	  const element = document.getElementById(`p${u}`);
	  element.textContent = '';
	}
}

async function exibir() {
	const inputid = document.getElementById('pokemon_input').value;
	const pokemonData = await fetchPokemon(inputid);
  
	const habilidades = pokemonData.abilities.map(ability => ability.ability.name);
	
	let ulElement = document.getElementById("ul");
  
	habilidades.forEach(habilidade => {
	  let liElement = document.createElement("li");
	  liElement.textContent = habilidade;
	  ulElement.appendChild(liElement);
	});
  }

function showPokemons() {
	const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=251';
	fetch(URL)
	  .then((response) => {
		if(response.ok){
		  return response.json()
		}else{
		  console.log('erro ao obter a lista de Pokémons')
		}
	  })
	  .then((data) => {
		const pokemonList = data.results
		const pokemonListContainer = document.getElementById('PokemonList')
  
		pokemonList.forEach((pokemon, index) => {
		  const liPokemon = document.createElement('li')
		  const liPokemonImg = document.createElement('img')
  
		  fetch(pokemon.url)
			.then((response) => response.json())
			.then((pokemonData) => {
			  liPokemonImg.src = pokemonData.sprites.other['official-artwork'].front_default
  
			  const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
			  liPokemon.innerHTML = capitalizedPokemonName
			  liPokemon.classList.add('pokename')
			  liPokemon.appendChild(liPokemonImg)
  
			  pokemonListContainer.appendChild(liPokemon)
			})
		})
	  })
  }