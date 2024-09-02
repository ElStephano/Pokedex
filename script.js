let allPokemon = [];
let pokemonData = [];
let pokemonImages = [];
let pokemonSpecies = [];


async function init() {
    await getPokemonData();
    hideLoadingScreen();
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

        content.innerHTML += renderContentHtml(i, finalPokemonName);
        showSpecies(i, currentSpecies)
    }
}

function showData(i) {
    let showCard = document.getElementById('showCard');
    showCard.innerHTML = '';
    showCard.classList.remove('d-none');
    showCard.innerHTML += showDataHtml(i);
    currentCardBg(i);
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
    table.innerHTML = showStatsHtml(i);

}

function showPhysique(i) {
    let table = document.getElementById('table1');
    table.innerHTML = '';
    table.innerHTML = showPhysiqueHtml(i);
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

function searchPokemon() {
    for (let i = 0; i < allPokemon.length; i++) {
        const element = allPokemon[i];
        
    let input = document.getElementById('input').value;
    let pokemonName = element.search(input);
    console.log(pokemonName)
    }
}

function hideLoadingScreen() {
    let loadingScreen = document.getElementById('loadingScreen');
    let showMain = document.getElementById('showMain');
    loadingScreen.classList.add('d-none');
    showMain.classList.remove('d-none');
}

