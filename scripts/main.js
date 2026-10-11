console.log("Hello world");
function createDivs(num) {
    for(let i = 1; i <= (num ** 2); i++) {
        console.log(`Created div no. ${i}`);
        const div = document.createElement("div");
        const container = document.querySelector("#container");
        const containerLength = num * divLength + (num - 1) * DIV_GAP //length of container to accomodate equal rows 
        
        container.setAttribute("style", `width: ${containerLength}px`);
        div.setAttribute("style", `width: ${divLength}px; height: ${divLength}px`);

        
        div.classList = "item";
        div.id = i;

        container.appendChild(div);
    }
}

function changesColor(ev) {
    const targetDiv = ev.target;
    console.log(targetDiv.id);
    targetDiv.classList += " changed";
}

function buttonClicked() {
    console.log("Button clicked");
}

//create starting divs
const rowLength = 16;
const divLength = 24;
const DIV_GAP = 12;
createDivs(rowLength);

//event listeners
const items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.addEventListener("mouseover", changesColor);
});

const button = document.querySelector("button");
button.addEventListener("click", buttonClicked);