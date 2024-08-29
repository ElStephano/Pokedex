function showSpecies(i, currentSpecies){        
    let bgContent = document.getElementById(`card${i}`);
    let content = document.getElementById(`content${i}`);
    let pokemonCardBg = document.getElementById(`pokemonCardBg${i}`);

    switch (currentSpecies) {
        case "grass":
            content.style.backgroundColor = "#6DBB58";
            bgContent.innerHTML += `<img src="./img/grass.png" class="speciesIcon">`;
            break;
        case "bug":
            content.style.backgroundColor = "#83DE7B";
            bgContent.innerHTML += `<img src="./img/bug.png" class="speciesIcon">`;
            break;
        case "fire":
            content.style.backgroundColor = "#D7243B";
            bgContent.innerHTML += `<img src="./img/fire.png" class="speciesIcon">`;
            break;
        case "water":
            content.style.backgroundColor = "#41B4EE";
            bgContent.innerHTML += `<img src="./img/water.png" class="speciesIcon">`;
            break;
        case "normal":
            content.style.backgroundColor = "#D5A45A";
            bgContent.innerHTML += `<img src="./img/normal.png" class="speciesIcon">`;
            break;
        case "poison":
            content.style.backgroundColor = "#D573EE";
            bgContent.innerHTML += `<img src="./img/poison.png" class="speciesIcon">`;
            break;
        case "electric":
            content.style.backgroundColor = "#F6E652";
            bgContent.innerHTML += `<img src="./img/electric.png" class="speciesIcon">`;
            break;
        case "ground":
            content.style.backgroundColor = "#C57341";
            bgContent.innerHTML += `<img src="./img/ground.png" class="speciesIcon">`;
            break;
        case "fighting":
            content.style.backgroundColor = "#FFFFD5";
            bgContent.innerHTML += `<img src="./img/fighting.png" class="speciesIcon">`;
            break;
        case "rock":
            content.style.backgroundColor = "#9C9483";
            bgContent.innerHTML += `<img src="./img/rock.png" class="speciesIcon">`;
            break;
        case "ghost":
            content.style.backgroundColor = "#101010";
            bgContent.innerHTML += `<img src="./img/ghost.png" class="speciesIcon">`;
            bgContent.style.color = "white";
            break;
        case "psychic":
            content.style.backgroundColor = "#574363";
            bgContent.innerHTML += `<img src="./img/psychic.png" class="speciesIcon">`;
            bgContent.style.color = "white";
            break;
        case "ice":
            content.style.backgroundColor = "#8BC5CD";
            bgContent.innerHTML += `<img src="./img/ice.png" class="speciesIcon">`;
            break;
        case "dragon":
            content.style.backgroundColor = "#EE9C39 !Important";
            bgContent.innerHTML += `<img src="./img/dragon.png" class="speciesIcon">`;
        case "fairy":
            content.style.backgroundColor = "#FFACA4";
            bgContent.innerHTML += `<img src="./img/fairy.png" class="speciesIcon">`;
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