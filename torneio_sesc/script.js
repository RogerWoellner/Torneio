// const btn = document.querySelector('#submitbtn')
// const section = document.querySelector('#containertimes')

// btn.addEventListener("click", function(event){
//     event.preventDefault()

//     const numTimes = parseInt (document.querySelector('#js-input-times').value)

//     section.innerHTML = ''
//     for(let i = 1; i <= numTimes; i++){
//         const input = document.createElement("input")
//         input.type = "text"
//         input.id = "nome-time"
//         input.name = "time-" + i
//         input.placeholder = "Nome do time " + i
//         input.required = true
//         section.appendChild(input)
//     }

//     const submitButton = document.createElement("button")
//     submitButton.type = "submit"
//     submitButton.innerText = "Gerar Jogos"
//     submitButton.addEventListener('click', gerarJogos)
//     section.appendChild(submitButton)
// })

// //Não apagar
// // function gerarJogos() {
// //     const nomeTime = document.querySelectorAll("[name^='time-']")

// //     let times = ''
// //     let rodadas = ''
// //         for (let i = 0; i < nomeTime.length; i++) {
// //             for (let j = i + 1; j < nomeTime.length; j++) {
// //               rodadas += 'Rodada ' + (i+1) + '<br>' + 'Jogo ' + (nomeTime.length + 1) + ': ' + nomeTime[i].value +' X '+ nomeTime[j].value + '<br><br>'
// //             }
// //         }    
// //     section.innerHTML = rodadas
// // }

// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;
//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;
//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }
//     return array;
// }


// function gerarJogos() {
//     const nomeTime = document.querySelectorAll("[name^='time-']")

//     let jogosPorRodada = []
//     for (let i = 0; i < nomeTime.length; i++) {
//         for (let j = i + 1; j < nomeTime.length; j++) {
//             jogosPorRodada[i] = jogosPorRodada[i] || []
//             jogosPorRodada[i].push(nomeTime[i].value +' x '+ nomeTime[j].value)
//         }
//     }

//     let jogosEmbaralhados = jogosPorRodada.map(function(jogos) {
//         return shuffle(jogos)
//     })

//     let resultado = ''
//     for (let i = 0; i < jogosEmbaralhados.length; i++) {
//         resultado += 'Rodada ' + (i+1) + '<br>' + jogosEmbaralhados[i].join('<br>') + '<br><br>'
//     }

//     section.innerHTML = resultado
    
// }



// // function gerarJogos() {
// //     const nomeTime = document.querySelectorAll("[name^='time-']")
// //     const numTimes = nomeTime.length

// //     let jogosPorRodada = []
// //     let timesEscolhidos = []
    
// //     for (let i = 0; i < numTimes - 1; i++) {
// //         const jogos = []
// //         for (let j = 0; j < numTimes / 2; j++) {
// //             let time1, time2
// //             do {
// //                 // Escolhe aleatoriamente dois times que ainda não jogaram juntos na mesma rodada
// //                 time1 = Math.floor(Math.random() * numTimes)
// //                 time2 = Math.floor(Math.random() * numTimes)
// //             } while (time1 === time2 || timesEscolhidos[i] && timesEscolhidos[i].includes(time1) && timesEscolhidos[i].includes(time2))
            
// //             // Adiciona os times escolhidos para a lista de times já escolhidos na mesma rodada
// //             timesEscolhidos[i] = timesEscolhidos[i] || []
// //             timesEscolhidos[i].push(time1, time2)

// //             // Adiciona o jogo à lista de jogos da rodada
// //             jogos.push(nomeTime[time1].value + ' x ' + nomeTime[time2].value)
// //         }
// //         jogosPorRodada.push(jogos)
// //     }

// //     let resultado = ''
// //     for (let i = 0; i < jogosPorRodada.length; i++) {
// //         resultado += 'Rodada ' + (i+1) + '<br>' + jogosPorRodada[i].join('<br>') + '<br><br>'
// //     }

// //     section.innerHTML = resultado
// // }

const btn = document.querySelector('#submitbtn')
const section = document.querySelector('#containertimes')

btn.addEventListener("click", function(event){
    event.preventDefault()

    const numTimes = parseInt(document.querySelector('#js-input-times').value)

    section.innerHTML = ''
    for(let i = 1; i <= numTimes; i++){
        const input = document.createElement("input")
        input.type = "text"
        input.id = "team-name"
        input.name = "team-" + i
        input.placeholder = "Nome do Time " + i
        input.required = true
        section.appendChild(input)
    }

    const submitButton = document.createElement("button")
    submitButton.type = "submit"
    submitButton.innerText = "Gerar Jogos"
    submitButton.addEventListener('click', generateGames)
    section.appendChild(submitButton)
})

function generateGames() {
    const teamName = document.querySelectorAll("[name^='team-']")
    let teams = Array.from(teamName).map(team => team.value)

    if (teams.length % 2 !== 0) {
        teams.push('BYE')
    }

    let result = ''
    let numRounds = teams.length - 1
    for (let round = 0; round < numRounds; round++) {
        result += 'Rodada ' + (round+1) + '<br>'
        for (let i = 0; i < teams.length / 2; i++) {
            if (teams[i] !== 'BYE' && teams[teams.length - i - 1] !== 'BYE') {
                result += teams[i] + ' x ' + teams[teams.length - i - 1] + '<br>'
            }
        }
        result += '<br>'
        teams.splice(1, 0, teams.pop())
    }

    section.innerHTML = result
}





