import MoviesServices from "../services/movies_services.js";

$(document).ready(function() {

    MoviesServices.getMovieDetails()
    .then((response) => {

        // console.log(response.data);
        let movies = response.data;

        for(let movie of movies) {

            // console.log(movie._movieName);
            let movie_card = `<a href="../html/movie-booking-info.html?movieId=${movie.id}" class="text-decoration-none link-dark"
                                style="width: 18rem;">
                                <div class="card m-2 rounded">

                            <img src=${movie._movieImage} class="card-img-top card-images" alt="...">
                            <div class="card-body">
                            <h5 class="text-center fs-5 fw-normal">${movie._movieName}</h5>
                            </div>
                            </div>
                            </a>`;

            if(movie._genre == "recommended") {
                
                $(".recommended-movies").append(movie_card);
            }

            else if(movie._genre == "thriller") {
                
                $(".thriller-movies").append(movie_card);
            }
            
            else if(movie._genre == "action") {
                
                $(".action-movies").append(movie_card);
            }

            else if(movie._genre == "rom-com") {
                
                $(".rom-com-movies").append(movie_card);
            }

            else if(movie._genre == "romance-drama") {
                
                $(".rom-drama-movies").append(movie_card);
            }

            else if(movie._genre == "horror") {
                
                $(".horror-movies").append(movie_card);
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });
});