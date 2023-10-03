(function onSubmit() {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  const fName = document.getElementById("fname");
  const lName = document.getElementById("lname");
  const email = document.getElementById("email");
  const orgPassword = document.querySelector(".org-password");
  const cnfPassword = document.querySelector(".cnf-password");
  const submit = document.getElementById("submit-btn");
  const TogglePassword = document.getElementById('togglePassword');
 
  TogglePassword.addEventListener("click",()=>{
    if(orgPassword.type === 'password'){
      orgPassword.type = 'text';
      TogglePassword.classList.toggle('fa-eye');      
    }
    else{
      orgPassword.type = 'password';
      TogglePassword.classList.toggle('fa-eye-slash fa-lg');
    }
  });

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Firstname =", fName.value);
    console.log("Lastname =", lName.value);
    console.log("Email =", email.value);
    console.log("password =", orgPassword.value);

    if (orgPassword.value != cnfPassword.value) {
      alert("Password and Confirm password should be same");
    }
  });

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
