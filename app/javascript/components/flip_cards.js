function flip_cards() {

  const card_personal = document.querySelector(".card-personal")
  card_personal.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.currentTarget);
  });

}

export { flip_cards };



// const line_ups = document.querySelectorAll('.line-up')

// const flip_btns = document.querySelectorAll(".btn-get-turn")
// flip_btns.forEach (function(flip_btn) {
//   flip_btn.addEventListener("click", (event) => {
//     flip_btn.closest(".card-black").classList.toggle("flip");
//     if ($(".line-up-close")[0]) {
//       flip_btn.closest(".card-black").querySelector(".line-up").classList.remove("line-up-close");
//       flip_btn.closest(".card-black").querySelector(".line-up-content").classList.remove("line-up-content-close");
//     }
//     flip_btn.closest(".card-black").querySelector(".line-up").classList.add("line-up-open");
//     flip_btn.closest(".card-black").querySelector(".line-up-content").classList.add("line-up-content-open");
//   });
// });

// const cards_black = document.querySelectorAll(".card-black .back")
// const flip_btns = document.querySelectorAll(".btn-get-turn")
// cards_black.forEach (function(card_black) {
//   card_black.addEventListener("click", (event) => {
//     event.currentTarget.closest(".card_black").classList.toggle("flip");
//   });
// });
