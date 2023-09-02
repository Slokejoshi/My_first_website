// function onsubmit(){
//     let x = document.formsMyform.Firstname.value;
//     if(x==null || x==""){
//         alert("Name field cannot be empty");
//         return false;
//     }
// }
function onSubmit(){
    let x =document.getElementById("fname").value;
    if(x=="" || x== null){
        prompt("name cannot be empty");
    }
}