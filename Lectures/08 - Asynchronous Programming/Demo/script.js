fetch('http://localhost:3030/jsonstore/collections/students')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))



fetch('http://localhost:3030/jsonstore/collections/students')
    .then(res => res.json())
    .then(data => {
        const nameCollection = []
        for (const dataKey in data) {
            if (data[dataKey].firstName === 'Peter') {
                nameCollection.push(data[dataKey])
            }
        }
        return nameCollection;
    })
    .then(collection => {
        for (const student of collection) {
            fetch(`http://localhost:3030/jsonstore/collections/students/${student._id}`, {method: 'DELETE'})
                .then(res => console.log(res))
                .catch(err => console.error(err))
        }
    })
    .catch(err => console.log(err))
//
// fetch('http://localhost:3030/jsonstore/collections/students')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))





fetch('http://localhost:3030/jsonstore/collections/students', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({firstName: 'Peter', lastName: 'Petrov', facultyNumber: '12345', grade: 6})
}).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));





// fetch('http://localhost:3030/jsonstore/collections/students/0876656a-eb05-46f0-9513-04bf6c18c54b', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({firstName: 'Peter', lastName: 'Petrov', facultyNumber: '12345', grade: 5.5, _id: '0876656a-eb05-46f0-9513-04bf6c18c54b'})
// }).then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));



// fetch('http://localhost:3030/jsonstore/collections/students/0876656a-eb05-46f0-9513-04bf6c18c54b', {
//     method: 'DELETE',
// }).then(res => {
//     if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     return res;
// })
//     .then(res => console.log(res))
//     .catch(err => console.error(err));