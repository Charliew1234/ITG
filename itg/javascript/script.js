const form = document.getElementById('validation_form');
const broadband_holder = document.getElementById('broadband_holder');
const mobile_holder = document.getElementById('mobile_holder');
const radioButtons = document.querySelectorAll('input[name="account_holder"]');
const acc_no = document.getElementById('acc_no');
const phone_no = document.getElementById('phone_no');
const acc_fn = document.getElementById('acc_fn');
const acc_ln = document.getElementById('acc_ln');
const email = document.getElementById('email');
const postcode = document.getElementById('postcode');
const radioBtns = document.querySelector('.radio');
let requiredCount = 0;
const maxCount = 6;

form.addEventListener('submit', (e) =>{
    
   requiredCount= 0;
   validateForm();
   if(requiredCount === maxCount){
       return true;
   }
   e.preventDefault();
})


function validateForm(){

    requiredCount = 0;

    //get value from the inputs

    const accValue = acc_no.value.trim()
    const phoneValue = phone_no.value.trim()
    const fnValue = acc_fn.value.trim()
    const lnValue = acc_ln.value.trim()
    const emailValue = email.value.trim()
    const postcodeValue = postcode.value.trim()

    // check to see if either radio button have been pressed
    if(broadband_holder.checked === false && mobile_holder.checked === false){
        //show errors
        // add error class
        setErrorFor(radioBtns, 'Please select a radio button');
    } else {
        // add success class
        setSuccessFor(radioBtns);
        requiredCount++;
        
    }
    

    if(accValue === ''){
        //if broadband radio button is checked then validate account number
        //show error
        // add error class
        setErrorFor(acc_no, 'Please enter your account number');
    
    

    } else {
        // add success class
        setSuccessFor(acc_no);
        requiredCount++;
    }

    if(phoneValue ==='') {
        setErrorFor(phone_no, 'Please enter your phone number');
    }else {
        // add success class
        setSuccessFor(phone_no);
        requiredCount++;
    }

    if(fnValue === ''){
        //if first name doesnt have a value
        //show error
        // add error class
        setErrorFor(acc_fn, 'Please enter your first name');


    } else {
        // add success class
        setSuccessFor(acc_fn);
        requiredCount++;
    }

    if(lnValue === ''){
        //if last name doesnt have a value
        //show error
        // add error class
        setErrorFor(acc_ln, 'Please enter your last name');


    } else {
        // add success class
        setSuccessFor(acc_ln);
        requiredCount++;
    }

    if(emailValue === ''){
        //if email doesnt have a value
        //show error
        // add error class
        setErrorFor(email, 'Please enter your email');


    } else {
        // add success class
        setSuccessFor(email);
        requiredCount++;
    }

    if(postcodeValue === ''){
        //if postcode doesnt have a value
        //show error
        // add error class
        setErrorFor(postcode, 'Please enter your postcode');


    } else {
        // add success class
        setSuccessFor(postcode);
        requiredCount++;
    }


    return true;


}

function setErrorFor(input, message){
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');

    // add error message inside small tag
    small.innerText = message;

    // add error class
    formInput.classList.add('error');
    formInput.classList.remove('success');
}

function setSuccessFor(input) {
    const formInput = input.parentElement;
    formInput.classList.add('success');
    formInput.classList.remove('error');
}




// check which radio button is checked and hiding & removing value of inputs/labels
function accountCheck() {

    if(broadband_holder.checked){
        document.getElementById('mobile').style.display = "none";
        phone_no.value = '';
        document.getElementById('account').style.display = "block";
    }
    if(mobile_holder.checked){
        document.getElementById('account').style.display = "none";
        acc_no.value = '';
        document.getElementById('mobile').style.display = "block";
    }

}