console.log('Tabela da Copa Catar 2022')

let tabelaJogos = document.querySelector('.tabelaJogos')

//Ler arquivo JSON
fetch('./json/jogos-fase1.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach( jogo => {
    

    // Criar uma linha de tabela, colocar ela na tabela
    let linha = document.createElement('tr')
    tabelaJogos.appendChild(linha)

    // Preencher os dados do jogo em cada linha da tabela
    linha.innerHTML = `
    <td>${jogo.diaSemana}</td>
    <td>${jogo.data}</td>
    <td>${jogo.hora}</td>
    <td>${jogo.grupo}</td>
    <td class='centralizar'>
        <img class='imgP' src='./img/bandeiras/${jogo.mandante}' alt=''/>

        <span class='gols'>${jogo.gols_mandante}</span>

        <span class='partida'>${jogo.partida}</span>

        <span class='gols'>${jogo.gols_visitante}</span>

        <img class='imgP' src='./img/bandeiras/${jogo.visitante }' alt=''/>
    </td>
    <td class='esquerda'>${jogo.estadio}</td>
    `

}))

// Ler JSON das Classificações

let tabelaClassificacao = document.querySelector('.tabelaClassificacao')
let linhas = document.querySelectorAll('.corpoClassificao tr')

exibirTabelaClassificao('A')

function exibirTabelaClassificao(letraGrupo){

    // Atualizar letra do Grupo no index.html
    document.querySelector('.letra').innerHTML = letraGrupo

    fetch(`./json/classificacaoGrupo${letraGrupo}.json`)
.then(resposta => resposta.json())
.then(dados => {

        // Ordernar os dados do Array
        dados.sort(function compararNumeros(a, b){
            return a.posicao - b.posicao
        })

    dados.forEach( (selecao, indice) => {

    // Criar Linha tr
    // let linha = document.createElement('tr')

    // Colocar ela como filho dentro da tabela
    // tabelaClassificacao.appendChild(linha)

    // Preencher os dados
    linhas[indice].innerHTML = `
    <td>${selecao.posicao}</td>
    <td>${selecao.selecao}</td>
    <td>${selecao.pontos}</td>
    <td>${selecao.jogos}</td>
    <td>${selecao.vitorias}</td>
    <td>${selecao.empates}</td>
    <td>${selecao.derrotas}</td>
    <td>${selecao.gols_pro}</td>
    <td>${selecao.gols_contra}</td>
    <td>${selecao.saldo_de_gols}</td>
    `
})
}
)
}

// exibirTabelaClassificao('G')

// Controlar a escolha da letra do grupo para exibir na tabela de classificação
let selectLetra = document.querySelector('#letrasDosGrupos')

// Usar um escutador de eventos para a nossa caixa select
selectLetra.addEventListener('change', (evento) => {
     exibirTabelaClassificao(evento.target.value)
})

// OITAVAS DE FINAL

let divOitavas = document.querySelector('.divOitavas')

fetch('./json/oitavas-de-final.json')
.then(resposta => resposta.json())
.then(dados => {

    dados.forEach( jogo => {

        //Criar uma nova divisoria
        let divisoria = document.createElement('div')

        //Colocar ela como filho de divOitavas
        divOitavas.appendChild(divisoria)
        
        // Preencher os dados de cada jogo
        divisoria.innerHTML = `
            <h3 class='jogo'>Oitavas ${jogo.id}</h3>
            <h4>
                <span class='dia'>${jogo.diaSemana}</span>
                ${jogo.data}
                <span class='hora'>${jogo.hora}</span>
            </h4>
            <h4 class='centralizar jogo'>
                <img class="imgP" src='./img/bandeiras/${jogo.img_mandante}' />
                <span class='gols'>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span class='gols'>${jogo.gols_visitante}</span>
                <img class="imgP" src='./img/bandeiras/${jogo.img_visitante}' />
            </h4>
            <h5>${jogo.estadio}</h5>
            <h6>Prorrogação: ${jogo.prorrogacao}</h6>
            <h6>Penaltis: ${jogo.penaltis}</h6>
            <h6>Placar dos Penaltis: ${jogo.placar_penaltis}</h6>
            <h6>Classificado: ${jogo.classificado}</h6>

        `

    })
})

// QUARTAS DE FINAL

let divQuartas = document.querySelector('.divQuartas')

fetch('./json/quartas-de-final.json')
.then(resposta => resposta.json())
.then(dados => {

    dados.forEach( jogo => {

        //Criar uma nova divisoria
        let divisoria = document.createElement('div')

        //Colocar ela como filho de divOitavas
        divQuartas.appendChild(divisoria)
        
        // Preencher os dados de cada jogo
        divisoria.innerHTML = `
            <h3 class='jogo'>Quartas ${jogo.id}</h3>
            <h4>
                <span class='dia'>${jogo.diaSemana}</span>
                ${jogo.data}
                <span class='hora'>${jogo.hora}</span>
            </h4>
            <h4 class='centralizar jogo'>
                <img class="imgP" src='./img/bandeiras/${jogo.img_mandante}' />
                <span class='gols'>${jogo.gols_mandante}</span>
                ${jogo.partida}
                <span class='gols'>${jogo.gols_visitante}</span>
                <img class="imgP" src='./img/bandeiras/${jogo.img_visitante}' />
            </h4>
            <h5>${jogo.estadio}</h5>
            <!--<h6>Prorrogação: ${jogo.prorrogacao}</h6>
            <h6>Penaltis: ${jogo.penaltis}</h6>
            <h6>Placar dos Penaltis: ${jogo.placar_penaltis}</h6>
            <h6>Classificado: ${jogo.classificado}</h6>-->

        `

    })
})

// // CONSUMIR API EXTERNA

// fetch('https://worldcupjson.net/matches/tomorrow/?by_date=DESC')
// .then(responta => responta.json())
// .then(dados => {
//     dados.forEach( jogo => {
//         console.log(jogo)
//         console.log(jogo.home_team_country + ' x ' + jogo.away_team_country)
//     } )
// })