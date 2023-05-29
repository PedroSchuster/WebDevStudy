async function login(){
    emailValue = document.getElementById("login-email").value
    passwordValue = document.getElementById("login-password").value

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailValue, password: passwordValue})
    }

    const result = await fetch("http://127.0.0.1:3125/login", options);
    const serverResponse = await result.json();
    
    if (serverResponse.user){
        window.location.href =
         `http://127.0.0.1:5500/mandandoDados/frontend/after-login.html?nome=${serverResponse.user.firstname}&sobrenome=${serverResponse.user.lastname}`;
            // Code to modify the element after the page navigation
    }
    else{
        console.log("Email not found or incorrect password!")
    }
}

function loginInfo(){
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get("nome");
    const sobrenome = urlParams.get("sobrenome");

    document.getElementById("main-text").textContent = `Olá ${nome} ${sobrenome}`
}
