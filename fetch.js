const requestURL = 'https://jsonplaceholder.typicode.com/users'
const requestURL2 = 'http://localhost:8077/api/priceCategories'

// const requestURL = 'http://localhost:8077/api/employees'


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Что-то пошло не так')
            e.data = error
            throw e
        })
    })
}

// sendRequest('GET', requestURL2)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body2 = {
    name: 'Салют еще раз',
    description: 'Привет из webstorma. Fetch!!'
}

sendRequest('POST', requestURL2, body2)
    .then(data => console.log(data))
    .catch(err => console.log(err))




