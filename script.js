const createButton = document.getElementById('createProject');
const currentDate = new Date();
const dateString = currentDate.toISOString().split('T')[0];

const startDate = document.getElementById('startDate');
startDate.value = dateString;
startDate.min = dateString;

const endDate = document.getElementById('endDate')
endDate.value = dateString;
endDate.min = dateString;

const editForm = document.getElementById('edit__form');
const editFormText = document.getElementById('edit__form__text');
const editFormDate = document.getElementById('edit__form__date');
const editFormSubmit = document.getElementById('edit__form__submit');

let projects = [];

//Functions
function hideEditForm() {
    document.body.appendChild(editForm);
    editForm.style.visibility = "hidden";
};

createButton.addEventListener('click', () => {
    const projectName = document.getElementById('projectName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if (projectName === '') {
        console.log('Intento fallido');
        return;
    }

    const project = {
        name: projectName,
        creationDate: Date(),
        startDate: startDate,
        endDate: endDate
    };

    projects.push(project);
    renderProjects();
});

function renderProjects() {
    const projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML = '';

    projects.forEach( (project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = "__project__";
        projectElement.innerHTML = `
        <div id="proj__${index}">
            <span class="__project__modify">
                <button onclick='activatePopUpForm(${index},"rename")'>
                Renombrar</button>

                <button onclick='activatePopUpForm(${index},"change-start-date")'>
                Cambiar fecha inicio</button>

                <button onclick='activatePopUpForm(${index},"change-end-date")'>
                Cambiar fecha límite</button>
            </span>
        </div>
            <h3>${project.name}</h3> 
            <p>Fecha de inicio: ${project.startDate}</p>
            <p>Fecha de finalización: ${project.endDate}</p>
        `;
        projectContainer.appendChild(projectElement);
    });

    hideEditForm();
}

function activatePopUpForm(index,_type) {
    const elem = document.getElementById(`proj__${index}`);
    elem.appendChild(editForm);
    editForm.style.visibility = "visible";

    switch(_type) {
        case "rename":
        editFormText.style.display = "initial";
        editFormDate.style.display = "none";
        break;
        default:
        editFormDate.style.display = "initial";
        editFormText.style.display = "none";
        break;
    }
};