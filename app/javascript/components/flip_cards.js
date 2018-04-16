
const cards_personal = document.querySelectorAll(".personal-card")
cards_personal.forEach (function(flip_card) {
  flip_card.addEventListener("mouseenter", (event) => {
    flip_card.closest(".personal-card").classList.toggle("flip");
  });
  flip_card.addEventListener("mouseleave", (event) => {
    flip_card.closest(".personal-card").classList.toggle("flip");
  });
});
