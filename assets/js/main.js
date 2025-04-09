const key = "a072d0533c765af2611f62c4"

// Função chamada ao clicar no botão
function converterRealParaDolar() {
  let real = document.querySelector(".input-real").value
  console.log("Valor em reais:", real)
  dadosAPI(real)
}

// Função que busca a cotação na API
async function dadosAPI(real) {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/pair/BRL/USD`)
    let dados = await response.json()
    console.log("Dados da API:", dados)
    dadosTela(real, dados)
  } catch (erro) {
    console.error("Erro ao acessar a API:", erro)
  }
}

// Função que exibe os dados na tela
function dadosTela(real, dados) {
  let cotacao = dados.conversion_rate
  let convertido = (real * cotacao).toFixed(2)
  document.querySelector(".dolar").innerHTML = `US$ ${convertido}`
}

