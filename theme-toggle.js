function initThemeToggle() {
    const body = document.body;
    const toggleBtn = document.querySelector(".header__theme-toggle");
    const savedTheme = localStorage.getItem("theme") || "theme-light";
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(savedTheme);
    if (!toggleBtn) return;
    toggleBtn.textContent =
        body.classList.contains("theme-dark") ? "☀️" : "🌙";

    toggleBtn.onclick = () => {
        const newTheme = body.classList.contains("theme-dark")
            ? "theme-light"
            : "theme-dark";

        body.classList.remove("theme-light", "theme-dark");
        body.classList.add(newTheme);

        localStorage.setItem("theme", newTheme);
        toggleBtn.textContent = newTheme === "theme-dark" ? "☀️" : "🌙";
    };
}
window.initThemeToggle = initThemeToggle;
initThemeToggle();
