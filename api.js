const baseURL = "https://yts.mx/api/v2/list_movies.json";

fetch(baseURL)
.then((resp) => resp.json())
.then((response) => {
    console.log(response);
    for(let i = 0; i < response.data.movies.length; i++){
    const sec1 = document.getElementById("sec1");
    const container = document.createElement("div");
    container.classList.add("container");
    const image = document.createElement("img");
    image.src =response.data.movies[i].medium_cover_image;
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = "See Details";
    button.addEventListener("click",()=>{
    window.location.href=`download.html?id=${response.data.movies[i].id}`
    })


    container.appendChild(image);
    container.appendChild(button);
    sec1.appendChild(container);
    }


});

