const requestURL = 'https://jsonplaceholder.typicode.com/users'
const requestURL2 = 'http://localhost:8077/api/priceCategories'

// const requestURL = 'http://localhost:8077/api/employees'


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type','application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })

}

// sendRequest('GET',requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Maxim',
    age: 36
}

const body2 = {
    name: 'Салют',
    description: 'Привет из webstorma'
}

// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

sendRequest('POST', requestURL2, body2)
    .then(data => console.log(data))
    .catch(err => console.log(err))

