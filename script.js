const input_name = document.getElementById('projectName');
const input_category = document.getElementById('category');
const input_date_start = document.getElementById('startDate');
const input_date_end = document.getElementById('endDate');
const input_create_button = document.getElementById('createButton');
const main_container = document.getElementById('main');
const input_week_form = document.getElementById('activityForm');
const input_date_form = document.getElementById('projectForm');
const today = new Date();
const getTodayDate = () => {
  return today.toISOString().split('T')[0];
};

const categories = ["ninguna", "hábito", "actividad","proyecto"];
const errorMsg = ['Por favor ingrese un nombre para su proyecto',
                  'Tienes que seleccionar por lo menos un día de la semana'];
const weekDays = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
// Constructor
let projects = [];
function Project(name, category, date, week, start, end) {
  this.name = name;
  this.category = category;
  this.date = date;
  this.description = "";
  this.week = week;
  this.start = start;
  this.end = end;
};

// Runtime
window.onload = function() {
  input_date_start.setAttribute('min', getTodayDate());
  input_date_start.value = getTodayDate();
  input_date_end.setAttribute('min', getTodayDate());
  input_date_end.value = getTodayDate();

  //Cargar opciones
  categories.forEach( function(index) {
    input_category.innerHTML += `<option value="${index}">${index}</option>`;
  });
  weekDays.forEach( function(index) {
    input_week_form.innerHTML += `<input type="checkbox" name="days" value="${index}">${index}`;
  });
  // Actualizar la fecha mínima de endDate cuando se cambia startDate
  input_date_start.onchange = function() {
    input_date_end.setAttribute('min', this.value);
    if (dayDiference(this.value,input_date_end.value) > 0) {
      input_date_end.value = this.value;
    };
  };
};

// UI functions
input_category.addEventListener('change', function() {
  switch(input_category.value) {
    case categories[2]: //actividad
      input_week_form.style.display = 'block';
      input_date_form.style.display = 'none';
    break;
    case categories[3]:
      input_week_form.style.display = 'none';
      input_date_form.style.display = 'block';
    break;
    default:
      input_week_form.style.display = 'none';
      input_date_form.style.display = 'none';
    break;
  }
});
input_create_button.addEventListener('click', createProject);

// Project UI
function saveDescription(index) {
  console.log(index);
  const textarea = document.getElementById(`txtarea${index}`);
  projects[index].description = textarea.value;
  textarea.setAttribute("disabled", "true");
};
function deleteProject(index) {
  console.log(index);
  const c = confirm("¿Seguro que quieres eliminar el proyecto?");
  if (c) {
      projects.splice(index, 1);
      renderProjects();
  }
};
function renderProjects() {
  main_container.innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    let projectDiv = uiTemplates(0,i);
    switch(projects[i].category) {
      case categories[2]: projectDiv += uiTemplates(1,i); break;
      case categories[3]: projectDiv += uiTemplates(2,i); break;
    };
    projectDiv += uiTemplates(3,i);
    //List-container and end of Project-ui
    main_container.innerHTML += projectDiv + uiTemplates(4,i);
  };
  //Add functions to save buttons
  const save_btns = document.getElementsByClassName('save-button'); 
  for(let i = 0; i < save_btns.length; i++){
    const index = save_btns[i].id.toString().replace("saveButton","");
    save_btns[i].addEventListener('click', () => { saveDescription(parseInt(index)) });
  };
  //Add functions to delete buttons
  const del_btns = document.getElementsByClassName('delete-button');
  for(let j = 0; j < del_btns.length; j++){
    const index = del_btns[j].id.toString().replace("deleteButton","");
    del_btns[j].addEventListener('click', () => { deleteProject(parseInt(index)) });
  };
};
// Project functions
function createProject() {
  let name = input_name.value;
  let category = input_category.value;
  let week = '';
  let start = '';
  let end = '';

  if (name === '') { alert(errorMsg[0]); return; }
  const input_week_checkboxes = document.querySelectorAll('input[type="checkbox"]');
  switch(category){
    case categories[2]:
      //Actividad
      const _days = input_week_checkboxes.length;
      let stop = true;
      for (let i = 0; i < _days; i++) {
        const _day = input_week_checkboxes[i].value;
        if (input_week_checkboxes[i].checked) {
          week += _day.toUpperCase();
          stop = false;
        } else week += _day;

      };
      if (stop) { alert(errorMsg[1]); return; };
    break;

    case categories[3]:
      //Proyecto
      start = input_date_start.value;
      end = input_date_end.value;
    break;
  };

  let project = new Project(name, category, getTodayDate(), week, start, end);
  projects.push(project);

  input_name.value = '';
  renderProjects();
};

//HTML Templates
const uiTemplates = (pos = 0,index = 0) => {
  const array = [
    `
      <div id="project${index}" class="project-ui">
        <div class="project-content">
          <div class="project-info">

            <h1>${projects[index].name}</h1>
            <h6>Fecha de creación ${projects[index].date}</h6>    
    `//first part of UI
    ,
    `
            <ul class="week-list">
              <li>D</li> <li>L</li> <li>M</li>
              <li>M</li> <li>J</li> <li>V</li>
              <li>S</li>
            </ul>
    `//week list
    ,
    `
            <div>Inicio - ${projects[index].start}</div>
            <div>Final - ${projects[index].end}</div>
            <p>${renderDaysRemaining(projects[index].start,projects[index].end)}</p>
    `//proyect dates
    ,
    `
            <textarea id="txtarea${index}"
            placeholder="Descripción..."
              >${projects[index].description}</textarea>
            <button id="saveButton${index}"
              class="save-button">Guardar</button>
            <button id="deleteButton${index}"
              class="delete-button">Borrar</button>

          </div>
        </div>
    `//save and delete buttons
    ,
    `
          <div class="project-list">
          <ul>
            <li id="create-task">Agregar Tarea</li>
          </ul>
        </div>
      </div>
    `//task list and close project container
  ];
  return array[pos];
};

// Other
function dayDiference(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);
  const diff = Math.ceil((start - end) / (1000 * 60 * 60 * 24));
  return diff;
};
function renderDaysRemaining(date1, date2) {
  const start = new Date(date1);
  const end = new Date(date2);

  const diffStart = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
  const diffEnd = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  let str = "";
  if (diffEnd < 0)    str = "El proyecto ya finalizó.";   else 
  if (diffEnd === 0)  str = "El proyecto finaliza hoy.";  else
  if (diffEnd > 0) {
    if (diffStart > 0) {
      str = "El proyecto empieza en " + diffStart +
            ((diffStart === 1) ? " día." : " días.");
    } else { 
      if (diffStart === 0)  str = "El proyecto arrancó hoy. Finaliza en ";
      else                  str = "El proyecto finaliza en ";
      str += diffEnd + ((diffEnd === 1) ? " día." : " días.");
    }
  };

  return str;
};

document.addEventListener('keydown', function(event) {
  if (event.key === 'Control') {
      console.log(projects);
      getDaysDifference(startDate.value, endDate.value);
  }
});