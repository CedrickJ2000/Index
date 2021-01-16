const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

const baseURL  =`https://yts.mx/api/v2/movie_details.json?movie_id=${myParam}`;



fetch(baseURL)
.then((resp) => resp.json())
.then((response) => {
    console.log(response);
    const img = response.data.movie.medium_cover_image;
    console.log(img);
    const title = response.data.movie.title;
    console.log(title);
    const year = response.data.movie.year;
    console.log(year);
    const genres = response.data.movie.genres;
    console.log(genres);
    const rating = response.data.movie.rating;
    console.log(rating);
    const trailer = response.data.movie.yt_trailer_code;
    console.log(trailer);
    const description = response.data.movie.description_intro;
    console.log(description);
    const movieTitle = document.getElementById("movie-title");
    movieTitle.innerHTML = title;
    const movieYear = document.getElementById("year");
    movieYear.innerHTML = year;
    const desc = document.getElementById("descrip");
    desc.innerHTML = description;
    const movieRating  = document.getElementById("movie-rating");
    movieRating.innerHTML = rating;
    const movieBackground = document.getElementById("movie-background");
    movieBackground.src = response.data.movie.medium_cover_image;
    const movieTrailer = document.getElementById("movie-trailer");
    movieTrailer.src = `https://www.youtube.com/embed/${response.data.movie.yt_trailer_code}`;
    const movieGenres = document.getElementById("movie-genres");
    movieGenres.innerHTML = genres;
    const movieDownload = document.getElementById("movie-download");
    movieDownload.addEventListener("click",()=>{
    window.open(response.data.movie.torrents[1].url,"_blank")

    })






 

 
});
