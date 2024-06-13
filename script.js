let jokePara = document.querySelector("p")
let url = "https://daddyjokes.p.rapidapi.com/random";

let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd35556c519msha88ba3bd6216ffdp11e179jsn7e4f325443f8',
        'x-rapidapi-host': 'daddyjokes.p.rapidapi.com'
    }
};
async function getJoke(url, options) {
    let response = await fetch(url, options)
    let data = await response.json()
    console.log(data);
    jokePara.innerHTML = data.joke;
}
getJoke(url, options)