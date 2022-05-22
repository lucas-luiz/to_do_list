//FUNÇÃO: APAGAR DO LOCAL STORAGE E ATUALIZAT CONTEUDO()
function deleteTask(content) {
    arrTasks.map(e => {
        if (e.def == content) {
            arrTasks.splice(arrTasks.indexOf(e), 1)
            localStorage.list = JSON.stringify(arrTasks)
            draw()
        }
    })
}