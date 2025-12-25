//Menu Effect
function openNav() {
    document.getElementById("menudrop").style.width = "300px";
}
function closeNav() {
    document.getElementById("menudrop").style.width = "0";
}
//Cart Effect         
function closecart() {
    document.getElementById("cartdrop").style.width = "0";
} 
function opencart() {
    document.getElementById("cartdrop").style.width = "400px";
}
//Nav Scroll Effect
window.addEventListener("scroll", () => {
if (window.scrollY > 0) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("transparent");
    navbar.classList.add('scrolled');
} else {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("transparent");
    navbar.classList.remove('scrolled');
}
});
