async function getData () {
    return fetch('../data/data.json')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('erreur', err))
}

async function displayNote (data) {
    const noteSection = document.querySelector('.note_content')

    data.forEach(data => {
        const noteModel = noteFactory(data)
        const notecardDOM = noteModel.messageDOM()
        try{
            noteSection.appendChild(notecardDOM)
        } catch {
            console.log('erreur')
        }
    });
}


async function init () {
    const data = await getData()
    displayNote(data)
}

init()