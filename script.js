const url_plusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO2Zy2oUURCGG28Ll15WXl4iGMxqdhKokqpeNErc+wpKNrNL3McwCb7BSFfBRN248BmU+ABqVuayTrtRqmccMCTM6T59OS39w4GBYab/71z/Ux1FvXr18lYyTi6j8AooraNSCsJfUfgElX7lTfgEhPfz75TWH6fxw+FweClqW6R0D4VfofABKv8u1ugHKG2upvHdxo2vjpPbqLwLSllx4/82UMpAaYQTvNWIeVRaQ6VjX+PngBxBGj+tzfjS7vOrIPymauN4FkR4x55VqXmc4HVQ+lC3efzbhN/bM6vr+SbN6xziYzJOrnkDNDFt8OJ1MfIzn8bP2jKP80ZPSpln4ZsgfBgAwHGpLdb2+bIPvUilp5LwdiHzdjr6HFKVAyhlOMH77r1v8cBj2KsGwCnEppN5C1mWU0IDQOEDC40uvb/i9aC6ADRfC8sLAaaROEwAFH7pMgISMMDbxSOQXzzKmywrdAP4sngEHKNyGwAgfOiyBrJQAVD49P8HwM5PIen6Ipaub6Ma7kEGSi8WAljRKVQATOMHTmEOhL+HBgDC35yreRZdQwNApY2oqxcaFD6FPbjjDDAbhVEwAEpbUVE9Gic3QrjUg9JR6bqp1SpbB5A4KWV+DiG802Lvv458ZfdQENbmAejd4NPgSlSFrNCaF1yb6/m9yoq7Z4q8oyamzaCqnj9PVqusZ3ein94LtmDddNsOGG/jYv9BW7ZtR03LTkeLHWWy0/Q3tFH4hK1DswC4bHUby+x28bCb3ewFXpZ/Fv5s31kktlQZxGvWXr2i7usPseDsn8oBAbAAAAAASUVORK5CYII=";
const url_pencilIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiElEQVR4nO2Wy08TQRzH50Q5ezaEeNET8jC8JIFIfaQzuzMlcjQBgyBeKLsk8D9gODYIF28E293ZrgeTPtgW0uBBvXmoCRFxG1AU4wMjVB0zm1bbGg0kRmdlP8k32WQvn+/85rdZADw8PDz+JJtjY/W2ojzMK8p9/gzcRH5yss5W1bW8qjIeW1GebYVCJ4AbiCVXG6yF6KKtql9LBZwSqvpU+EnEkqsNNJXdNpayLBU179mK8qWihMiTiJXJl5KKGPHqSeRV9REQDagFTw+YIw/o0sqL8gI8Se1u2p6Y+F7CVtWXQDR5qJNtRAm7EhtaW0ykPlSXiGvmMi/hTENRhoCI8ogS1jN/nsnhfraQSH7+aRKRWOL5+PgIEIUAxY0leUgx657zs/aZLicw3McqJpHKvqfWSg8QSp7iV+Un316U5+mZ73Wuk7MTqewbY2m5DYgC0oLNiOLXv5OHFDvvrpqjj7VMphm46eRhUR5RvA8NOQhEQTbkpiMjjygmQCT5g955SPGeUPKHWVjodnlJJxiIgqvlISUth5GHhiwDoeR1suPJ/22QTjqQTt7+6uT5j1rV10YCooDcLB+guPNIyCOdfJJ0goBI8lAn71wpL0X7zh5GPqAFIRAFyc3ySCddB5WHFH+EhuwHooDcLL9rHTs+HLuQO5C8TnYRxb1AJJjlGyxYvvyw6d9wnTyHpWtus4yP7adrN/tnWwuukuewTM06L8CzZ9VuXb7VWqiWl7TgOSAikZmTZ6y5Oke+FD6Ja2bvhvDynOmpxtmOSzKLh+srSvCduG76c0LLc0KjnU/aLmL2o0TNenEnBvjXCYjO4ED3TuhGZ256qil85+apln/t4+Hh8R/zDfgiz4QBKGM9AAAAAElFTkSuQmCC";
const url_minusIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVR4nO2ZzWoUQRDHf0aM8eyaQGIwxIfw66AsvoEmxhdQ4k2jKHpVVr1KAjnHRAK+g7pGERE9xJh30Ln6SbKRhlooitGd6Y/ZoPODgmXo+VdNT3VPVS/U1NTU/CscBWaBFeA9kAG/xDK5tixjJtkl7AVmgDWgA+wUtI7ccwEY6FfwZ4HNEkH/yTaAZpWBHwAWcwLZAp4D14BjwDCwT8z9Pg7MAS9krL1/ARhKHfwh4K1x/BW4BzRK6rSAb0brTUmd0sF/Mg6fAKMBmmPAak5KNVKkjZ55lwI3IurfBLbNm4iaTosm+HPE57x5iPmYu41+xTFn3nLL+GrG2Oc3Tc6nZtWsh6DvxEUl5naMw6RnVHa2rt/pELFXSugu1dFSftshtU1HLdxk+3MOw+pj52KYwIMrahaeUT1t5f+yj8CyErhK9cwp/0s+Ah+UgKttquak8v/ORyBTAq6MKPI1LWO9GFH+P/s8wE8lMFhgfNkyuhf71dgf/+UDZCVT6H5J60VwCulF7JqRqjkVuoj1Nuq6rKq5HrqNzioB1wZWzZryf8lHYNKUEkXWQapS4kiMWXAFVlU8jPX2Z5TQd2Cc9IyZcnoqtKHZUGKu2UjJHuCp8rce4+DrtDl1K1IG+HIndkvZZUGJbksDHptp09Q/iik+JEcd+iFcAx4rbW6b4F9LKRGVhlkP3TUR0iePm5x39hE4SCIa5k10m/2W7N1FcWMfyM62Y2Y+WfA6neZzqsstaQNdCXBCirFBsRFpUNyZ0sucw92O5Hz0tPkbzZyU8rF14Ax9YkB2j7bHHxzunql+/sFhmZDTg8dS/mbSFDn7IteWpDDzOiapqampYdfxG/rBWqh3B3JwAAAAAElFTkSuQmCC";
const url_plusIcon2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC70lEQVR4nO2Z304TURDGfymIeidQaKQ8hgbwLQzEVzBiE2PBNnLlBVYu1eoziH8aiLdcaJUXkPAAVmoCGrkrLaalZpPhZnPOdnb3dKlJv2QSsj3znZndmTlzBhhiiCFcIAXMA2tABdgHjoG/Isfy7APwGJgTnQtHFigBB0A3pPwQXY8jcUwAr4FWBMP90gLKwpkI7gC/HBjuF49zqZ+Gj8pb7/ZZyrKXU1wFPvbYuA18BvKSpNPAJZFpSfK8rGn34NoGrrgyfrSH8Q3gKZAOwZmWBG70cGLEhQNBYfMGmInBnQU2A/hfukhYW7g8wh0KQMey12JU0glLtWkrSaeAByKTivWLFieOgHGXoaN585O+w62mNKLgKpSylkPKi3kN7hl07yp13xp0m2Fz7Zml2mhJnhj0vWfal3di0F/XGp+SPiUyQUwHkBLr169pG8B5S+KmE3RgynLY3dQorxkUP4XY3IUDHqoGjiIKVAyKD0negbyB471Gcd+g6IWV6TPn5K34ZcfAsWNZmxMuPxYMHHsaB/4YFP0bZICfAS1AWKkLp38P/7rfGgdODYpjvjWrDo3viqz49rhsWNMaZAfyrhzQhlDdofEHLkNIm8TeubAMbBhk18Cxa1m7bDljbkVN4ori8yZRRlcNHO+iHmTVC3Dgq4HD61Z7Ym6AW4kbcZq5UoIObBj0v4eZ5pUs7XQ2AQdm47bTQRca7wKuQc6gez/mheY6IfHKUrMLyhiu++q8JoeKlj1f4PBS31Fe6jPSHqzIYCvqpf4QuEZELFneSEdb0pQoWow/A27HJS8HtACbMcfjs3I42fif42i0uB2wSUOqlqmnt2FKBgcnAbxbrkaLyKA1yInzw64qMb8gOTAmkpFn3m9fFMPdLZfD3XOMyICp20c5k7Bx9uZt1eKoD8YfukhYLcblazQdGN6UOh+5VMbBjBzxtQiGezrrUU7YfiAlQ6eijD725GZ3KuL9/U1+K0pXORD/Zh1iCP5z/AM99NGRfYm82gAAAABJRU5ErkJggg==";
const url_plusIcon3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTUlEQVR4nO2aTU8UQRCGHwPCGoy4Cyse5Wgw6p9QQVGBG4o3DV5EsnpVOaMnExJ+h4YQNGpI1IgfqBcVgZPKwYg3FwiaMRXfSTpxv3d2ZpbwJp0sVE9113R1dfVbA9vYukgBfcBtYAr4BPwENtTs90fJrM9ZIElMkAAuAA+AP4BXZvsNzABDQHMUBuwCrgErzqTWgcfADa3MQb3xnWpJ/c9kN4EnesZ//huQ0csJBaeAZWcCr4CLQGsFuvYCl4DXjr4loIcawt7UpDPgG+B4gPq7gbeO/olarM5+TdwG+AVcARqCHoR/Oq8CWWe1O4JS3qnl9hR1DlF7HAYWNOai5lAV0o7Cl0A74SEJPNXYy/KKipBw3Ok50EL4aAFeOG5W0Z6ZdNzJDruo0OZ4hQWAskOsv7HD2BOl7Jms5mTRreTDzj8nLDpVCz+cVotRZ/OX5GLXnXOiIUaGNALvpMuMKohmpQrW+RjBIChDDCela6XYqgw5EYIYGrLDiaTnCnV8qE6WO8XREMOw9E2TByml1esVJoBhGZLU/WYz3zz7NeAjgkXQhhhmpfM0OXBHQrtPxN2QMekczyWckvBMHRjSL533cgk/S2i3uLgb0iWdxgv8h1UJU3VgSLt0fs8l3JCwqYzJ1aqVcnD7PMHWNWS1jlwrXci1tsxmn5LQGMC4GzJQKPz6B6KRZ3V9IPZJaGxhvaQovfmSMT9pNAYwroaknKRxT75OMxrUaMy4GnJZ+mxP58V5dTIuNq4Xq3npGyx20HxVxxMxNKRXur6UUobIqPN8DMmH99I1UsoDCYfrNUI5LoZkpGehnKJQjx7KihyLGkeBNc2p7FLGhPMGjLaMCmmRcjaXu5UoSIgW8kQkR0Fi7wbmNIe5auqMaSVmflnB/g4LKeCZxl4KouDT6SytudkRwtkTixrTsvIDQSnucNwsK+7VwmHQaFR0WnPcaV/QgyScAOCJUO4J8MS2UoZ/Tvgbu6a1925n2T1xscMVfsWQUu7kpx2eXCnIanHR1Rl10hlPGaml17fEO3UpbDeptaloNKA+sw5P4KcdI1F9AdEsVnxaV4BySYZNZbGDURmQC63iYu3Wdl+1xx/ORzX2+4Oup+Pqm/c+sQ3qHH8BO95tuSa+KVIAAAAASUVORK5CYII=";

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
function daysDifference(firstDate, secondDate){  
    var startDay = new Date(firstDate);  
    var endDay = new Date(secondDate);  
    var millisBetween = endDay.getTime() - startDay.getTime();  
    var days = millisBetween / (1000 * 3600 * 24);  
    return Math.round(days);  
}  

