function isValidEmail(email) {
    // A simple email validation using regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function displayMessage(type, message){
    const resultMessage = document.getElementsByClassName('result')[0];
    if (resultMessage){
        resultMessage.textContent = message;
        resultMessage.classList.remove('error', 'success');
        resultMessage.classList.add(type);
    }
    else{
        console.log("class not found")
    }
}

function SubmitDataAction(formResponse) {
    fetch('your-api-gateway-invoke-url-goes-here', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formResponse),
       
        
    })
    .then(response => {
        if (response.ok) {
            alert("Form submission successful");
        } else {
            throw new Error(`Form submission failed with status: ${response.status} ${response.statusText}`);
             
        }
    })
    .catch(error => {
        alert(`An error occurred during form submission with status: ${error} `);
    });
}


function formValidate(event){
    event.preventDefault()
    //get form inputs
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const url = document.getElementById("url").value
    

   // Organize the responses
   var formResponse = {
    name : name,
    email : email,
    phone : phone
  }
  
    
  // perfom checks on form input and generates an error message if an error occurs
    if(!name || !email || !phone){
        displayMessage("error", "Please fill out all details")
    }
    else if (!isValidEmail(email)){
        displayMessage("error", "Invalid Email")
    }
    else {
        displayMessage("success" , "successfully added to the database")
    }

    // call the SubmitDataAction which we use to interact wit the API Gateway
    SubmitDataAction(formResponse)
    
}


// on clicking the submit button in the frontend
document.getElementById("submit-btn").addEventListener("click",formValidate) 

