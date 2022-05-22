function inputToggle(state, element) {
    if (state == "on") {
        element.style.display = "initial"
        element.focus()
        console.log("INPUT ON")
        newTask.style.display = "none"
    } else if (state == "off") {
        element.style.display = "none"
        element.value = ""
        newTask.style.display = "block"
        console.log("INPUT OFF")
    }
}