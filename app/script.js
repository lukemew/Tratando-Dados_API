const botao = document.querySelector('#enviar')


async function gerarCep(cep){
try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var response = await consultaCep.json()
    console.log(response.localidade)

} catch (error) {
    console.error("Não foi possível conseguir o CEP:", error)
}
}

gerarCep('63870000').