import UserServices from "../services/user_services.js";

$(document).ready(function () {

    $('#loginForm').submit(function (event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();
        
        UserServices.getUsersDetails()
            .then(response => {
                var flag = 0;
                response.data.forEach(element => {
                    if(element._username === username){
                        if(element._password === password){

                            sessionStorage.setItem("username", element.username);
                            sessionStorage.setItem("isLogin", true);

                            setTimeout(() => {
                                alert("Login successfull");
                            }, 0);
                            window.location.replace("dashboard-user-movies.html?userId="+element.id);
                        }else{
                            $("#loginError").text("Please enter correct password.");
                            $("#password").val("");
                        }
                        flag = 1;
                    }
                });
                if(flag == 0){
                    $("#loginError").text("Username is not found. Please register to login.");
                }

            })

            .catch(error => {
                console.error('Login failed:', error);
            });


    });
});