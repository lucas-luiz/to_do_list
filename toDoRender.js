const input = document.querySelector(".c-to-do__input")
const listHtml = document.querySelector(".c-to-do-list")
const newTask = document.querySelector(".c-main__new-task")
const main = document.querySelector(".c-to_do__main")
const scope = document.querySelector(".c-to_do__scope")
const regex = `[a-zA-Z0-9 ]+`


//CHECK, MOSTRAT DEL BUTTON
checkboxVerify = function(id, content, element){
    
    console.log(id,content,element)
    if(element.checked){
        arrTasks.map(e =>{
            if(e.def == content){
                e.checked = "true"
                localStorage.list = JSON.stringify(arrTasks)
            }
        })
        console.log(document.querySelector(`.c-to_do__scope#${id}`) + "  sdfasdfsa")
        document.querySelector(`.c-to_do__scope#${id}`).className += " checked"
    }else{
        arrTasks.map(e =>{
            if(e.def == content){
                e.checked = "false"
                localStorage.list = JSON.stringify(arrTasks)
            }
        })
        document.querySelector(`.c-to_do__scope#${id}`).classList.remove('checked')
    }
}
//FUNCA: ATUALIZAR CONTEUDO
draw = function(){
    listHtml.innerHTML = arrTasks.map(e=>{
        
        eReplaced = e.def.replaceAll(" ","_")
        if(e.checked == "true"){
            return `
            <div class="c-to_do">
                <div class="c-to_do__scope checked" id="id${eReplaced}">
                    <i class="fas fa-times c-to_do__label" onclick="deleteTask('${e.def}')"></i>
                    <p class="c-to_do__def">${e.def}</p>
                </div>
                <input type="checkbox" class="c-to_do__check" id="id${eReplaced}" onclick="checkboxVerify('id${eReplaced}','${e.def}', this)" checked>
                
            </div>
            `
        }else{
            return `
            <div class="c-to_do">
                <div class="c-to_do__scope" id="id${eReplaced}">
                    <i class="fas fa-times c-to_do__label" onclick="deleteTask('${e.def}')"></i>
                    <p class="c-to_do__def">${e.def}</p>
                </div>
                <input type="checkbox" class="c-to_do__check" id="id${eReplaced}" onclick="checkboxVerify('id${eReplaced}','${e.def}', this)">
                
            </div>
            `
        }
        
        
    }).join('')
    
    event.preventDefault()
}

//ATIVAR/DESATIVAR INPUT
toggleInput = function(state, element){
    if(state == "on"){
        element.style.display = "initial"
        element.focus()
        console.log("INPUT ON")
        newTask.style.display = "none"
    }else if(state == "off"){
        element.style.display = "none"
        element.value = ""
        newTask.style.display = "block"
        console.log("INPUT OFF")
    }
}

//FOCUS NO INPUT
focusOn = function(){
    toggleInput("on", input)
}
focusOut = function(){
    toggleInput("off", input)
}

//FUNÇÃO: SALVAR NO LOCAL STORAGE E ATULIZAR CONTEUDO()
createTask = function(){
    let hasRepeated = false
    arrTasks.forEach(e=>{
        if(input.value == e.def){ 
            hasRepeated = true
        }
    })

    if(hasRepeated == true){
        alert("This task already exists")
        
    }else{
        arrTasks.push({def: input.value, checked: 'false'})
        localStorage.list = JSON.stringify(arrTasks)
        draw()
        toggleInput("on", input)
    }
    input.value = ""
}

//FUNÇÃO: APAGAR DO LOCAL STORAGE E ATUALIZAT CONTEUDO()
deleteTask = function(content){
    arrTasks.map(e =>{
        if(e.def == content){
            arrTasks.splice(arrTasks.indexOf(e), 1) 
            localStorage.list = JSON.stringify(arrTasks)
            draw()
        }
    })
}

//APERTOU ENTER, SALVAR NO LOCALSTORAGE()
window.addEventListener("keypress", e =>{
    if(e.key == "Enter"){
        if(input.value != ""){
            
            if(input.value.match(regex) == input.value){
                createTask()
            }else{
                alert("Only letters and numbers are accepted")
            }
        }else{
            toggleInput("off", input)
        }
    }
})

//VERIFICAR O TEXTO
function verifyText(){
    if(input.value.match(regex) == input.value || input.value == ""){
        input.style.outline = "1px solid #42474D"
        
    }else if(input.value != ""){
        input.style.outline = "1px solid red"
        console.log("erro : " + input.value)
    }
}

let arrTasks = []
if(localStorage.list){
    arrTasks = JSON.parse(localStorage.list)
}else{
    localStorage.setItem('list', JSON.stringify(arrTasks))
}

if (arrTasks.length > 0){
    draw()
}

a =  function() {
    console.log(localStorage.list)
    console.log(arrTasks)
}
















