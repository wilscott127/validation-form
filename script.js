const username = document.getElementById('username')
const email = document.getElementById('email')
const form = document.getElementById('form')
const type = document.getElementById('type')
const full = document.getElementById('full')
const part = document.getElementById('part')
const errorn = document.getElementById('errorn')
const errore = document.getElementById('errore')
const errorj = document.getElementById('errorj')
const errort = document.getElementById('errort')

form.addEventListener('submit', (e) => {
    let messagen = []
    let messagee = []
    let messagej = []
    let messaget = []
    

    if (username.value.length < 6) {
        messagen.push('Username must be greater than 5 characters')
    }

    if (username.value.length > 10) {
        messagen.push('Username must be less than 11 characters')
    }

    if (username.value.includes('!') || username.value.includes('@') || username.value.includes('#') || username.value.includes('$') || username.value.includes('%') || username.value.includes('&') || username.value.includes('*') || username.value.includes('^') || username.value.includes('?')) {
        messagen.push('Username must not contain special characters')
    }

    if (messagen.length > 0) {
        e.preventDefault()
        errorn.innerText = messagen.join(', ')
        username.classList.add("red-border")
    } else {
        errorn.innerText = "✅"
    }

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        e.preventDefault()
        errore.innerText = "Please enter a valid email"
        email.classList.add("red-border")
    } else {
        errore.innerText = "✅"
    }



    if (position.value === ""){
        console.log(position.value)
        messagej.push('Must select position type')
    }

    if (messagej.length > 0) {
        e.preventDefault()
        errorj.innerText = messagej.join(', ')
        position.classList.add("red-border")
    }  else {
        errorj.innerText = "&#9989;"
    }

    if (!full.checked && !part.checked) {
        e.preventDefault()
        errort.innerText = "Please select full or part time"
    }  else {
        errort.innerText = "&#9989;"
    }


})









    












