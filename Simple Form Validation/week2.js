// JavaScript Document

window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.querySelector(`[name=info]`)
    const firstName =  document.querySelector(`#first-name`)
    const fnError = document.querySelector(`#fn-error`)

    var nameReg = /^[a-zA-Z0-9\s]*$/
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fnError.innerHTML = "";
        firstName.classList.remove('error')

        if(nameReg.test(firstName.value) ){
            firstName.classList.add('error')
            fnError.textContent = "&#10006";
            "please enter a valid name";
        }
        else if (firstName.value === ""){
            firstName.classList.add('error')
            fnError.textContent = "Please enter a name"
        }

    })
})