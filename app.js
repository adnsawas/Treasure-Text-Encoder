const lettersMap = {
    A: { borders: 1, count: 1 },
    B: { borders: 1, count: 2 },
    C: { borders: 1, count: 3 },
    D: { borders: 2, count: 1 },
    E: { borders: 2, count: 2 },
    F: { borders: 2, count: 3 },
    G: { borders: 3, count: 1 },
    H: { borders: 3, count: 2 },
    I: { borders: 3, count: 3 },
    J: { borders: 4, count: 1 },
    K: { borders: 4, count: 2 },
    L: { borders: 4, count: 3 },
    M: { borders: 5, count: 1 },
    N: { borders: 5, count: 2 },
    O: { borders: 5, count: 3 },
    P: { borders: 6, count: 1 },
    Q: { borders: 6, count: 2 },
    R: { borders: 6, count: 3 },
    S: { borders: 7, count: 1 },
    T: { borders: 7, count: 2 },
    U: { borders: 7, count: 3 },
    V: { borders: 8, count: 1 },
    W: { borders: 8, count: 2 },
    X: { borders: 8, count: 3 },
    Y: { borders: 9, count: 1 },
    Z: { borders: 9, count: 2 },
};

const mainContainer = document.querySelector(".container");

function startEncding() {

    // Clear the main container
    mainContainer.innerHTML = "";

    // Get the sentence to encode
    let sentence = document.getElementById("textToEncode").value.toUpperCase();

    let words = sentence.split(" ");
    console.log(words);

    words.forEach(word => {
        let wordContainer = document.createElement("div");
        wordContainer.className = "word";

        for (index in word) {
            let letter = word[index];
            let letterContainer = generateLetterContainer(letter);
            wordContainer.appendChild(letterContainer);
        }

        mainContainer.appendChild(wordContainer);
    })
}


function generateLetterContainer(letter) {
    let letterContainer = document.createElement("div");
    letterContainer.className = "letter";

    // Add borders
    switch (lettersMap[letter].borders) {
        case 1:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "right");
            break;
        case 2:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "right");
            letterContainer = addBorder(letterContainer, "left");
            break;
        case 3:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "left");
            break;
        case 4:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "right");
            letterContainer = addBorder(letterContainer, "top");
            break;
        case 5:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "right");
            letterContainer = addBorder(letterContainer, "left");
            letterContainer = addBorder(letterContainer, "top");
            break;
        case 6:
            letterContainer = addBorder(letterContainer, "bottom");
            letterContainer = addBorder(letterContainer, "left");
            letterContainer = addBorder(letterContainer, "top");
            break;
        case 7:
            letterContainer = addBorder(letterContainer, "top");
            letterContainer = addBorder(letterContainer, "right");
            break;
        case 8:
            letterContainer = addBorder(letterContainer, "top");
            letterContainer = addBorder(letterContainer, "right");
            letterContainer = addBorder(letterContainer, "left");
            break;
        case 9:
            letterContainer = addBorder(letterContainer, "top");
            letterContainer = addBorder(letterContainer, "left");
            break;
        default:
            break;
    }

    // Add bullets
    switch (lettersMap[letter].count) {
        case 3:
            letterContainer.innerText += "•";
        case 2:
            letterContainer.innerText += "•";
        case 1:
            letterContainer.innerText += "•";
            break;
        default:
            break;
    }

    return letterContainer;
}

function addBorder(container, direction) {
    switch (direction) {
        case "top":
            container.style.borderTop = "3px solid black";
            break;
        case "right":
            container.style.borderRight = "3px solid black";
            break;
        case "left":
            container.style.borderLeft = "3px solid black";
            break;
        case "bottom":
            container.style.borderBottom = "3px solid black";
            break;
        default:
            break;
    }
    return container;
}


function showMapping() {
    document.getElementById("mappingDialog").showModal();
}

function closeDialog() {
    document.getElementById("mappingDialog").close();
}