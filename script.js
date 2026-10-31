// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();

// Gallery lightbox: click a screenshot to see it up close
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
let lastFocused = null;

function openLightbox(shot) {
  const img = shot.querySelector("img");
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = img.alt;
  lastFocused = shot;
  lightbox.hidden = false;
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".shot").forEach((shot) => {
  shot.addEventListener("click", () => openLightbox(shot));
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.closest(".lightbox-close")) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});
