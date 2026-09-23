document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const birthdate = document.getElementById("birthdate")
    const genderRadios = document.getElementsByName("gender")
    const terms = document.getElementById("terms")
    const form = document.getElementById("modelRegistrationForm")
    
    // Get error message elements
    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    const birthdateError = document.getElementById("birthdateError")
    const genderError = document.getElementById("genderError")
    const termsError = document.getElementById("termsError")
    
    function validate(event){
        event.preventDefault();
        let isValid = true;
        
        nameError.textContent = "";
        emailError.textContent = "";
        birthdateError.textContent = "";
        genderError.textContent = "";
        termsError.textContent = "";
        
        if(name.value.length <= 5){
            nameError.textContent = "Your name must consist of at least 5 letters";
            isValid = false;
        }
        
        if(!email.value.endsWith("@gmail.com")){
            emailError.textContent = "Email must end with '@gmail.com'";
            isValid = false;
        }
    
        let genderSelected = false;
        for(let radio of genderRadios) {
            if(radio.checked) {
                genderSelected = true;
                break;
            }
        }
        if(!genderSelected){
            genderError.textContent = "You must pick a gender";
            isValid = false;
        }
        
        if(!birthdate.value){
            birthdateError.textContent = "You must fill the Date of Birth";
            isValid = false;
        }
        
        if(!terms.checked){
            termsError.textContent = "You have to agree to the terms and conditions";
            isValid = false;
        }

        if(isValid) {
            alert("Form successfully submitted!");
            form.reset();
        }
    }   

    form.addEventListener('submit', validate);
}); 