document.querySelector('input[type="button"]').addEventListener('click', e =>  {

    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const Email = document.querySelector('#email').value.trim();
    const ConfirmEmail = document.querySelector('#emailConfirm').value.trim()
    const phone = document.querySelector('#phone').value.trim();
    
    // regex
    const regName = /^[a-zA-Z]+$/; // Only letters
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regPhone = /^\+?\d{10,15}$/;
    
    // Initialize validation status
    let isValid = true;
    
    // Clear previous error messages
    document.querySelector('#fn-error').textContent = '';
    document.querySelector('#ln-error').textContent = '';
    document.querySelector('#email-error').textContent = '';
    document.querySelector('#phone-error').textContent = '';

    //clear red tags
    fnLbl = document.querySelector('#fnLabel').style.color = 'black'
    lnLbl = document.querySelector('#lnLabel').style.color = 'black'
    emailLbl = document.querySelector('#emailLabel').style.color = 'black'
    emailbl2 = document.querySelector('#emailLabel2').style.color = 'black'
    phLbl = document.querySelector('#phLabel').style.color = 'black'
    
    // Validate First Name
    if(firstName === '')
    {
        const fnError = document.querySelector('#fn-error');
        const fnLabel = document.querySelector('#fnLabel')
        fnLabel.style.color = 'red';
        fnError.textContent = '*';
        fnError.style.color = 'red';
        isValid = false;
    }
    else if (!regName.test(firstName)) {
        const fnError = document.querySelector('#fn-error');
        const fnLabel = document.querySelector('#fnLabel');
        fnLabel.style.color = 'red';

        fnError.textContent = 'Invalid first name.';
        fnError.style.color = 'red'
        isValid = false;
    }
    // Validate Last Name
    if(lastName === '')
    {
        const lnError = document.querySelector('#ln-error');
        const lnLabel = document.querySelector('#lnLabel')
        lnLabel.style.color = 'red';
        lnError.textContent = '*';
        lnError.style.color = 'red';
        isValid = false;
    }
    else if (!regName.test(lastName)) {
        const lnError = document.querySelector('#ln-error');
        const lnLabel = document.querySelector('#lnLabel')
        lnLabel.style.color = 'red';
        lnError.textContent = 'Invalid last name.';
        lnError.style.color = 'red'
        isValid = false;
    }
    
    // Validate Email
    if (!regEmail.test(Email)) {
        const emailError = document.querySelector('#email-error');
        const emailLabel = document.querySelector('#emailLabel')
        emailLabel.style.color = 'red';
        emailError.textContent = 'Invalid email format.';
        emailError.style.color = 'red';
        isValid = false;
    }
    if(Email !== ConfirmEmail ){
        const emailError = document.querySelector('#email-error2');
        const emailLabel2 = document.querySelector('#emailLabel2');

        emailError.textContent = 'Email does not match';
        emailLabel2.style.color = 'red';
        isValid = false;

    }
    
    // Validate Phone Number
    if (!regPhone.test(phone)) {
        const phoneError = document.querySelector('#phone-error')
        const phLabel = document.querySelector('#phLabel')
        phLabel.style.color = 'red';
        phoneError.textContent = 'Invalid phone number.';
        phoneError.style.color = 'red'
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
        document.querySelector('#form').style.display = 'none';
    } else {
        // Optionally, hide confirmation div if there are validation errors
        document.querySelector('#confirmation').style.display = 'none';
    }
});
