// "https://swapi.dev/api/people/1/"


// fetch('https://swapi.dev/api/people/1/')
//     // response object if it get resolved
//     .then(res => {
//         console.log('RESOLVED', res)
//         // res.json().then(data => console.log('JSON DONE', data))
//         return res.json()
//     })
//     .then(data => {
//         console.log('JSON DONE', data)
//     })
//     // if we get error
//     .catch(e => {
//         console.log('ERROR!', e)
//     })




// fetch('https://swapi.dev/api/people/1/')
//     // response object if it get resolved
//     .then(res => {
//         console.log('RESOLVED', res)
//         // res.json().then(data => console.log('JSON DONE', data))
//         return res.json()
//     })
//     .then(data => {
//         console.log('JSON DONE', data)
//         // making a second request
//         return fetch('https://swapi.dev/api/people/2/')
//     })
//     .then(res => {
//         console.log('SECOND REQUES RESOLVED')
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     // if we get error
//     .catch(e => {
//         console.log('ERROR!', e)
//     })

// Using Async
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1/')
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('https://swapi.dev/api/people/2/')
        const data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log('ERROR', e)
    }

}

loadStarWarsPeople();