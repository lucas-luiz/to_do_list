function createTask() {
    let hasRepeated = false
    arrTasks.forEach(e => {
        if (input.value == e.def) {
            hasRepeated = true
        }
    })

    if (hasRepeated == true) {
        alert("This task already exists")
    } else {
        arrTasks.push({ def: input.value, checked: 'false' })
        localStorage.list = JSON.stringify(arrTasks)
        draw()
        focusOn()
    }
    console.log('TASK CREATED : ', input.value)
    input.value = ""
}