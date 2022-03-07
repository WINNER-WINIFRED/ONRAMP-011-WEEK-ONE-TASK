let name = document.getElementById('name');
let email = document.getElementById('email');
let activationToken = document.getElementById('password');
let checkbox = document.getElementById('privacy');
let form = document.querySelector(".container2")

form.addEventListener('submit', validate);

function validate(e){
    e.preventDefault();
    if(name.value == "" || name.length<5){
       document.getElementById('screen').innerText='USERNAME MUST BE FILLED OUT';
       return;
    } if(email.value == ""){
        document.getElementById('screen').innerText='EMAIL MUST BE FILLED OUT!!!';
        return;
    } if(activation.value == ""){
       document.getElementById('screen').innerText='PLEASE FILL OUT THE ACTIVATION!!!';
       return;
    }   if(checkbox.checked == false){
        document.getElementById('screen').innerText='PLEASE TICK THE PRIVACY CHECK!!!';
        return;   
}