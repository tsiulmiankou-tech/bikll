const isPages = location.pathname.includes("/pages/");
const paths = {
    index: isPages ? "../index.html" : "index.html",
    profile: isPages ? "profile.html" : "pages/profile.html",
    login: isPages ? "login.html" : "pages/login.html",
    register: isPages ? "register.html" : "pages/register.html"
};

const isAuth = localStorage.getItem("isAuth");
const nav = document.getElementById("headerNav");

if (nav) {
    if (isAuth === "true") {
        nav.innerHTML = `
            <a href="${paths.profile}">Профиль</a>
            <button id="logoutBtn">Выйти</button>
        `;

        document.getElementById("logoutBtn").onclick = () => {
            localStorage.clear();
            location.href = paths.index;
        };
    } else {
        nav.innerHTML = `
            <a href="${paths.login}">Войти</a>
            <a href="${paths.register}">Регистрация</a>
        `;
    }
}

/* защита профиля */
if (location.pathname.includes("profile.html") && isAuth !== "true") {
    location.href = paths.login;
}

/* регистрация */
const registerForm = document.querySelector(".register__form");
if (registerForm) {
    registerForm.onsubmit = e => {
        e.preventDefault();
        localStorage.setItem("isAuth", "true");
        location.href = paths.profile;
    };
}

/* вход */
const loginForm = document.querySelector(".login__form");
if (loginForm) {
    loginForm.onsubmit = e => {
        e.preventDefault();
        localStorage.setItem("isAuth", "true");
        location.href = paths.profile;
    };
}
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        localStorage.setItem("isAuth", "true");
        location.href = "../index.html";
    });
}

