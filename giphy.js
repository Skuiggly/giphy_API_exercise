const imgEl = document.querySelector("img");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
    getGiphy(getElValue(document.querySelector("input")));
});

function getElValue(el){
    console.log(el.value);
    return el.value;
}
async function getGiphy(query, apikey="lqxd1xSb2SU6PBWDI0hezzCOyIqF1bRA") {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${query}`, {mode: "cors"});
    const catData = await response.json();
    imgEl.src = catData.data.images.original.url;
}