/* ScrollReveal */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

/* ao usar crase para montar strings, é possível quebrar linhas */
scrollReveal.reveal(
  ` 
        .banner-elementos h1, .banner-elementos p, .banner-elementos button,
        #como-funciona h2, #como-funciona i, #como-funciona h3, #como-funciona p, #como-funciona .btn,
        #destinos img, #destinos .card-title, #destinos .card-text, #destinos .btn,
        #ajuda h2, #ajuda p, #ajuda .btn,
        #destinos-internacionais h2, #destinos-internacionais .thumbnail,
        footer h2, footer p, footer .btn
      `,
  { interval: 100 }
);

/* botão voltar para o topo */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* When Scroll */
window.addEventListener("scroll", function () {
  backToTop();
});
