let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let pay_on_venue = document.getElementById('pay-on-venue');

let icon_1 = document.querySelector('.fa-credit-card');
let icon_2 = document.querySelector('.fa-building-columns');
let icon_3 = document.querySelector('.fa-wallet');
let icon_4 = document.querySelector('.fa-house');

let card_box = document.querySelector('.card-box');
let net_banking = document.querySelector('.net-banking');
let upi = document.querySelector('.upi');
let pay = document.querySelector('.payOnVenue');

function payOnVenue(){
    pay_on_venue.style.color = "greenyellow";
    first.style.color = "#444";
    second.style.color = "#444";
    third.style.color = "#444";
    icon_1.style.color = "#aaa";
    icon_2.style.color = "#aaa";
    icon_3.style.color = "#aaa";
    icon_4.style.color = "greenyellow";
    card_box.style.display = "none";
    net_banking.style.display = "none";
    upi.style.display = "none";
    pay.style.display = "block";


}

function doFunA(){
    pay_on_venue.style.color = "#444";
    first.style.color = "greenyellow";
    second.style.color = "#444";
    third.style.color = "#444";
    icon_1.style.color = "greenyellow";
    icon_2.style.color = "#aaa";
    icon_3.style.color = "#aaa";
    icon_4.style.color = "#aaa";
    card_box.style.display = "block";
    net_banking.style.display = "none";
    upi.style.display = "none";
    pay.style.display = "none";

}
function doFunB(){
    pay_on_venue.style.color = "#444";
    first.style.color = "#444";
    second.style.color = "greenyellow";
    third.style.color = "#444";
    icon_1.style.color = "#aaa";
    icon_2.style.color = "greenyellow";
    icon_3.style.color = "#aaa";
    icon_4.style.color = "#aaa";
    card_box.style.display = "none";
    net_banking.style.display = "block";
    upi.style.display = "none";
    pay.style.display = "none";



}
function doFunC(){
    pay_on_venue.style.color = "#444";
    first.style.color = "#444";
    second.style.color = "#444";
    third.style.color = "greenyellow";
    icon_1.style.color = "#aaa";
    icon_2.style.color = "#aaa";
    icon_3.style.color = "greenyellow";
    icon_4.style.color = "#aaa";
    card_box.style.display = "none";
    net_banking.style.display = "none";
    upi.style.display = "block";
    pay.style.display = "none";


}
let popup = document.getElementById('popup');
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

// Netbanking
let popupN = document.getElementById('popupN');
function openPopupN(){
    popupN.classList.add("open-popup");
}
function closePopupN(){
    popupN.classList.remove("open-popup");
}

// Google Pay
let popupU = document.getElementById('popupU');
function openPopupU(){
    popupU.classList.add("open-popup");
}
function closePopupU(){
    popupU.classList.remove("open-popup");
}

// pay on venue
let popupPOV = document.getElementById('popupPOV');
function openpov(){
    popupPOV.classList.add("open-popup");
}
function closepov(){
    popupPOV.classList.remove("open-popup")
}
