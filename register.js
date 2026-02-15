document.querySelector(".btn-primary").onclick = () => {
    localStorage.setItem("isAuth", "true");
    window.location.href = "index.html";
};
