// Example starter JavaScript for disabling form submissions if there are invalid fields
(function onSubmit() {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to

    var forms = document.querySelectorAll(".needs-validation");
    const Fname = document.getElementById("fname");
    const Lname = document.getElementById("lname");
    const Email = document.getElementById("email");
    let Org_password = document.querySelector(".org-password").value;
    let cnf_password = document.querySelector(".cnf-password").value;
    const submit = document.getElementById("submit-btn");

    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("Firstname =",Fname.value);
        console.log("Lastname =",Lname.value);
        console.log("Email =", Email.value);
        console.log("password =",Org_password.value);
    });




      if(Org_password != cnf_password){
           alert("parrsdfsdklchvk");

      }
    // Loop over them and prevent submission

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