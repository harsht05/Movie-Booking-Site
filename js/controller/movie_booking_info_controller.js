import MoviesServices from "../services/movies_services.js";

$(document).ready(function() {

    let params = new URLSearchParams(window.location.search);
    let movieID = params.get("movieId");
    let userID = params.get("userId");

    MoviesServices.getMovieDetailsById(movieID)
    .then((response) => {

        let movieDetails = response.data;
        // console.log(movieDetails._about);

        $(".button-container").append(`<a href="../html/movie-theatre-info.html?movieId=${movieID}&userId=${userID}"> <button type="button" class="btn btn-danger">Book Tickets Now</button> </a>`);
        $(".banner-img").append(`<img src="${movieDetails._movieImage}" class="d-block w-100" style="height:500px;" alt="...">`);
        $(".movie-name").append(movieDetails._movieName);
        $(".movie-about").append(movieDetails._about);

        $(".actor-born").append(movieDetails._cast[0][0]);
        $(".actor-place").append(movieDetails._cast[0][1]);
        $(".actor-nickname").append(movieDetails._cast[0][2]);
        $(".actor-about").append(movieDetails._cast[0][3]);
        $(".actor-img").append(`<img src=${movieDetails._cast[0][4]} alt="">`);

        $(".actress-born").append(movieDetails._cast[1][0]);
        $(".actress-place").append(movieDetails._cast[1][1]);
        $(".actress-about").append(movieDetails._cast[1][2]);
        $(".actress-img").append(`<img src=${movieDetails._cast[1][3]} alt="" id="toggleImage1">`)
    })
    .catch((error) => {

        console.log(error);
    });
});