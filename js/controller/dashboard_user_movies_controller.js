import MoviesServices from "../services/movies_services.js";
import UserServices from "../services/user_services.js";

$(document).ready(function() {

    let params = new URLSearchParams(window.location.search);

    let id = params.get("userId");
    let userInterests = null;

    UserServices.getUserDetailsById(id)
    .then((response) => {

        // console.log(response.data);
        userInterests = response.data._genre;
    })
    .catch((error) => {
        console.log(error);
    });

    MoviesServices.getMovieDetails()
    .then((response) => {

        // console.log(response.data);
        let movies = response.data;
        console.log(userInterests);

        for(let movie of movies) {

            // console.log(movie._movieName);
            let movie_card = `<a href="movie-booking-info.html?movieId=${movie.id}&userId=${id}" class="text-decoration-none link-dark"
                                style="width: 18rem;">
                                <div class="card m-2 rounded">

                            <img src=${movie._movieImage} class="card-img-top card-images" alt="...">
                            <div class="card-body">
                            <h5 class="text-center fs-5 fw-bolder">${movie._movieName}</h5>
                            </div>
                            </div>
                            </a>`;

                            
            // console.log(movie._genre);
            let genre = movie._genre;
            let flag = true;

            for(let g of userInterests) {

                if(genre == g) {
                    
                    $(".user-recommended-movies").append(movie_card);
                    flag = false;
                    break;
                }
            }

            if(flag) {

                $(".user-non-recommended-movies").append(movie_card);
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });
});