//CREATE PROYECT
$(document).ready(function() {    
    setDefaultDateValues();
    
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
//Open project
function openProj(index) {
    renderProj(index);
    if ($('section').length) {
        $('section').remove();
     };
    $('main').prepend(`<section class="pj--open flex-container" id="openPJ_${index}"></section>`);
    var html = getOpenProjectTemplate(index) + templateDescription(index) + templateListContainer();
    $('section').append(html);
    $('.list--container').append( templateNewTask() );
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
    <div class="flex-container-row andika-regular pj--subsection">
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

function templateListContainer() {
    return `
        <div class="flex-container andika-regular">
            <ul class="list--container"></ul>
        </div>
    `;
}

function templateNewTask() {
    return`
        <li class="list--item--new animation__fast" onclick="createNewTask()">
            <img src="${url_plusIcon3}" width="30"height="30" class="animation__mid"/>
            Tarea nueva...
        </li>
        `;
};
//Render Project
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

//Render lists
function createNewTask() {
    $('.list--item--new').remove();
    var html = templateAddTask();
    $('.list--container').append(html);
};

function templateAddTask() {
    return `
    <li class="list--item--add">
                            
        <input class="input--text" type="text" placeholder="Nombre de la tarea nueva..." />

        <form id="task--priority--selector" class="andika-regular">

            <h3>Prioridad:</h3>
            
            <img src="${url_minusIcon}" class="animation__fast"/>
            
            <h4>Alta</h4>
            
            <img src="${url_plusIcon2}" class="animation__fast"/>
            
        </form>
    </li>
    `;
}