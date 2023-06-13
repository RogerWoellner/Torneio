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

    let result1 = ''
    let result2 = ''
    let numRounds = teams.length - 1

    for (let round = 0; round < numRounds; round++) {
        result1 += 'Rodada ' + (round+1) + '<br>'
        for (let i = 0; i < teams.length / 2; i++) {
            if (teams[i] !== 'BYE' && teams[teams.length - i - 1] !== 'BYE') {
                result1 += teams[i] + ' x ' + teams[teams.length - i - 1] + '<br>'
            }
        }
        result1 += '<br>'
        teams.splice(1, 0, teams.pop())
    }

    for (let round = 0; round < numRounds; round++) {
        result2 += 'Rodada ' + (round+1) + '<br>'
        for (let i = 0; i < teams.length / 2; i++) {
            if (teams[i] !== 'BYE' && teams[teams.length - i - 1] !== 'BYE') {
                result2 += teams[i] + ' x ' + teams[teams.length - i - 1] + '<br>'
            }
        }
        result2 += '<br>'
        teams.splice(1, 0, teams.pop())
    }

    section.innerHTML = "Rodízio 1" + "<br><br>" + result1 + "<br><br>" + "Rodízio 2" + "<br><br>" + result2
    section.innerHTML = "Rodízio 1" + "<br><br>" + result1 + "<br><br>" + "Rodízio 2" + "<br><br>" + result2
    
}