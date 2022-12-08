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

tabelaClassificacao = document.querySelector('.tabelaClassificacao')

fetch('./json/classificacaoGrupoG.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach( selecao => {
    console.log(selecao)

    // Ordernar os dados do Array
    dados.sort(function compararNumeros(a, b){
        return a.posicao - b.posicao
    })

    // Criar Linha tr
    let linha = document.createElement('tr')

    // Colocar ela como filho dentro da tabela
    tabelaClassificacao.appendChild(linha)

    // Preencher os dados
    linha.innerHTML = `
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
}))