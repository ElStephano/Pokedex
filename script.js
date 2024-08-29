let allPokemon = [];
let pokemonData = [];
let pokemonImages = [];
let pokemonSpecies = [];


async function init() {
    await getPokemonData();
    renderContent();
}



async function getPokemonData() {
    let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0");
    let pokemondata = await pokemon.json();
    allPokemon = pokemondata.results;

    for (let i = 0; i < allPokemon.length; i++) {
        let number = i + 1;
        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
        let allData = await data.json();
        pokemonData.push(allData);
        getSpecies(i);
        getImages(i);

    }
}

function renderContent() {
    let content = document.getElementById("main-container");

    for (let i = 0; i < allPokemon.length; i++) {

        let currentPokemon = allPokemon[i].name;
        let firstLetter = currentPokemon.charAt(0).toUpperCase();
        let smallLetters = currentPokemon.slice(1);
        let finalPokemonName = firstLetter + smallLetters;

        let currentSpecies = pokemonSpecies[i];

        content.innerHTML += `
        <div onclick="showData(${i})" class="content" id="content${i}">
            <div class="pokemonCard" id="card${i}">
                <h2>${finalPokemonName}</h2>
                <img src="${pokemonImages[i]}">
            </div>
        </div>
        `;
        showSpecies(i, currentSpecies)
    }
}

function showData(i) {
    let showCard = document.getElementById('showCard');
    showCard.innerHTML = '';
    showCard.classList.remove('d-none');
    showCard.innerHTML += showDataHtml(i);
}

function showAbilities(i) {
    let table = document.getElementById('table1');


    let currentAbilities = pokemonData[i].abilities;
    table.innerHTML = '';

    for (let x = 0; x < currentAbilities.length; x++) {
        const element = currentAbilities[x].ability.name;

        let firstLetter = element.charAt(0).toUpperCase();
        let smallLetters = element.slice(1);
        let finalAbility = firstLetter + smallLetters;

        table.innerHTML += `
            <td>${finalAbility}</td>
            `
            ;
    }

}

function showStats(i) {
    let table = document.getElementById('table1');
    table.innerHTML = `
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
    `;

}

function showPhysique(i) {
    let table = document.getElementById('table1');
    table.innerHTML = '';
    table.innerHTML = `
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
    `;
}

function closeCard() {
    let currentCard = document.getElementById('showCard');
    currentCard.innerHTML = '';
    currentCard.classList.add('d-none');
}

function nextCard(i) {
    if (i < 149) {
        i++;
        showData(i);
    } else {
        closeCard();
    }
}

function previousCard(i) {
    if (i >= 1) {
        i--;
        showData(i);
    } else {
        closeCard();
    }
}
