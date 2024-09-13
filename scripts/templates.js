function showSpecies(i, currentSpecies) {
    let bgContent = document.getElementById(`card${i}`);
    let content = document.getElementById(`content${i}`);

    switch (currentSpecies) {
        case "grass":
            content.style.backgroundColor = "#6DBB58";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/grass.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "bug":
            content.style.backgroundColor = "#83DE7B";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/bug.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "fire":
            content.style.backgroundColor = "#D7243B";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/fire.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "water":
            content.style.backgroundColor = "#41B4EE";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/water.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "normal":
            content.style.backgroundColor = "#D5A45A";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/normal.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "poison":
            content.style.backgroundColor = "#D573EE";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/poison.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "electric":
            content.style.backgroundColor = "#F6E652";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/electric.png" class="speciesIcon">`;
            content.style.color = "black";
            break;
        case "ground":
            content.style.backgroundColor = "#C57341";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/ground.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "fighting":
            content.style.backgroundColor = "#FFFFD5";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/fighting.png" class="speciesIcon">`;
            content.style.color = "#946A5A";
            break;
        case "rock":
            content.style.backgroundColor = "#9C9483";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/rock.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "ghost":
            content.style.backgroundColor = "#101010";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/ghost.png" class="speciesIcon">`;
            bgContent.style.color = "white";
            break;
        case "psychic":
            content.style.backgroundColor = "#574363";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/psychic.png" class="speciesIcon">`;
            bgContent.style.color = "white";
            break;
        case "ice":
            content.style.backgroundColor = "#8BC5CD";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/ice.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "dragon":
            content.style.backgroundColor = "#EE9C39";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/dragon.png" class="speciesIcon">`;
            content.style.color = "white";
            break;
        case "fairy":
            content.style.backgroundColor = "#FFACA4";
            content.style.opacity = "0.8";
            bgContent.innerHTML += `<img src="./img/fairy.png" class="speciesIcon">`;
            break;
    }
}

function getImages(i) {
    let image = pokemonData[i].sprites.front_default;
    pokemonImages.push(image);
}

function getSpecies(i) {
    let names = pokemonData[i].types[0].type.name;
    pokemonSpecies.push(names);
}

function getMoreSpecies(i) {
    let names = pokemonData[i].types[0].type.name;
    pokemonSpecies.push(names);
}

function getMoreImages(i) {
    
    let names =  pokemonData[i].sprites.front_default;
    pokemonImages.push(names);
}

function currentCardBg(i) {
    let currentCard = document.getElementById(`pokemonCardBg${i}`);
    currentPokemon = pokemonSpecies[i];
    if (currentPokemon == "grass") {
        currentCard.classList.add("grass");
    } else if (currentPokemon == "bug") {
        currentCard.classList.add("bug");
    } else if (currentPokemon == "fire") {
        currentCard.classList.add("fire");
    } else if (currentPokemon == "water") {
        currentCard.classList.add("water");
    } else if (currentPokemon == "normal") {
        currentCard.classList.add("normal");
    } else if (currentPokemon == "poison") {
        currentCard.classList.add("poison");
    } else if (currentPokemon == "electric") {
        currentCard.classList.add("electric");
    } else if (currentPokemon == "ground") {
        currentCard.classList.add("ground");
    } else if (currentPokemon == "fighting") {
        currentCard.classList.add("fighting");
    } else if (currentPokemon == "rock") {
        currentCard.classList.add("rock");
    } else if (currentPokemon == "ghost") {
        currentCard.classList.add("ghost");
        currentCard.style.color = "white";
    } else if (currentPokemon == "psychic") {
        currentCard.classList.add("psychic");
        currentCard.style.color = "white";
    } else if (currentPokemon == "ice") {
        currentCard.classList.add("ice");
    } else if (currentPokemon == "dragon") {
        currentCard.classList.add("dragon");
    } else if (currentPokemon == "fairy") {
        currentCard.classList.add("fairy");
    }
}

function disableScroll() {
    let body = document.querySelector('body');
    body.classList.add('stop-scroll');
}

function ableScroll() {
    let body = document.querySelector('body');
    body.classList.remove('stop-scroll');
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function opacityMouseOn(i) {
    let content = document.getElementById(`content${i}`);
    content.style.opacity = 1;
}

function opacityMouseOut(i) {
    let content = document.getElementById(`content${i}`);
    content.style.opacity = 0.8;
}

function showMorePokemon(i) {
    let content = document.getElementById("main-container");
    let currentPokemon = allPokemon[i][0].name; 
    let firstLetter = currentPokemon.charAt(0).toUpperCase();
    let smallLetters = currentPokemon.slice(1);
    let finalPokemonName = firstLetter + smallLetters;
    let currentSpecies = pokemonSpecies[i];

    content.innerHTML += renderMoreContentHtml(i, finalPokemonName);
    showSpecies(i, currentSpecies)            
}

function hideLoadingScreen() {
    let loadingScreen = document.getElementById('loadingScreen');
    let showMain = document.getElementById('showMain');
    loadingScreen.classList.add('d-none');
    showMain.classList.remove('d-none');
}

function showLoadingScreen() {
    let loadingScreen = document.getElementById('loadingScreen');
    let showMain = document.getElementById('showMain');
    loadingScreen.classList.remove('d-none');
    showMain.classList.add('d-none');
}