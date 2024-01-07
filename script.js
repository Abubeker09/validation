let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function nameErrors(){
 let name = document.getElementById('contact-name').value;

 if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false
  }
  if (!name.match(/^[a-zA-z]*\s{1}[a-zA-Z]*$/)){
    nameError.innerHTML = 'write full name';
    return false;
  }
  nameError.innerHTML='';
  return true;
}

function phoneErrors(){
  let phone = document.getElementById('contact-phone').value;
 
  if(phone.length < 1){
     phoneError.innerHTML = 'Phone is required';
     return false
   }

   if(phone.length < 10){
    phoneError.innerHTML = 'Phone sould be 10 digits';
    return false
  }

   if (!phone.match(/^[0-9{10}]*$/)){
     phoneError.innerHTML = 'plase write numbers';
     return false;
   }
   phoneError.innerHTML='';
   return true;
 }

 function emailErrors(){
  let email = document.getElementById('contact-email').value;
 
  if(email.length < 2){
     emailError.innerHTML = 'Email is required';
     return false
   }
   if (!email.match(/^[a-zA-Z]*[-._]*[0-9]*[@]*[A-Za-z]*[.]*[a-z]*$/)){
     emailError.innerHTML = 'Email Invalid';
     return false;
   }
   emailError.innerHTML='';
   return true;
 }

 function messageErrors(){
  let message = document.getElementById('contact-message').value;
 
  let num = 30;
  let left = num - message.length;

  if(left > 0){
     messageError.innerHTML =  `${left} characters is required`;
     return false
   }
   if (!message.match(/^[a-zA-z*\s{1}0-9,'".]*$/)){
     messageError.innerHTML = 'write valid message';
     return false;
   }
   messageError.innerHTML='';
   return true;
 }

 function submitErrors(){
 
  if(!nameErrors() || !phoneErrors() || !emailErrors() || !messageErrors() ){
     submitError.innerHTML = 'please fix the error to submit';

     submitError.style.display = 'block'
     setTimeout(()=>{
      submitError.style.display = 'none'
     },2000) 

     return false
   }
   submitError.innerHTML='<h2 class="success">success ✅</h2>';
   setTimeout(()=>{
    submitError.style.display = 'none'
   },3000)
   return true;
 }