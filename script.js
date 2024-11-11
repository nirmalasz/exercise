function Empty(input) {
  return input == '';
}

function register() {
  const inputUsername = selectElement("#username-register").value;
  const inputEmail = selectElement("#email-register").value;
  const inputPassword = selectElement("#password-register").value;

if (Empty(inputUsername) || Empty(inputEmail) || Empty(inputPassword)){
  alert('Please fill out the blank.');
  return;
}

let User = { 
  username: inputUsername, 
  email: inputEmail, 
  password: inputPassword
};

setUser(User);

window.location.href = "/login.html";
}


function login() {
  const inputEmail = selectElement("#email-login").value;
  const inputPassword = selectElement("#password-login").value;

if (Empty(inputEmail ) || Empty(inputPassword)) {
  alert('Please fill out the blank.');
}

const users = getUser();

/* variable dari function hanya berlaku di function itu, users bisa diganti 
jadi nyimpen data gt
*/

/*
for (let i=0; i < users.length; i+++){
  const user = users[i];
  
  
  }
*/
let isValidUser = false;
users.forEach(function(user) {

  if (user.email === inputEmail && user.password === inputPassword) {
    isValidUser = true;
  }
});

if (isValidUser) {
  window.location.href = "/home.html";
} else {
  alert('Inccorect email or password.')
}

}

//#region ======== DON'T CHANGE THIS SECTION ========
/*    This section has some functions that allows the program to run
 *  properly. You're not required to change this section but you're
 *  free to learn and explore it yourself!
 */

/**
 * Shorthand for selecting HTML Element.
 *
 * @param {string} [id]
 * @returns {HTMLElement}
 *
 * @author Den
 */
function selectElement(id) {
  return document.querySelector(id);
}

/**
 * Function to save registered users to the storage.
 *
 * @param {{username: string, email: string, password: string}} [user={}]
 * @returns {[{username: string, email: string, password: string}]}
 *
 * @author Den
 */
function setUser(user = {}) {
  const users = getUser();

  if (users == null) {
    localStorage.setItem("users", JSON.stringify([user]));
    return getUser();
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  return getUser();
}

/**
 * Function to retrieve registered users from storage.
 *
 * @returns {[{username: string, email: string, password: string}]}
 *
 * @author Den
 */
function getUser() {
  const users = JSON.parse(localStorage.getItem("users"));
  return !users ? [] : users;
}

const isInHome = location.pathname.includes("home");

if (isInHome) {
  const eUserList = selectElement(".user-list");

  let users = getUser();
  eUserList.innerHTML = "";

  users.forEach(function (user) {
    let li = document.createElement("li");
    li.innerHTML =
      "<p>Username: " +
      user.username +
      "<p>Email: " +
      user.email +
      "<p>Password: " +
      user.password;

    eUserList.innerHTML += li.outerHTML;
  });
}

//#endregion ======== DON'T CHANGE THIS SECTION ========
