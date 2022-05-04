const imgEl = document.querySelector("img");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
    getGiphy(getElValue(document.querySelector("input")));
});

function getElValue(el){
    console.log(el.value);
    return el.value;
}
function getGiphy(query, apikey="lqxd1xSb2SU6PBWDI0hezzCOyIqF1bRA") {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${query}`, {mode: "cors"})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            imgEl.src = response.data.images.original.url;
        })
}