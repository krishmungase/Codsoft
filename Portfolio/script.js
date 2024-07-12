let typingText = new Typed("#text", {
    strings: ["Web Developer", "Frontend Developer", "JavaScript Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
});

function toggleUserMenu() {
    let userMenu = document.getElementById("user-menu");
    if (userMenu.classList.contains("hidden")) {
        userMenu.classList.remove("hidden");
    } else {
        userMenu.classList.add("hidden");
    }
}

function darkMode() {
    let dark = document.getElementById("darkmode");
    const darkModeButton = document.getElementById("darkmode");
    const lightModeMenu = document.getElementById("lightMode");

    const textlight = document.getElementById("item-1");

    darkModeButton.addEventListener("mouseover", function () {
        lightModeMenu.classList.remove("hidden");
    });

    darkModeButton.addEventListener("mouseout", function () {
        lightModeMenu.classList.add("hidden");
    });

    dark.addEventListener("click", () => {
        let icon = dark.querySelector("ion-icon");
        if (icon.getAttribute("name") === "sunny-outline") {
            icon.setAttribute("name", "moon-outline");
            textlight.textContent = "Switch To DarkMode";
        } else {
            icon.setAttribute("name", "sunny-outline");
            textlight.textContent = "Switch To LightMode";
        }
    });
}
document.addEventListener("DOMContentLoaded", darkMode);

function downloadCV() {
    const link = document.createElement("a");
    link.href = "/Users/krishna/Documents/codsoft_internship/Portfolio/Krish Mungase.pdf";
    link.download = "Krish Mungase.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
