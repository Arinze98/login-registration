const signinEl = document.getElementById('signin')
const registerEl = document.getElementById('register')
const reg_link = document.getElementById('register_link')
const sig_link = document.getElementById('signin_link')
const heading = document.getElementById('heading')

// register form 
reg_link.addEventListener('click', ()=> {
    heading.innerHTML = 'Get Started Now'
    signinEl.style.display = 'none'
    registerEl.style.display = 'block'
})

// signin form
sig_link.addEventListener('click', ()=> {
    heading.innerHTML = 'Welcome back!'
    signinEl.style.display = 'block'
    registerEl.style.display = 'none'
})