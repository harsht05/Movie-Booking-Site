let cart = {
    meals: [],
    totalPrice: 0
};

// Add to Cart button click event
$(".add-to-cart").on("click", function () {
    let item = $(this).data("item");
    let price = $(this).data("price");
    let quantityId = $(this).data("quantity");

    // Hide all quantity bars
    $('.quantity-bar').hide();

    // Show the quantity bar for the selected item
    $('#' + quantityId).show();

    // Show increase and decrease buttons
    $(this).siblings('.quantity-bar').find('.decrease-quantity, .increase-quantity').show();

    // If meal is not already in the cart, add it
    let existingMealIndex = cart.meals.findIndex(meal => meal.item === item);
    if (existingMealIndex === -1) {
        cart.meals.push({
            item: item,
            price: price,
            quantity: 0
        });
    }

    updateSummary();
});

// Increase Quantity button click event
$(".increase-quantity").on("click", function () {
    let quantityElement = $(this).parent().find('span');
    quantityElement.text(parseInt(quantityElement.text()) + 1);

    // Update quantity in the cart
    let item = $(this).closest('.card-body').find('.add-to-cart').data('item');
    let existingMealIndex = cart.meals.findIndex(meal => meal.item === item);
    if (existingMealIndex !== -1) {
        cart.meals[existingMealIndex].quantity = parseInt(quantityElement.text());
    }

    updateSummary();
});

// Decrease Quantity button click event
$(".decrease-quantity").on("click", function () {
    let quantityElement = $(this).parent().find('span');
    let currentQuantity = parseInt(quantityElement.text());
    if (currentQuantity > 0) {
        quantityElement.text(currentQuantity - 1);

        // Update quantity in the cart
        let item = $(this).closest('.card-body').find('.add-to-cart').data('item');
        let existingMealIndex = cart.meals.findIndex(meal => meal.item === item);
        if (existingMealIndex !== -1) {
            cart.meals[existingMealIndex].quantity = parseInt(quantityElement.text());
        }
    }

    // If quantity becomes zero, remove the meal from the cart
    if (parseInt(quantityElement.text()) === 0) {
        let item = $(this).closest('.card-body').find('.add-to-cart').data('item');
        let existingMealIndex = cart.meals.findIndex(meal => meal.item === item);
        if (existingMealIndex !== -1) {
            cart.meals.splice(existingMealIndex, 1);
        }

        // Hide increase and decrease buttons
        $(this).siblings('.decrease-quantity, .increase-quantity').hide();
    }

    updateSummary();
});


var ticketCharges = 0;
var convenienceFee = 0;

$(document).ready(function() {

    let params = new URLSearchParams(window.location.search);
    ticketCharges = parseInt(params.get("ticketPrice"));
    let theatreID = params.get("theatreId");
    let showId = params.get("showId");
    let userID = params.get("userId");
    let movieID = params.get("movieId");
    let tickets = params.get("tickets");
    console.log(tickets);
    convenienceFee = 20; // Assuming ₹0 convenience fee
    cart.totalPrice = ticketCharges + convenienceFee;
    $('#ticketCharges').text(`Ticket Charges: ₹${ticketCharges}`);
    $('#convenienceFee').text(`Convenience Fee: ₹${convenienceFee}`);
    $('#totalPrice').text(`Total Price: ₹${cart.totalPrice.toFixed(2)}`);

    // Proceed button click event
$("#proceedButton").on("click", function () {
    // Redirect to the payment page with the total price
    window.location.href = `../html/payement-gateway.html?totalPrice=${cart.totalPrice.toFixed(2)}&theatreId=${theatreID}&showId=${showId}&userId=${userID}&movieId=${movieID}&tickets=${tickets}`;
});
    
});

function updateSummary() {
    let mealCount = cart.meals.reduce((sum, meal) => sum + meal.quantity, 0);
    let totalMealPrice = cart.meals.reduce((sum, meal) => sum + meal.price * meal.quantity, 0);
    
    let subtotal = parseInt(ticketCharges) + parseInt(convenienceFee);
    cart.totalPrice = subtotal + totalMealPrice;

    
    $('#subTotal').text(`Subtotal: ₹${subtotal}`);
    $('#mealCharges').text(`Meal Charges: ₹${totalMealPrice}`);
    $('#mealCount').text(`Meals: ${mealCount > 0 ? cart.meals.map(meal => `${meal.item} * ${meal.quantity}`).join(', ') : 'None'}`);


    $('#totalPrice').text(`Total Price: ₹${cart.totalPrice.toFixed(2)}`);
    $("#proceedButton").show();

}
