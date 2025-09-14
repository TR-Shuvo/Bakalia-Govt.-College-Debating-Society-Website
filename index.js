function toggleNav() {
  const nav = document.getElementById("navbar");
  if (nav.style.right === "0px") {
    nav.style.right = "-250px";
  } else {
    nav.style.right = "0px";
  }
}
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 1) {   // adjust threshold
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});