document.querySelector('input[type="button"]').addEventListener('click', e =>  {

    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const Email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    
    // regex
    const regName = /^[a-zA-Z]+$/; // Only letters
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regPhone = /^\+?\d{10,15}$/;
    
    // Initialize validation status
    let isValid = true;
    
    // Clear previous error messages
    fnError = document.querySelector('#fn-error').textContent = '';
    lnError = document.querySelector('#ln-error').textContent = '';
    emailError = document.querySelector('#email-error').textContent = '';
    phoneError = document.querySelector('#phone-error').textContent = '';
    
    // Validate First Name
    if(firstName === '')
    {
        document.querySelectorAll('p').style.color = 'red';
        isValid = false;
    }
    else if (!regName.test(firstName)) {
        document.querySelector('#fn-error').textContent = 'Invalid first name. Only letters are allowed.';
        isValid = false;
    }
    // Validate Last Name
    if(lastName === '')
    {
        document.querySelectorAll('p').style.color = 'red';
        isValid = false;
    }
    else if (!regName.test(lastName)) {
        document.querySelector('#ln-error').textContent = 'Invalid last name. Only letters are allowed.';
        isValid = false;
    }
    
    // Validate Email
    if (!regEmail.test(Email)) {
        document.querySelector('#email-error').textContent = 'Invalid email format.';
        isValid = false;
    }
    
    // Validate Phone Number
    if (!regPhone.test(phone)) {
        document.querySelector('#phone-error').textContent = 'Invalid phone number. Should be 10 to 15 digits.';
        isValid = false;
    }
    // Display confirmation if all fields are valid
    if (isValid) {
        const person = `
        ${firstName}<br>
        ${lastName}<br>
        ${Email}<br>
        ${phone}
        `;
        document.querySelector('#info').innerHTML = person;
        document.querySelector('#confirmation').style.display = 'block'; // Show confirmation div
    } else {
        // Optionally, hide confirmation div if there are validation errors
        document.querySelector('#confirmation').style.display = 'none';
    }
});
