$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
    });

    let projects = [];

    const currentDate = new Date();
    const dateString = currentDate.toISOString().split('T')[0];

    $('#startDate, #endDate').val(dateString).attr('min', dateString);
    $('#edit__form__date').val(dateString).attr('min', dateString);
    
    //Cerrar edit form
    $('#edit__form__close').on('click', () => {
        hideEditForm();
    });

    function hideEditForm() {
        $('body').append($('#edit__form'));
        $('#edit__form').css('visibility', 'hidden');
        $('#edit__form__text').val("");
        $('#edit__form__date').val(dateString).attr('min', dateString);
    };

    function projectCreate() {
        const projectName = $('#projectName').val();
        const startDate = $('#startDate').val();
        const endDate = $('#endDate').val();

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

        $('#startDate, #endDate').val(dateString).attr('min', dateString);
        $('#projectName').val("");
    }

    $('#createProject').click(function() {
        projectCreate();
    });

    function renderProjects() {
        //Avoid getting edit form deleted
        hideEditForm();

        $('#projectContainer').html('');
        $.each(projects, function(index, project) {
            const projectElement = $('<div></div>').addClass('__project__');
            projectElement.html(`
                <div id="proj__${index}">
                    <span class="__project__modify">
                        <button onclick='activatePopUpForm(${index},"rename")'
                        class ="edit--button">Renombrar</button>

                        <button onclick='activatePopUpForm(${index},"change-start-date")'
                        class ="edit--button">Cambiar fecha inicio</button>

                        <button onclick='activatePopUpForm(${index},"change-end-date")'
                        class ="edit--button">Cambiar fecha límite</button>
                    </span>
                </div>
                <h3>${project.name}</h3> 
                <p>Fecha de inicio: ${project.startDate}</p>
                <p>Fecha de finalización: ${project.endDate}</p>
            `);
            $('#projectContainer').append(projectElement);
        });
    }

    window.activatePopUpForm = function(index, _type) {
        const elem = $(`#proj__${index}`);
        elem.append($('#edit__form'));
        $('#edit__form').css('visibility', 'visible');
        $('#edit__form__number').text(index);

        switch(_type) {
            case "rename":
            $('#edit__form__type').text('RENAME');
            $('#edit__form__text').css('display', 'initial');
            $('#edit__form__date').css('display', 'none');
            break;

            case "change-start-date":
            $('#edit__form__type').text('START');
            $('#edit__form__date').css('display', 'initial');
            $('#edit__form__text').css('display', 'none');
            break;

            case "change-end-date":
            $('#edit__form__type').text('END');
            $('#edit__form__date').css('display', 'initial');
            $('#edit__form__text').css('display', 'none');
            break;
        }
    };

    function submitEditForm() {
        var _type = $("#edit__form__type").text();
        var index = Number($("#edit__form__number").text());;

        switch(_type) {
            case "RENAME":
            projects[index].name = $('#edit__form__text').val();
            break;
            case "START":
            projects[index].startDate = $('#edit__form__date').val();
            break;
            case "END":
            projects[index].endDate = $('#edit__form__date').val();
            break;
        }
        renderProjects();
    };
    //Subit edit form
    $('#edit__form__submit').on('click', () => {
        submitEditForm();
    });
});









/*
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
*/