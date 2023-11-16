const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link"),
    signUpBtn = document.querySelector(".signup-btn"),

    loginBtn = document.querySelector(".login-btn");


    //   regPw = document.querySelector(".registration-password").value,
    //   regEmail = document.querySelector(".registration-email").value,

    //   loginEmail = document.querySelector(".login-email").value,
    //   loginPw = document.querySelector(".login-password").value;

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    // registration confirmation
    signUpBtn.addEventListener("click", () => {
        alert("Registration successful.");
        container.classList.remove("active");

    });

    // login confirmation
    // loginBtn.addEventListener("click", loginConfirmation());

    // function loginConfirmation(){
        // if(regPw === loginPw && regEmail === loginEmail ){
            // container.classList.remove("active");
            // alert("Login successful. Welcome !");

        // }
    // }




    // loginBtn.addEventListener("click", loginConfirmation );

function loginConfirmation() {

    // Retrieve field values when the button is clicked
    const loginEmail = document.querySelector(".login-email").value;
    const loginPw = document.querySelector(".login-password").value;

    const regEmail = document.querySelector(".registration-email").value;
    const regPw = document.querySelector(".registration-password").value;

    // Check if the values are empty
    if (regEmail.trim() === "" || regPw.trim() === "") {
        alert("Please fill in registration details.");
        return;
    }



    if (loginEmail.trim() === "" || loginPw.trim() === "") {
        alert("Please fill in login details.");
        return;
    }



    // Perform the verification
    if (regPw === loginPw && regEmail === loginEmail) {
        alert("Login successful. Welcome!");
        window.location= "webcontent.html";
    } else {
        alert("Login failed. Please check your credentials.");
    }
}


    
    



