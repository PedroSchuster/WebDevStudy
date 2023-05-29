console.log("hello")

const form3user = document.getElementById("form3user")
const form3email = document.getElementById("form3mail")
const form4user = document.getElementById("form4user")
const form4email = document.getElementById("form4mail")

document.getElementById("userform3").onsubmit = function submitF(event) {
    event.preventDefault()
    const data = {
        user: form3user.value,
        mail: form3email.value
    }
    
    fetch("/registerUserPostAndJson", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then( (response) => response.text())
    .then( text => console.log(text))

    return false
}


document.getElementById("userform4").onsubmit = function submitF(event) {
    event.preventDefault()
    const data = {
        user: form4user.value,
        mail: form4email.value
    }
    
    fetch(`/registerUserGetAndRoute/${data.user}/${data.mail}`)
    .then( (response) => response.text())
    .then( text => console.log(text))

    return false
}
