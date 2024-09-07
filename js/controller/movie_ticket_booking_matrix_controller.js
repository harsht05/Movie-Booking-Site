import TheatreServices from "../services/theatre_services.js";

$(document).ready(function() {

    var totalPrice = 0;
    var totalSeats = 0;
    let allSeatMatrix = null;
    let theatreDetails = null;
    let tickets = new Set();

    $.fn.bookBalconySeat = function (seatId) {

        let seat = document.querySelector("#seat-balcony-"+seatId);
        
        if(seat.getAttribute('class') == 'btn btn-outline-success seats') {
    
            seat.setAttribute('class', 'btn btn-success seats');
            totalPrice += 200;
            totalSeats += 1;
            tickets.add("B"+seatId);

            allSeatMatrix[0][seatId] = 1;
            console.log(tickets);

            $(".total-seats").text("Total Seats : " + totalSeats);
            $(".total-amt").text("Total Amount : " + totalPrice);
        }
    
        else {
    
            seat.setAttribute('class', 'btn btn-outline-success seats');
            totalPrice -= 200;
            totalSeats -= 1;  
            tickets.delete("B"+seatId);
            
            allSeatMatrix[0][seatId] = 0;
            console.log(tickets);

            $(".total-seats").text("Total Seats : " + totalSeats);
            $(".total-amt").text("Total Amount : " + totalPrice);
        }
    
    }

    $.fn.bookPlatinumSeat = function (seatId) {

        let seat = document.querySelector("#seat-platinum-"+seatId);
        
        if(seat.getAttribute('class') == 'btn btn-outline-success seats') {
    
            seat.setAttribute('class', 'btn btn-success seats');
            totalPrice += 150;
            totalSeats += 1;
            tickets.add("P"+seatId);
            
            allSeatMatrix[1][seatId] = 1;
            console.log(tickets);
            
            $(".total-seats").text("Total Seats : " + totalSeats);
            $(".total-amt").text("Total Amount : " + totalPrice);
        }
    
        else {
    
            seat.setAttribute('class', 'btn btn-outline-success seats');
            totalPrice -= 150; 
            totalSeats -= 1; 
            tickets.delete("P"+seatId);
            
            allSeatMatrix[1][seatId] = 0;
            console.log(tickets);

            $(".total-seats").text("Total Seats : " + totalSeats);
        $(".total-amt").text("Total Amount : " + totalPrice);
        }
    }

    $.fn.bookGoldSeat = function(seatId) {

        let seat = document.querySelector("#seat-gold-"+seatId);
        
        if(seat.getAttribute('class') == 'btn btn-outline-success seats') {
    
            seat.setAttribute('class', 'btn btn-success seats');
            totalPrice += 120;
            totalSeats += 1;
            tickets.add("G"+seatId);

            
            allSeatMatrix[2][seatId] = 1;
            console.log(tickets);


            $(".total-seats").text("Total Seats : " + totalSeats);
        $(".total-amt").text("Total Amount : " + totalPrice);
        }
    
        else {
    
            seat.setAttribute('class', 'btn btn-outline-success seats');
            totalPrice -= 120;
            totalSeats -= 1;
            tickets.delete("G"+seatId);

            
            allSeatMatrix[2][seatId] = 0;
            console.log(tickets);

            $(".total-seats").text("Total Seats : " + totalSeats);
        $(".total-amt").text("Total Amount : " + totalPrice);
        }
    }

    let params = new URLSearchParams(window.location.search);
    let theatreID = params.get("theatreId");
    let showId = params.get("showId");
    let userID = params.get("userId");
    let movieID = params.get("movieId");

    // console.log(theatreId);
    // console.log(showId, typeof showId);

    TheatreServices.getTheatreDetailsById(theatreID)
    .then((response) => {

        theatreDetails = response.data;
        console.log(theatreDetails);

        if(showId == 0) {
           
            allSeatMatrix = theatreDetails._morning;
            console.log(allSeatMatrix);
        }

        else if(showId == 1) {
           
            allSeatMatrix = theatreDetails._afternoon;
            console.log(allSeatMatrix);
        }

        else if(showId == 2) {
           
            allSeatMatrix = theatreDetails._evening;
            console.log(allSeatMatrix);
        }
        
        else if(showId == 3) {
           
            allSeatMatrix = theatreDetails._night;
            console.log(allSeatMatrix);
        }

            let balconySeats = allSeatMatrix[0];
            // console.log(seats);

            for(let seat in balconySeats) {

                if(balconySeats[seat] == 0) {
                    $(".balcony-seats").append(`<button type="button" class="btn btn-outline-success seats" id="seat-balcony-${seat}" onclick="$().bookBalconySeat(${seat})"> ${seat} </button>`);
                }

                else {
                    $(".balcony-seats").append(`<button type="button" class="btn btn-danger seats" disabled>${seat}</button>`);
                }
            }

            let platinumSeats = allSeatMatrix[1];
            // console.log(seats);

            for(let seat in platinumSeats) {

                if(platinumSeats[seat] == 0) {
                    $(".platinum-seats").append(`<button type="button" class="btn btn-outline-success seats" id="seat-platinum-${seat}" onclick="$().bookPlatinumSeat(${seat})">${seat}</button>`);
                }

                else {
                    $(".platinum-seats").append(`<button type="button" class="btn btn-danger seats" disabled>${seat}</button>`);
                }
            }

            let goldSeats = allSeatMatrix[2];

            for(let seat in goldSeats) {

                if(goldSeats[seat] == 0) {
                    $(".gold-seats").append(`<button type="button" class="btn btn-outline-success seats" id="seat-gold-${seat}" onclick="$().bookGoldSeat(${seat})">${seat}</button>`);
                }

                else {
                    $(".gold-seats").append(`<button type="button" class="btn btn-danger seats" disabled>${seat}</button>`);
                }
            }
        
    })
    .catch((error) => {

        console.log(error);
    })

    $(document).on('click', '.submit-btn', function() {

        console.log(showId);
        console.log(tickets);
        // console.log(theatreId);

        if(showId == 0) {
           
            theatreDetails._morning = allSeatMatrix;
        }

        else if(showId == 1) {
           
            
            theatreDetails._afternoon = allSeatMatrix;
        }

        else if(showId == 2) {
           
            
            theatreDetails._evening = allSeatMatrix;
        }
        
        else if(showId == 3) {
           
            
            theatreDetails._night = allSeatMatrix;
        }

        console.log(theatreDetails);


        TheatreServices.updateTheatreDetails(theatreID, theatreDetails)
        .then((response) => {
            
            let res = "";
            
            for(let key of tickets.keys()) {

                res += key + ", ";
            }

            console.log(response);
            window.location.href = `../html/meals.html?ticketPrice=${totalPrice}&theatreId=${theatreID}&showId=${showId}&userId=${userID}&movieId=${movieID}&tickets=${res}`;
        })
        .catch((error) => {

            console.log(error);
        })
    })

});