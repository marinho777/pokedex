const URL = 'https://pokeapi.co/api/v2/pokemon/'
let atual = 1
let limite = 6 

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
function capturar() {
	if(atual !== limite){
		const pokemonID = document.getElementById('pokemon_input')
		fetchPokemon(pokemonID). then(spriteURL => {
			if(spriteURL){
				document.getElementById(`${atual}`).src = data.sprites.front_default
				atual ++
				console.log(atual)
			}
		})
	}	
}

