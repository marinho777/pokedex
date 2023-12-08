//sistema de captura
function capturar() {
	const pokemon = {
		nome: pokemonName,
		id: pokemonID
	};
	//define a var para lista
	let uicontent = document.getElementById("ul");
	//cria h1, h2, h3 para cada elemento do prod
	let nome_prod = document.createElement("h1");
	let marca_prod = document.createElement("h2");
	let preco_prod = document.createElement("h3");
	//cria cada elemento no html com os valores dentro do produto
	nome_prod.innerHTML = produto.nome;
	marca_prod.innerHTML = produto.marca;
	preco_prod.innerHTML = produto.preco;
	//coloca os elementos usando append dentro da ui
	uicontent.appendChild(nome_prod);
	uicontent.appendChild(marca_prod);
	uicontent.appendChild(preco_prod);

	console.log(produto);

	let ulid = document.getElementById("ulid");
	ulid.appendChild(uicontent);
}
