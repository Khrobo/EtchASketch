// Variables
let singleBlock = document.querySelector(".block");
let size = document.querySelector(".change");
let clear = document.querySelector(".clear");
let blockParent = document.querySelector(".grid");

// Event listeners
window.addEventListener("load", loadBlocks); // Loads the window and adds the blocks
clear.addEventListener("click", clearColors); // Clears the blocks
size.addEventListener("click", blockSize); // Changes the sizes of the blocks

// Functions
function loadBlocks() { 
    for (let i=0; i<25; i++) {
        let blocks = document.createElement("div"); // Variable inside of loop to create multiple blocks
        blocks.addEventListener("mouseover", blockHover) // Adds the mouseover event to the blocks when created
        blockParent.append(blocks); // Appends everything into the parent div
        blocks.className = "block"; // Gives the blocks a class name of block
    }
}

function blockHover(e) {
    let randomColor = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Add a random array of colors or an array of letters and colors that are randomly picked
    let color = "#";
    console.log(e.target);
    for (let i=0; i<6; i++) {
        color += randomColor[Math.floor(Math.random() * randomColor.length)];
    }
    e.target.style.background = color;
}

function clearColors(e) {
    console.log("Clear");
    console.log(e.target.parentElement.nextElementSibling.children[0]);
    let blockColor = document.querySelectorAll(".block");
    for (let i=0; blockColor.length; i++) {
        blockColor[i].style.background = "transparent";
    }
}

function blockSize() {
    let blockNum = Number(prompt("Enter an amount!")); // Gives a promopt when clicked
    let promptValue = blockNum * blockNum; // Vsriable to have the amount of blocks to make
    let grids = blockNum; // Uses the value entered to make the rows and columns
    
    if (blockParent.firstChild && promptValue > 1 || promptValue < 64) {
        console.log("Remove")
        while (blockParent.firstChild) {
            blockParent.removeChild(blockParent.firstChild);
        }
    }
    if (blockNum != isNaN && promptValue > 1 || promptValue < 64) {
        console.log(promptValue); // Checks for the value numbers * value entered
        blockParent.style.gridTemplateColumns = `repeat(${grids}, 1fr)`;
        blockParent.style.gridTemplateRows = `repeat(${grids}, 1fr)`;
        for (let i=0; i<promptValue; i++) {
            let blocks = document.createElement("div");
            blocks.addEventListener("mouseover", blockHover);
            blockParent.append(blocks);
            blocks.className = "block";
            console.log(blocks);
        }
        console.log(promptValue)
    } else if (blockNum == isNaN && promptValue < 1 || promptValue > 64) {
        alert("The number value is 1-64!");
        return;
    }
}



