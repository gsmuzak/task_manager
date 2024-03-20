const url_plusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO2Zy2oUURCGG28Ll15WXl4iGMxqdhKokqpeNErc+wpKNrNL3McwCb7BSFfBRN248BmU+ABqVuayTrtRqmccMCTM6T59OS39w4GBYab/71z/Ux1FvXr18lYyTi6j8AooraNSCsJfUfgElX7lTfgEhPfz75TWH6fxw+FweClqW6R0D4VfofABKv8u1ugHKG2upvHdxo2vjpPbqLwLSllx4/82UMpAaYQTvNWIeVRaQ6VjX+PngBxBGj+tzfjS7vOrIPymauN4FkR4x55VqXmc4HVQ+lC3efzbhN/bM6vr+SbN6xziYzJOrnkDNDFt8OJ1MfIzn8bP2jKP80ZPSpln4ZsgfBgAwHGpLdb2+bIPvUilp5LwdiHzdjr6HFKVAyhlOMH77r1v8cBj2KsGwCnEppN5C1mWU0IDQOEDC40uvb/i9aC6ADRfC8sLAaaROEwAFH7pMgISMMDbxSOQXzzKmywrdAP4sngEHKNyGwAgfOiyBrJQAVD49P8HwM5PIen6Ipaub6Ma7kEGSi8WAljRKVQATOMHTmEOhL+HBgDC35yreRZdQwNApY2oqxcaFD6FPbjjDDAbhVEwAEpbUVE9Gic3QrjUg9JR6bqp1SpbB5A4KWV+DiG802Lvv458ZfdQENbmAejd4NPgSlSFrNCaF1yb6/m9yoq7Z4q8oyamzaCqnj9PVqusZ3ein94LtmDddNsOGG/jYv9BW7ZtR03LTkeLHWWy0/Q3tFH4hK1DswC4bHUby+x28bCb3ewFXpZ/Fv5s31kktlQZxGvWXr2i7usPseDsn8oBAbAAAAAASUVORK5CYII=";
const url_pencilIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiElEQVR4nO2Wy08TQRzH50Q5ezaEeNET8jC8JIFIfaQzuzMlcjQBgyBeKLsk8D9gODYIF28E293ZrgeTPtgW0uBBvXmoCRFxG1AU4wMjVB0zm1bbGg0kRmdlP8k32WQvn+/85rdZADw8PDz+JJtjY/W2ojzMK8p9/gzcRH5yss5W1bW8qjIeW1GebYVCJ4AbiCVXG6yF6KKtql9LBZwSqvpU+EnEkqsNNJXdNpayLBU179mK8qWihMiTiJXJl5KKGPHqSeRV9REQDagFTw+YIw/o0sqL8gI8Se1u2p6Y+F7CVtWXQDR5qJNtRAm7EhtaW0ykPlSXiGvmMi/hTENRhoCI8ogS1jN/nsnhfraQSH7+aRKRWOL5+PgIEIUAxY0leUgx657zs/aZLicw3McqJpHKvqfWSg8QSp7iV+Un316U5+mZ73Wuk7MTqewbY2m5DYgC0oLNiOLXv5OHFDvvrpqjj7VMphm46eRhUR5RvA8NOQhEQTbkpiMjjygmQCT5g955SPGeUPKHWVjodnlJJxiIgqvlISUth5GHhiwDoeR1suPJ/22QTjqQTt7+6uT5j1rV10YCooDcLB+guPNIyCOdfJJ0goBI8lAn71wpL0X7zh5GPqAFIRAFyc3ySCddB5WHFH+EhuwHooDcLL9rHTs+HLuQO5C8TnYRxb1AJJjlGyxYvvyw6d9wnTyHpWtus4yP7adrN/tnWwuukuewTM06L8CzZ9VuXb7VWqiWl7TgOSAikZmTZ6y5Oke+FD6Ja2bvhvDynOmpxtmOSzKLh+srSvCduG76c0LLc0KjnU/aLmL2o0TNenEnBvjXCYjO4ED3TuhGZ256qil85+apln/t4+Hh8R/zDfgiz4QBKGM9AAAAAElFTkSuQmCC";

