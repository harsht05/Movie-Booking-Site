$(document).ready(function() {

    let params = new URLSearchParams(window.location.search);

    let totalPrice = params.get("totalPrice");
    let theatreID = params.get("theatreId");
    let showId = params.get("showId");
    let userID = params.get("userId");
    let movieID = params.get("movieId");
    let tickets = params.get("tickets");
    console.log(tickets);

    $(document).on('click', '#submit-btn', function() {

        console.log("I'm here");

        axios.post("http://localhost:3000/orders", {userID, movieID, theatreID, showId, totalPrice, tickets})
        .then((response) => {

            window.location.href = "../html/dashboard-user-movies.html?userId="+userID;
        })
        .catch((error) => {

            console.log(error);
        });
    });
});