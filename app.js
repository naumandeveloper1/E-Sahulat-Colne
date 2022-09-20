/*
======================================================= 
    The Application is start here 
=======================================================  
 */

// Android screen where we perform all action
let androidScreen = document.querySelector(".andriodScreen");

// Mobile Login select here
let loginscreen = document.querySelector(".loginscreen");

// User phonenumber input get
let phonenumber = document.querySelector(".phonenumber");

// parent element of the space class and childern of the switchbox
let tooglebox = document.querySelector(".tooglebtn");

// circle area where the circle button is toggle 
let Circlearea = document.querySelector(".space");

// Switch btn for the password enable/disable and other properties
let inputpassword = document.querySelector("#password");


// circle is selected here
let circle = document.querySelector(".circle");

// Login Button selected
let Loginbtn = document.querySelector("button.login");


/*
=====================================
       All Database Data is here 
=====================================
 */
let user = [{
    name: "Nauman",
    phoneno: "03011216608",
    password: "09876"

},]

/*
=====================================
       All addEventListener List here 
=====================================
 */

// addEventListener on the tooglebox
circle.addEventListener("click", () => {
    circle.classList.toggle("move");
    Circlearea.classList.toggle("bg");

    if (inputpassword.attributes.length == 3) {
        inputpassword.removeAttribute("disabled");
        inputpassword.style.background = "gray!important"
    }
    else if (inputpassword.attributes.length == 2) {
        inputpassword.setAttribute("disabled", "");
    }
    else {
        console.log(inputpassword.attributes.length);
    }
});

// loginbtn variable name
Loginbtn.addEventListener("click", () => {
    if (phonenumber.value.length > 0) {
        if (phonenumber.value.length < 11) {
            alert("Enter your phonenumber at least 15 digits.")
        } else {
            if (phonenumber.value.length == 11) {
                if (phonenumber.value === user[0].phoneno) {
                } else {
                    alert("The phonenumber is not in the database.")
                    phonenumber.value = '';
                }
                if (inputpassword.value.length > 0) {
                    if (inputpassword.value.length < 5) {
                        alert("Enter your password at least 5 digit.")
                    }
                    else {
                        if (inputpassword.value.length == 5) {
                            if (inputpassword.value === user[0].password) {
                                alert("The account number and password is correct.");
                                loginscreen.remove();
                                window.location.replace("./public/dashboard/dashboard.html");
                            } else {
                                alert("The password is incorrect.");
                                inputpassword.value = ''
                            }
                        } else {
                            alert("The password is not greater than 5 digits.");
                        }
                    }
                } else {
                    alert("Enter your password at least 5 digits.");
                }
            } else {
                alert("Enter the user phonenumber digit 11.");
            }
        }
    } else {
        alert("Enter the user phonenumber first.");
    }
})



// MOBILE was the off then testing run this function
defaultsetting();




/*
========================================================= 
  All Function are make there for the full functional
=========================================================
*/

// Mobile Loginscreen display block set here
// function login() {
//     androidScreen.appendChild(loginscreen);
//     loginscreen.style.display = "block";
// }

function defaultsetting() {
    // Add the password input when the screen is on
    if (inputpassword.attributes.length == 2) {
        inputpassword.setAttribute("disabled", "");
    }
}



