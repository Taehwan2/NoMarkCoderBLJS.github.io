const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hello ${username}!`;
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) { 
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {

    loginForm.classList.add(HIDDEN);
    paintGreetings(savedUsername);
}

// loginForm.addEventListener("submit",onLoginSubmit);