document.addEventListener("DOMContentLoaded", () => {

  const revealElements =
    document.querySelectorAll(".reveal");


  /* Animaciones al entrar en pantalla */

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    },
    {
      threshold: 0.18
    }
  );


  revealElements.forEach((element) => {

    observer.observe(element);

  });


  /* Movimiento automático parecido al video */

  let autoPlayed = false;


  setTimeout(() => {

    if (autoPlayed) return;

    autoPlayed = true;


    document
      .querySelector("#games")
      .scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

  }, 6500);


  /* Si el usuario utiliza el menú,
     cancelamos el desplazamiento automático */

  document
    .querySelectorAll(".nav a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        autoPlayed = true;

      });

    });


  /* Botón inferior */

  const settings =
    document.querySelector(".settings");


  settings.addEventListener("click", () => {

    document.body.classList.toggle(
      "reduced-motion"
    );

  });

});