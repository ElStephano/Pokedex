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
    let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
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

    for (let i = 0; i < 30; i++) {

        let currentPokemon = allPokemon[i].name;
        let firstLetter = currentPokemon.charAt(0).toUpperCase();
        let smallLetters = currentPokemon.slice(1);
        let finalPokemonName = firstLetter + smallLetters;

        let currentSpecies = pokemonSpecies[i];

        content.innerHTML += renderContentHtml(i, finalPokemonName);
        showSpecies(i, currentSpecies)
    }

}

async function loadMorePokemon() {
    showLoadingScreen();
    let startAmount = allPokemon.length;
    let endAmount = startAmount + 20;
    for (let i = startAmount; i < endAmount; i++) {
        let x = i + 1;
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${i}`);
        let pokemondata = await pokemon.json();
        allPokemon.push(pokemondata.results);

        let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`);
        let allData = await data.json();
        pokemonData.push(allData);
        getMoreSpecies(i);
        getMoreImages(i);
        showMorePokemon(i);
    }
    hideLoadingScreen();
}

function showData(i) {
    let showCard = document.getElementById('showCard');
    showCard.innerHTML = '';
    showCard.classList.remove('d-none');
    showCard.innerHTML += showDataHtml(i);
    currentCardBg(i);
    disableScroll();
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
        table.innerHTML += `<td>${finalAbility}</td>`;
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
    ableScroll();
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
    let input = document.getElementById('input').value.toLowerCase();
    for (let i = 0; i < allPokemon.length; i++) {
        const elementName = allPokemon[i].name;
        const elementNumber = allPokemon[i];

        let idNumber = input - 1;
        let pokemonId = allPokemon[idNumber];
        let pokemonName = elementName.search(input);
        if (pokemonName >= 0 | pokemonId == elementNumber) {
            let pokemonNumber = i;
            showData(pokemonNumber);
            break;
        }
    }
    document.getElementById('input').value = "";
}

function searchSuggestions() {
    let input = document.getElementById('input').value.toLowerCase();
    let suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
    if (input.length < 3) {
        return;
    }
    let suggestions = allPokemon.filter(pokemon => pokemon.name.includes(input));

    suggestions.forEach(pokemon => {
        let suggestionItem = document.createElement('li');
        suggestionItem.textContent = capitalizeFirstLetter(pokemon.name);
        suggestionItem.onclick = () => {
            document.getElementById('input').value = pokemon.name;
            searchPokemon();
            suggestionsContainer.innerHTML = '';
        };
        suggestionsContainer.appendChild(suggestionItem);
    });
}