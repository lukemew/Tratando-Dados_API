const campoCep = document.querySelector('#cep')
const cidadeInput = document.querySelector('#cidade')
const endereçoInput = document.querySelector('#endereco')
const bairroInput = document.querySelector('#bairro')
const estadoSelect = document.querySelector('#estado')
const complementoInput = document.querySelector('#complemento')

async function gerarCep(cep){
try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var response = await consultaCep.json()
    console.log(response)
   
    cidadeInput.value = response.localidade
    endereçoInput.value = response.logradouro
    bairroInput.value = response.bairro
    estadoSelect.value = response.uf
    complementoInput.value = response.complemento


} catch (error) {
    console.error("Não foi possível conseguir o CEP:", error)
}
}

campoCep.addEventListener('input', () => {
    
    const cepDigitado = campoCep.value
    
    if(cepDigitado.length === 8){
    gerarCep(cepDigitado)
    }
})