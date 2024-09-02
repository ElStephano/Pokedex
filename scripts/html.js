function showDataHtml(i) {
    return `
        <div class="inner-card" id="pokemonCardBg${i}">
            <img class="current-pokemon-img" src="${pokemonImages[i]}">
            <div class = "stats">
                <div class="stat-bar">
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                        <label onclick="showStats(${i})" class="btn btn-outline-primary" for="btnradio1">Basic-Stats</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                        <label onclick="showAbilities(${i})" class="btn btn-outline-primary" for="btnradio2">Abilities</label>

                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                       <label onclick="showPhysique(${i})" class="btn btn-outline-primary" for="btnradio3">Physis</label>
                    </div>
                </div>
                <table id="table1">   
                    <tr>
                        <td>Attack</td>
                        <td>Defense</td>
                        <td>Health</td>
                    </tr>
                    <tr>
                        <td>${pokemonData[i].stats[1].base_stat}</td>
                        <td>${pokemonData[i].stats[2].base_stat}</td>
                        <td>${pokemonData[i].stats[0].base_stat}</td>
                    </tr>
                </table>
                 
                <div class="card-buttons">
                    <button onclick="previousCard(${i})" class="change-button"><img src="./img/left.png"></button>
                    <button onclick="closeCard(${i})" class="close-button">X</button>
                    <button onclick="nextCard(${i})" class="change-button"><img src="./img/right.png"></button>
                </div>
            </div>        
        </div>
        `
}

function showPhysiqueHtml(i) {
    return `
            <tr>
                <td>Height</td>
                <td>Base Experience</td>
                <td>Weight</td>
            </tr>
            <tr>
                <td>${pokemonData[i].height}</td>
                <td>${pokemonData[i].base_experience}</td>
                <td>${pokemonData[i].weight}</td>
            </tr>
        `
}

function showStatsHtml(i) {
    return `
            <tr>
                <td>Attack</td>
                <td>Defense</td>
                <td>Health</td>
            </tr>
            <tr>
                <td>${pokemonData[i].stats[1].base_stat}</td>
                <td>${pokemonData[i].stats[2].base_stat}</td>
             <td>${pokemonData[i].stats[0].base_stat}</td>
            </tr>
        `
}

function renderContentHtml(i, finalPokemonName) {
    return  `
            <div onclick="showData(${i})" class="content" id="content${i}">
                <div class="pokemonCard" id="card${i}">
                    <h2>${finalPokemonName}</h2>
                    <img class="allPokemonImages" src="${pokemonImages[i]}">
                </div>
            </div>
            ` 
}