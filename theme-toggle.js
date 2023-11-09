document.addEventListener("DOMContentLoaded", function () {
    const themeLink = document.getElementById("theme-link");
    const darkThemeButton = document.getElementById("dark-theme-button");
    const lightThemeButton = document.getElementById("light-theme-button");

    darkThemeButton.addEventListener("click", () => {
        themeLink.setAttribute("href", "dark-theme.css");
    });

    lightThemeButton.addEventListener("click", () => {
        themeLink.setAttribute("href", "light-theme.css");
    });
});
