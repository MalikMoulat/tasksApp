async function getData () {
    return fetch('../data/data.json')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('erreur', err))
}

getData()

console.log(getData())
