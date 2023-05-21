let numOfGrid = 16;
let newGrid = []
const gridContainer = document.querySelector('#grid-cont');
const clearButton = document.querySelector("#clear");
const resetButton = document.querySelector("#reset");
const rainbowButton = document.querySelector("#rainbow");
let isRainbow = false;

for (x = 0; x < numOfGrid * numOfGrid; x++) {
    newGrid[x] = document.createElement("div");
    newGrid[x].classList.add("grid-item");
    gridContainer.appendChild(newGrid[x]);
}

function getRGBNumber() {
    let rand = Math.floor(Math.random() * 255);
    return rand;
}

function toggleRainbow() {
    if (isRainbow == true) {
        //rainbowButton.style.borderWidth = "2px";
        rainbowButton.style.backgroundColor = "gray";
        //rainbowButton.style.color = "white";
    } else if (isRainbow == false) {
        //rainbowButton.style.borderWidth = "0px";
        rainbowButton.style.backgroundColor = "buttonface";
        //rainbowButton.style.color = "buttontext";
    }

}

function generateRandomRGB() {
    let rgb1 = getRGBNumber();
    let rgb2 = getRGBNumber();
    let rgb3 = getRGBNumber();

    return "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";

}

for (i = 0; i < newGrid.length; i++) {
    const newx = i;
    newGrid[i].addEventListener("mouseover", () => {
        //console.log(generateRandomRGB());
        //newGrid[newx].style.backgroundColor = generateRandomRGB();

        if (isRainbow == true) {
            newGrid[newx].style.backgroundColor = generateRandomRGB();
        } else {
            newGrid[newx].style.backgroundColor = "black";
        }



        //THE ABOVE IS WHERE TO SET THE COLOR
        //newGrid[i].classList.remove("grid-item");
        //newGrid[i].classList.add("brown");
    });
}

rainbowButton.addEventListener("click", () => {
    if (isRainbow == false) {
        isRainbow = true;
        toggleRainbow();
    } else if (isRainbow == true) {
        isRainbow = false;
        toggleRainbow();
    }
});


clearButton.addEventListener("click", () => {
    for (i = 0; i < newGrid.length; i++) {
        newGrid[i].style.backgroundColor = "white";
    }
});

resetButton.addEventListener("click", () => {

    numOfGrid = prompt("Please enter the number of squares (max: 100)");
    while (numOfGrid > 100) {
        numOfGrid = prompt("Please enter the number of squares (max: 100)");
    }
    for (i = 0; i < newGrid.length; i++) {
        gridContainer.removeChild(newGrid[i]);
    }
    newGrid = [];
    gridContainer.style.gridTemplateRows = "repeat(" + numOfGrid + ", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(" + numOfGrid + ",1fr)";
    console.log(newGrid.length);
    for (x = 0; x < numOfGrid * numOfGrid; x++) {
        newGrid[x] = document.createElement("div");
        newGrid[x].classList.add("grid-item");
        gridContainer.appendChild(newGrid[x]);
    }
    for (i = 0; i < newGrid.length; i++) {
        const newx = i;
        newGrid[i].addEventListener("mouseover", () => {
            if (isRainbow == true) {
                newGrid[newx].style.backgroundColor = generateRandomRGB();
            } else {
                newGrid[newx].style.backgroundColor = "black";
            }

        });
    }

})




