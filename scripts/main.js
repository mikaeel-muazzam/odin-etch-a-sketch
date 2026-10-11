function createDivs(num) {
    for(let i = 1; i <= (num ** 2); i++) {
        const div = document.createElement("div");
        const container = document.querySelector("#container");
        const containerLength = num * divLength + (num - 1) * DIV_GAP //length of container to accommodate equal rows 
        
        container.setAttribute("style", `width: ${containerLength}px`);
        div.setAttribute("style", `width: ${divLength}px; height: ${divLength}px`);
        div.classList = "item";
        div.id = i;

        container.appendChild(div);
    }

    //event listeners
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("mouseover", changesColor);
    });
}

function removeDivs() {
    const divs = document.querySelectorAll(".item");
    divs.forEach((div) => {
        div.remove();
    });
}

function changesColor(ev) {
    const targetDiv = ev.target;
    targetDiv.classList = "item changed";
}

function buttonClicked() {
    //take input from user
    let input = parseInt(prompt("Enter row length;"));
    if(input > 64) input = 64; //max input 64 rows;
    regenerateDivs(input);
}

function regenerateDivs(rows) {    
    removeDivs();
    createDivs(rows);
}

//create starting divs
const rowLength = 16;
const divLength = 24;
const DIV_GAP = 6;
createDivs(rowLength);

//event listeners
const button = document.querySelector("button");
button.addEventListener("click", buttonClicked);