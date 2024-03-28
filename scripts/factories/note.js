function noteFactory (data) {
    const noteMessage = data.note

    function messageDOM () {
        const div = document.createElement('div')
        div.classList.add('note_message')
        
        const messageUser = `<p> ${noteMessage} </p>`

        div.innerHTML = messageUser

        return div
    }
    return { messageDOM }
}