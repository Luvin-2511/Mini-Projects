let moviename = document.querySelector(".input-box");
let button = document.querySelector(".btn");
let result = document.querySelector(".result");
let key = "92ce332f"
let getmovie = () => {
    let movien = moviename.value;
    let url = `http://www.omdbapi.com/?t=${movien}&apikey=${key}`;
    if (movien.length <= 0) {
        result.innerHTML = ``;
    } else {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.Response == 'True') {

                    result.innerHTML = `
            <div class="info">
                <img src="${data.Poster}" alt="">
            <div>
                <h1>${data.Title}</h1>
                <div class="rating">
                    <img src="star.svg" alt="">
                    <h3>${data.imdbRating} </h3>
                    <h3>${data.Rated} </h3>
                    <h3>${data.Runtime} </h3>
                    <h3>${data.Year} </h3>
                </div>  
                <div class="genre">
                   <div> ${data.Genre.split(",").join("</div><div>")}</div>
                </div>  
                <div class="plot">
                    <h2>Plot:</h2>
                    <h2>${data.Plot}</h2>
                </div>
                <div class="cast">
                    <h2>Cast:</h2>
                    <h2>
                   <div class=""> ${data.Actors.split(",").join("</div><div>")}</div></h2>
                </div>
            </div>
            </div>
            `
                } else {
                    result.innerHTML = `<h3 class="msg">${data.error} </h3>`
                }
            
            })
            .catch (() => {
    result.innerHTML = `<h3 class="msg">Error Occured</h3>`
})
    }
}
button.addEventListener("click", getmovie)
window.addEventListener("load", getmovie)