const $textInputHeader = $('#textInput_header');
const $iniDateInputHeader = $('#iniDateInput_header');
const $endDateInputHeader = $('#endDateInput_header');
const $buttonCreateProject = $('#button--create--proyect');
const today = new Date().toISOString().split('T')[0];
let projects = [];

function setDefaultDateValues() {
    $iniDateInputHeader.attr("min", today).val(today);
    $endDateInputHeader.attr("min", today).val(today);
};

$(document).ready(function() {    
    setDefaultDateValues();
    //CREATE PROYECT
    $buttonCreateProject.click(function() {
        const name = $textInputHeader.val();
        if (!name) {
            return;
        }

        const startDate = $iniDateInputHeader.val();
        const endDate = $endDateInputHeader.val();

        const project = {
            name: name,
            startDate: startDate,
            endDate: endDate,
            creationDate: today,
            description: "",
            list: []
        };
        projects.push(project);
        $textInputHeader.val("");
        setDefaultDateValues();

        renderProj();
    });
});

function openProj(index) {
    renderProj(index);
    if ($('section').length) {
        $('section').remove();
     };
    $('main').prepend(`<section class="pj--open flex-container" id="openPJ_${index}"></section>`);
    var html = getOpenProjectTemplate(index) + templateDescription(index);
    $('section').append(html);
};

function getOpenProjectTemplate(index) {
    return `
    <div class="flex-container-row">
        <div class="pj--open--title andika-regular">
            <h3>${projects[index].name}</h3>
            <p>(fecha creación ${projects[index].creationDate})</p>
        </div>
        <div class="pj--open--date flex-container andika-regular">
            <label>Inicio</label>
            <h4>${projects[index].startDate}</h4>
        </div>
        <div class="pj--open--date flex-container andika-regular">
            <label>Final</label>
            <h4>${projects[index].endDate}</h4>
        </div>
    </div>    
    `;
};

function templateDescription(index) {
    var remaining = "X";
    var projectDescription = "Agrega una descripción";
    var icon = `<img src="${url_plusIcon}" width="30" height="30" />`;

    var temp = daysDifference(today,projects[index].startDate);
    if (temp > 0) {
        remaining = `El proyecto comienza en ${temp} días.`;
    } else {
        var diff = daysDifference(today,projects[index].endDate);
        if (diff > 0) {
            remaining = `Faltan ${diff} días para la finalización del proyecto.`;
        } else {
            remaining = (diff !== 0) ? 
                        `El proyecto finalizó hace ${Math.abs(diff)} días`:
                        `El proyecto finaliza hoy.`;
        }
    };

    if (projects[index].description !== "") {
        icon = `<img src="${url_pencilIcon}" width="30" height="30" />`;
        projectDescription = projects[index].description;
    };
    
    return `
    <div class="flex-container-row andika-regular">
        <button class="flex-container-row pj--open--description"
        onclick="addDescriptionToProyect(${index})">
            ${icon}
            <h2 class="andika-regular">${projectDescription}</h2>
        </button>
        <h3 class="pj--open--time--remaining">${remaining}</h3>
    </div>
    `;
};

function addDescriptionToProyect(index) {
    projects[index].description = prompt("Agrega/cambia la descripción");
    openProj(index);
};

function daysDifference(firstDate, secondDate){  
    var startDay = new Date(firstDate);  
    var endDay = new Date(secondDate);  
    var millisBetween = endDay.getTime() - startDay.getTime();  
    var days = millisBetween / (1000 * 3600 * 24);  
    return Math.round(days);  
}  

function renderProj(index = -1) {
    var projNumber = projects.length;
    $('main').empty();
    for(var i = 0; i < projNumber; i++) {
        if (index === i) {
            continue;
        };
        $('main').append(getProjectTemplate(i));
    };
};

function getProjectTemplate(index) {
    return `
    <div id="pjNumber_${index}" class="project--toolbar flex-container-row">
        <div class="project--toolbar--text flex-container andika-regular">
            <h1>${projects[index].name}</h1>
            <p>${projects[index].startDate} - ${projects[index].endDate}</p>
        </div>
        <button type="button" class="andika-bold" onclick="openProj(${index})">Expandir</button>
    </div>`;
};