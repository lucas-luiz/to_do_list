const input = document.querySelector(".c-to-do__input")
const listHtml = document.querySelector(".c-to-do-list")
const newTask = document.querySelector(".c-main__new-task")
const main = document.querySelector(".c-to_do__main")
const scope = document.querySelector(".c-to_do__scope")
const regex = `[a-zA-Z0-9 ]+`

/* 
    1   id = posição no array
    2   se excluiu, muda array
    3   se moveu, muda array
    4   se muda array, renderiza dnv
*/

//APERTOU ENTER, SALVAR NO LOCALSTORAGE()
window.addEventListener("keypress", e => {

    if (e.key == "Enter") {
        if (input.value) {
            e.preventDefault()
            if (input.value.match(regex) == input.value) {
                createTask()
            } else {
                alert("Only letters and numbers are accepted")
            }
        } else {
            focusOut()
        }
    }

})

let arrTasks = []
if (localStorage.list) {
    arrTasks = JSON.parse(localStorage.list)
} else {
    localStorage.setItem('list', JSON.stringify(arrTasks))
}

if (arrTasks.length > 0) {
    console.log("draw")
    draw()
}

















