import User from "../model/User.js";

$(document).ready(function () {

    var notSameError = $("#notSameError");
    var mobileError = $("#mobileError");
    var emailError = $("#emailError");
    var passError = $("#passError");
    var usernameError = $("#usernameError");

    var flag = true;

    $('#password').keyup(() => {
        if (IsValidPass($('#password').val()) == false) {
            passError.text("Password must have special char and a number");
            flag = false;
        } else {
            passError.text("");
            flag = true;
        }

    })

    $('#cpassword').keyup(() => {
        if ($('#password').val() !== $('#cpassword').val()) {
            notSameError.text("Please enter same password");
            flag = false;
        } else {
            notSameError.text("");
            flag = true;
        }
    })

    $('#phone-no').keyup(() => {
        if ($('#phone-no').val().length == 10) {
            mobileError.text("");
            flag = true;
        }
        else if ($('#phone-no').val().length < 10 || $('#phone-no').val().length > 10) {
            mobileError.text("Please enter 10 digit number only");
            flag = false;
        }
    })

    $('#email').keyup(() => {
        if (IsEmail($('#email').val()) == false) {
            emailError.text("Please enter valid email with .com");
            flag = false;
        } else {
            emailError.text("");
            flag = true;
        }
    })

    $('#username').keyup(() => {
        if (IsValidUsername($('#username').val()) == false) {
            usernameError.text("Username should be alphanumeric only");
            flag = false;
        } else {
            usernameError.text("");
            flag = true;
        }
    })



    $('#registrationForm').submit(function (event) {
        event.preventDefault();




        function getGenres() {
            let genres = []
            const thrillerCheckbox = $("#thrillerCheckbox");
            const actionCheckbox = $("#actionCheckbox");
            const comedyCheckbox = $("#comedyCheckbox");
            const romcomCheckbox = $("#romcomCheckbox");
            const romancedramaCheckbox = $("#romancedramaCheckbox");

            if (thrillerCheckbox.is(':checked')) {
                genres.push(thrillerCheckbox.val())
            }
            if (actionCheckbox.is(':checked')) {
                genres.push(actionCheckbox.val())
            }
            if (comedyCheckbox.is(':checked')) {
                genres.push(comedyCheckbox.val())
            }
            if (romcomCheckbox.is(':checked')) {
                genres.push(romcomCheckbox.val())
            }
            if (romancedramaCheckbox.is(':checked')) {
                genres.push(romancedramaCheckbox.val())
            }
            return genres;


        }

        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        const cpassword = $('#cpassword').val();
        const phone_no = $('#phone-no').val();
        const city = $('#city').val();
        const gen = getGenres();

        let user = new User();
        user.username = username;
        user.password = password;
        user.email = email;
        user.cpassword = password;
        user.phoneno = phone_no;
        user.city = city;
        user.genre = gen;

        console.log(flag);


        function fetchJsonData() {
            return fetch('http://localhost:3000/users')
                .then(response => response.json())
                .then(data => {
                    var jsonArray = data;
                    for (const obj of jsonArray) {
                        if (obj.email === email) {
                            emailError.text("User with this email id already exists");
                            flag = false;
                            break;
                        }
                    }
                })
                .catch(error => {
                    console.error('Error fetching JSON data:', error);
                });
        }


        async function checkUserExistence() {
            await fetchJsonData();

            if (flag) {

                axios.post('http://localhost:3000/users', { username, password, email, phone_no, city, gen })
                    .then(response => {
                        setTimeout(() => {
                            alert('Registration successful. Please log in.');
                        }, 0);
                        window.location.replace("login.html");
                    })
                    .catch(error => {
                        console.error('Registration failed:', error);
                    });
            }
        }
        checkUserExistence();






    });
});
function generateToken() {

    return 'dummyToken';
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}
function IsValidPass(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(password)) {
        return false;
    }
    else {
        return true;
    }
}

function IsValidUsername(username) {
    var regex = /^([a-zA-Z0-9 _-]+)$/;
    if (!regex.test(username)) {
        return false;
    }
    else {
        return true;
    }
}