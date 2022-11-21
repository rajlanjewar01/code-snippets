const api_fetch = fetch('https://jsonplaceholder.typicode.com/todos')
.then(
    (result.json()
    .then((resp) => { 
        console.log(resp) 
    })));
