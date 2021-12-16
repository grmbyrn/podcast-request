const inputEl = document.querySelector('#email')
const btn = document.querySelector('#submit')
const textError = document.querySelector('.text-error')
const form = document.querySelector('.form')
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let errors = []

btn.addEventListener('click', e => {
    // remove success class
    textError.classList.remove('text-success')

    //reset errors
    errors = []
    //prevent default action of form
    e.preventDefault()
    //validate email address
    const email = inputEl.value

    if(email === '' || email === undefined || !email.match(regEmail)){
        errors.push('Oops! Please check your email')
        textError.innerHTML = errors[0]
    }

    if(!errors.length > 0){
        textError.classList.add('text-success')
        textError.innerHTML = ('Check your email for confirmation')
    }

})