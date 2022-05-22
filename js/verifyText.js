//VERIFICAR O TEXTO
function verifyText() {
    if (input.value.match(regex) == input.value || input.value == "") {
        input.style.outline = "1px solid #42474D"

    } else if (input.value != "") {
        input.style.outline = "1px solid red"
        console.log("erro : " + input.value)
    }
}