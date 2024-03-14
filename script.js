const addButton = document.getElementById("__new");
const addName = document.getElementById("__name");
const divArray = [];

function changeStyle(elem) {
    if (elem.className === "_locked") {
        elem.setAttribute("class","_unlocked");
    } else {
        elem.setAttribute("class","_locked");
    }
};

function crearNuevoDiv() {
    if (addName.value !== "") {
        // Create div
        const divNuevo = document.createElement('div');
        divNuevo.className = "__task";
        divNuevo.id = `__${addName.value}`;
            //Create text with name
            const divName = document.createElement('h2');
            divName.innerText = addName.value;
            divNuevo.appendChild(divName);
        //Clip it to header
        const header = document.querySelector('header');
        header.appendChild(divNuevo);
        //Clear input
        addName.value = "";
        //Add div to array
        divArray.push(divNuevo.id);
        
        console.log(`new task created: ${divNuevo.id} - array length: ${divArray.length}`);
    } else {
        console.log("No name");
    }
}

addButton.addEventListener("click", () => {
    crearNuevoDiv();
});