const toggleMobileMenuButton = document.getElementById("toggle-mobile-menu");
const toggleMobileMenuButtonIcon = toggleMobileMenuButton.children[0];
const menuElement = document.getElementById("menu");

toggleMobileMenuButton.addEventListener("click", () => {
    menuElement.classList.toggle("mobile-open");

    if (menuElement.classList.contains("mobile-open")) {
        toggleMobileMenuButtonIcon.classList.remove("fa-bars");
        toggleMobileMenuButtonIcon.classList.add("fa-xmark");
    } else {
        toggleMobileMenuButtonIcon.classList.remove("fa-xmark");
        toggleMobileMenuButtonIcon.classList.add("fa-bars");
    }
});
