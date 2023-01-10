// Function to validate form inputs
function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var address = document.getElementById("address").value;

  // Check if username is empty
  if (username == "") {
    alert("Username is required");
    return false;
  }

  // Check if email is empty
  if (email == "") {
    alert("Email is required");
    return false;
  }

  // Check if password is empty
  if (password == "") {
    alert("Password is required");
    return false;
  }

  // Check if confirm password is empty
  if (confirmPassword == "") {
    alert("Confirm password is required");
    return false;
  }

  // Check if address is empty
  if (address == "") {
    alert("Address is required");
    return false;
  }

  // Check if passwords match
  if (password != confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  return true;
}

// Add event listener to form submit event
var form = document.getElementById("registrationForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (validateForm()) {
    // Check if address is a real address
    var address = document.getElementById("address").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=" + address);
    xhr.onload = function() {
      if (xhr.status == 200) {
        // Address is real, submit form
        form.submit();
      } else {
        // Address is not real
        alert("Invalid address");
      }
    }
    xhr.send();
  }
});