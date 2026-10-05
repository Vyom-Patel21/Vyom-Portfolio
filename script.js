const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");


function openMenu() {
    if (sidebar) {
        sidebar.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("show");
    }
}


function closeMenu() {
    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}


if (openSidebar) {
    openSidebar.addEventListener("click", openMenu);
}


if (closeSidebar) {
    closeSidebar.addEventListener("click", closeMenu);
}


if (overlay) {
    overlay.addEventListener("click", closeMenu);
}


/* Close sidebar after selecting a page on mobile */

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});


/* ESC closes sidebar */

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMenu();
    }
});


/* Small reveal animation */

const revealElements = document.querySelectorAll(
    ".neon-box, .tech-category, .project-card, .knowledge-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(15px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);
});