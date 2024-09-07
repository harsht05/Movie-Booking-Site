import MoviesServices from "../services/movies_services.js";

$(document).ready(function() {

    // console.log("Inside Controller");
    let allMovies = null;
    let params = new URLSearchParams(window.location.search);
    let userID = params.get("userId");
    console.log(userID);

    MoviesServices.getMovieDetails()
    .then((response) => {

        allMovies = response.data;
    })
    .catch((error) => {

        console.log(error);
    });

    $(document).on('click', '.submit-btn', function() {

        let query = $("#search-bar").val();
        // console.log(query);
        let flag = true;

        // console.log(allMovies);

        for(let movie of allMovies) {

            if(movie._movieName == query) {

                // console.log("True");
                // console.log(movie);
                flag = false;
                window.location.href = `../html/movie-booking-info.html?movieId=${movie.id}&userId=${userID}`;
                // $("#datalistOptions").append(`<a href="../html/movie-booking-info.html?movieId=${movie.id}"><option value="${movie._movieName}"></a>`);
            }
        }

        if(flag) {
            
            alert("Movie Not Found");
        }
    });
});