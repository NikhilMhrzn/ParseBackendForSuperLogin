$(document).ready(function() {
    // Get value on button click and show alert
    $("#my_btn").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        console.log(email);
        console.log(password);
    });
});
const Parse = require('parse');
Parse.initialize("app", "javascript");
//javascriptKey is required only if you have it on server.

Parse.serverURL = 'http://localhost:1337/parse'


var user = new Parse.User();
user.set("username", "abc@gmail.com");
user.set("password", "1234");
user.set("email", "abc@gmail.com");


// user.signUp().then(function success(user) {
//     console.log('Singined', user);
// }, function error(err) {
//     console.error(err);
// })

// user.logIn().then(function success(user) {
//     console.log('Logged In', user);
// }, function error(err) {
//     console.error(err);
// })

// Parse.User.logOut().then(function success(user) {
//     console.log('test succcess')
// })

// var currentUser = Parse.User.current();
// if (currentUser) {
//     // do stuff with the user
// } else {
//     // show the signup or login page
// }