import MoviesServices from "../services/movies_services.js";
import TheatreServices from "../services/theatre_services.js";
import UserServices from "../services/user_services.js";

$(document).ready(function () {

    let params = new URLSearchParams(window.location.search);

    let movieID = params.get("movieId");
    let userID = params.get("userId");
    let user = null;
    let movie = null;

    UserServices.getUserDetailsById(userID)
        .then((response) => {

            user = response.data;
            // console.log(user);
        })
        .catch((error) => {

            console.log(error);
        });

    MoviesServices.getMovieDetailsById(movieID)
        .then((response) => {

            movie = response.data;
            
            $(".movie-info").append(`<img src=${movie._movieImage} class="d-block w-100 carousel-images" alt="..." style="height: 500px;">

            <p class="fs-1 fw-bold text-center">${movie._movieName}</p>`)

        })
        .catch((error) => {

            console.log(error);
        });

    TheatreServices.getTheatresDetails()
        .then((response) => {

            let flag = true;

            let allTheatres = response.data;
            console.log(allTheatres);

            for (let theatre of allTheatres) {

                if (theatre._theatreCity == user._city && theatre._movieId == movieID) {

                    flag = false;

                    $(".theatres-container").append(`<div class="container shadow p-3 shadow-lg p-3 mb-5 bg-body rounded theatre">
                        <p class="fw-semibold fs-4">${theatre._theatreName}, ${theatre._theatreCity}</p>
                        <div class="d-flex gap-3 flex-row flex-wrap theatre-shows-${theatre.id}"> 
                        
                        </div>
                    </div>`);

                    let theatreshows = theatre._theatreShows;
                    console.log(theatreshows);
                    for (let show in theatreshows) {

                        console.log(show);
                        console.log(theatreshows[show]);

                        $(".theatre-shows-" + theatre.id).append(`<a href="../html/movie-ticket-booking-matrix.html?theatreId=${theatre.id}&showId=${show}&userId=${userID}&movieId=${movieID}"><button type="button" class="btn btn-outline-success ms-2">${theatreshows[show]}</button></a>`);

                    }
                }
            }

            if(flag) {

                $(".theatres-container").append(`<p class="fw-normal fs-4 text-center">Sorry, this movie is not available in ${user._city}.</p>`)
            }
        })
        .catch((error) => {

            console.log(error);
        });

});