let jokeBtnE1 = document.getElementById("jokeBtn");
let jokeTextE1 = document.getElementById("jokeText");
let spinnerE1 = document.getElementById("spinner");


function onclickJokeFunction() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    jokeTextE1.classList.add("d-none");
    spinnerE1.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            jokeTextE1.classList.remove("d-none");
            spinnerE1.classList.add("d-none");
            jokeTextE1.textContent = jsonData.value;
        });
}

jokeBtnE1.addEventListener("click", onclickJokeFunction);
