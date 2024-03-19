$(document).ready(function() {
    let projects = [];

    var today = new Date().toISOString().split('T')[0];
    $('#iniDateInput_header').attr("min",today).val(today);
    $('#endDateInput_header').attr("min",today).val(today);

    $('#button--create--proyect').click(function() {
        var name = $('#textInput_header').val();
        if (!name) {
            return;
        }

        var startDate = $('#iniDateInput_header').val();
        var endDate = $('#endDateInput_header').val();

        var project = {
            name: name,
            startDate: startDate,
            endDate: endDate
        };
        projects.push(project);
        var projNumber = projects.length - 1;
        var html = `
        <div id="pjNumber_${projNumber}" class="project--toolbar flex-container-row">
            <div class="project--toolbar--text flex-container andika-regular">
                <h1>${name}</h1>
                <p>${startDate} - ${endDate}</p>
            </div>
            <button type="button" class="andika-bold">Expandir</button>
        </div>`

        $('main').append(html);
        $('#textInput_header').val("");
        $('#iniDateInput_header').val(today);
        $('#endDateInput_header').val(today);
    });
});