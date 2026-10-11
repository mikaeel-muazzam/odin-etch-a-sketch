console.log("Hello world");
function createDivs(num) {
    for(let i = 1; i <= num; i++) {
        console.log(`Created div no. ${i}`);
        const div = document.createElement("div");
        const container = document.querySelector("#container");
        div.textContent = i;
        container.appendChild(div);
    }
}

//create starting divs
createDivs(16);