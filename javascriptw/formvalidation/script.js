

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name =  document.getElementById("name").value.trim();
    const email =  document.getElementById("email").value.trim();
    const password =  document.getElementById("password").value.trim();

    let isValid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    if(name.length < 3){
        document.getElementById("nameError").innerHTML = "Enter a valid name";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email == ""){
         document.getElementById("emailError").innerHTML = "email required";
    }else if(!emailPattern.test()){
         document.getElementById("emailError").innerHTML = "enter correct email";
    }

    if(password.length < 6){
        document.getElementById("passwordError").innerHTML = "Enter a correct password";
        isValid = false;
    }
})



