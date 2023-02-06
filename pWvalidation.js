function verify() {
    var n1 = document.getElementById("name1");
    var n1 = document.getElementById("name2");
    var letters = /^[A-Za-z]+$/;
    var pw = document.getElementById("password");
    var pw2 = document.getElementById("confirmPassword");

    console.log(n1 + " " + n2);
    console.log(pw + " " + p2);
    return false;


    if (!(n1.value.match(letters)) || !(n2.value.match(letters))) {
        // console.log("(!(n1.value.match(letters)) || !(n2.value.match(letters)))");
        document.getElementById("blankMsg").innerHTML = "**Only characters are allowed"; 
    }

    


    // console.log((pw != pw2));
    if (pw != pw2) {
        // console.log("bla2");
        document.getElementById("blankMsg2").innerHTML = "**Passwords are not same";
        // return false;
    }

    return false;
}