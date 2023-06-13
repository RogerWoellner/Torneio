const btn = document.querySelector('#submitbtn')
const section = document.querySelector('#containertimes')

btn.addEventListener("click", function(event){
    console.log("Botão submitbtn clicado")
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

    // Embaralhar a lista de times
    shuffle(teams);

    if (teams.length % 2 !== 0) {
        teams.push('BYE')
    }

    let result = ''
        for (let i = 0; i < teams.length / 2; i++) {
            if (teams[i] !== 'BYE' && teams[teams.length - i - 1] !== 'BYE') {
                result += '<div class="box-game">' + teams[i] + '<br>' + ' x ' + '<br>' + teams[teams.length - i - 1] + '</div>' + '<br>' 
            }
        }

        result += '<br>'
        teams.splice(1, 0, teams.pop())

        section.innerHTML = result 
        
}

// Função para embaralhar uma lista
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // Enquanto ainda houver elementos para embaralhar
    while (currentIndex !== 0) {

        // Escolha um elemento aleatório para trocar com o atual
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Troque o elemento atual com o escolhido aleatoriamente
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



