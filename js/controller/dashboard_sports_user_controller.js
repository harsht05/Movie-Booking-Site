import SportsServices from "../services/sports_services.js";

$(document).ready(function() {

    SportsServices.getSportsEventDetails()
    .then((response) => {

        console.log(response.data);
        let sportsEvents = response.data;

        for(let event of sportsEvents) {

            console.log(event._sportsEventName);
            let sports_Event_Card = `<a href="" class="p-2 bd-highlight card text-decoration-none shadow-lg p-3 mb-5 bg-body rounded"
                                style="width: 18rem; height: 24rem;">
                            <img src=${event._sportEventImage} class="card-img-top card-images" alt="...">
                            <div class="card-body">
                            <h5 class="text-center card-title">${event._sportsEventName}</h5>
                            </div>`;

            $(".cards-container").append(sports_Event_Card);
        }
    })
    .catch((error) => {
        console.log(error);
    });
});