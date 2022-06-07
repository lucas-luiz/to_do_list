function draw() {
    listHtml.innerHTML = arrTasks.map(e => {
        let eReplaced = e.def.replaceAll(" ", "_")
        if (e.checked == "true") {
            return `
            <div class="c-to_do">
                <div class="c-to_do__scope checked" id="id${eReplaced}">
                    <i class="fas fa-times c-to_do__label" onclick="deleteTask('${e.def}')"></i>
                    <p class="c-to_do__def">${e.def}</p>
                </div>
                <input type="checkbox" class="c-to_do__check" id="id${eReplaced}" onclick="checkboxToggle('id${eReplaced}','${e.def}', this)" checked>   
            </div>
            `
        } else {
            return `
            <div class="c-to_do">
                <div class="c-to_do__scope" id="id${eReplaced}">
                    <i class="fas fa-times c-to_do__label" onclick="deleteTask('${e.def}')"></i>
                    <p class="c-to_do__def">${e.def}</p>
                </div>
                <input type="checkbox" class="c-to_do__check" id="id${eReplaced}" onclick="checkboxToggle('id${eReplaced}','${e.def}', this)">    
            </div>
            `
        }
    }).join('')
}