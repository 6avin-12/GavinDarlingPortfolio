//hamburger menu
document.querySelector('.hamburger-button').addEventListener('click', function() {
   document.querySelector('.nav-links').style.display = 
   (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none';
});

//pretty pretty gallery
const model = document.querySelector(".model");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        original.src = preview.getAttribute("data-original");
        model.classList.add("open");
        caption.textContent = preview.getAttribute("alt");
    });
});

model.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("model")) {
        model.classList.remove("open");
        original.classList.remove("open");
    }
});
