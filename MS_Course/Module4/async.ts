function callAPI(){
    fetch('https://regres.in/api/users').then((response) => {
        return response.json()
    }).then((response)=> {
        console.log(response.parameter);
    })
}

async function callAPI_Async(){
    let apiReturn = await fetch('https://regres.in/api/users') //await is necessary
    let apiJson = await apiReturn.json() //await is necessary
    console.log(apiJson.parameter);
}

