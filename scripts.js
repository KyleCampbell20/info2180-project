/* Add your JavaScript to this file */
window.onload = function(){
  const email = document.getElementById('email')
  var form = document.querySelector('form');
  const errors = document.getElementsByClassName('message');
  
  form.addEventListener('submit', (e) => {
    let messages=[]
    
   if( email.value === ' ' )
   { 
     messages.push('Please enter a valid email address')
     //alert("Please enter a valid email address")
     
      errors.innerHTML="Please enter a valid email address"
     
    }
    else//if (email.value != " " || email.value != null){
    {  errors.innerHTML="Thank you! Your email address <example@address.com has been added to our mailing list!"
      //alert("Thank you! Your email address <example@address.com has been added to our mailing list!")
      messages.push("Thank you! Your email address <example@address.com has been added to our mailing list!")
    }
    if (messages.length>0)
    {
      e.preventDefault()
      errors.innerText = messages.join(', ')
    }
    
  })
  
};

