function checkboxToggle(id, content, element) {
    if (element.checked) {
        arrTasks.map(e => {
            if (e.def == content) {
                e.checked = "true"
                localStorage.list = JSON.stringify(arrTasks)
            }
        })
        console.log(document.querySelector(`.c-to_do__scope#${id}`) + "  sdfasdfsa")
        document.querySelector(`.c-to_do__scope#${id}`).className += " checked"
    } else {
        arrTasks.map(e => {
            if (e.def == content) {
                e.checked = "false"
                localStorage.list = JSON.stringify(arrTasks)
            }
        })
        document.querySelector(`.c-to_do__scope#${id}`).classList.remove('checked')
    }


}
/* export default checkboxToggle */