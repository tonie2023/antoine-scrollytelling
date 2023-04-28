let audio = new Audio("sons/accueil.wav");
let header = document.querySelector("#no1");
header.addEventListener("pointerenter", function () {
  audio.play();
  audio.volume = 1;
});
header.addEventListener("pointerleave", function () {
  audio.pause();
  audio.volume = 0;
});

const body = document.querySelector("body");
bodyClass = document.body;

window.addEventListener("scroll", function () {
  bodyClass.classList.add("is-scrolling");

  const timer = setTimeout(function () {
    bodyClass.classList.remove("is-scrolling");
  }, 100);
});

let anim = gsap.timeline({}).to(".bi-file-arrow-down", {
  y: "1vmin",
  yoyo: true,
  ease: "none",
  repeat: -1,
});

/*Javascript textes section 2:
-----------------------------
-----------------------------
*/
const texteUn = gsap.timeline();

texteUn
  .from(".texte-1", 1.8, {
    x: -820,
    ease: "bounce.out",
    delay: 1,
    stagger: {
      amount: 0.3,
    },
  })
  .to(
    ".texte-1",
    {
      opacity: 0,
    },
    6
  );
const texteAnim = gsap.timeline();

texteAnim
  .from(".texte-2", 1.8, {
    x: -1300,
    ease: "bounce.out",
    delay: 3,
    stagger: {
      amount: 0.3,
    },
  })
  .to(
    ".texte-2",
    {
      opacity: 0,
    },
    7
  );
/*Javascript feuilles:
----------------------
----------------------
*/

let audio1 = new Audio("sons/rustling_leaves.mp3");

let vegetal = document.querySelector("#no2");

vegetal.addEventListener("pointerenter", function () {
  audio1.play();
  audio1.volume = 1;
});
vegetal.addEventListener("pointerleave", function () {
  audio1.pause();
  audio1.volume = 0;
});

gsap.to("#feuille", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille1", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille2", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille3", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille4", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille5", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille6", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
gsap.to("#feuille7", {
  x: "2000%",
  opacity: 0,
  duration: "3.5",
  rotation: 360,
  ease: "none",
  repeat: -1,
});
/*Javascript monstre section 3:
-------------------------------
-------------------------------
*/
const monstre = gsap.timeline();

monstre
  .to("#monstre", 2, {
    opacity: 1,
  })
  .from(
    "#monstre",
    {
      opacity: 0,
    },
    2.5
  )
  .to("#monstre1", 2, {
    opacity: 1,
  })
  .from(
    "#monstre1",
    {
      opacity: 0,
    },
    4.5
  )
  .to("#monstre2", 2, {
    opacity: 1,
  })
  .from(
    "#monstre2",
    {
      opacity: 0,
    },
    6.5
  );
/*Javascript bruits section 4:
-------------------------------
-------------------------------
*/
const lettreAnim = gsap.timeline();

lettreAnim
  .from("#petit_s", {
    x: "-700",
    y: "700",
    opacity: 0,
    rotation: 150,
    duration: "2",
    skewX: "5deg",
    skewY: "100deg",
  })
  .from(
    "#petit_c",
    {
      x: "700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "2.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    1
  )
  .from(
    "#petit_r",
    {
      x: "-700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "3.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    2
  )
  .from(
    "#petit_i",
    {
      x: "-1300",
      y: "300",
      opacity: 0,
      rotation: 150,
      duration: "4.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    3
  )
  .from(
    "#petit_i_02",
    {
      x: "1300",
      y: "-300",
      opacity: 0,
      rotation: 150,
      duration: "4",
      skewX: "5deg",
      skewY: "100deg",
    },
    4
  )
  .from(
    "#petit_i_03",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "4.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    5
  )
  .from(
    "#petit_point",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "5",
      skewX: "5deg",
      skewY: "100deg",
    },
    6
  )
  .from(
    "#petit_point_02",
    {
      x: "-1500",
      y: "700",
      opacity: 0,
      rotation: 150,
      duration: "5.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    7
  )
  .from(
    "#petit_point_exclamation",
    {
      x: "1500",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "6",
      skewX: "5deg",
      skewY: "100deg",
    },
    8
  )
  .from(
    "#moyen_s",
    {
      x: "-700",
      y: "700",
      opacity: 0,
      rotation: 150,
      duration: "2",
      skewX: "5deg",
      skewY: "100deg",
    },
    13.5
  )
  .from(
    "#moyen_c",
    {
      x: "700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "2.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    14.5
  )
  .from(
    "#moyen_r",
    {
      x: "-700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "3",
      skewX: "5deg",
      skewY: "100deg",
    },
    15.5
  )
  .from(
    "#moyen_i",
    {
      x: "-1300",
      y: "300",
      opacity: 0,
      rotation: 150,
      duration: "3.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    16.5
  )
  .from(
    "#moyen_i_02",
    {
      x: "1300",
      y: "-300",
      opacity: 0,
      rotation: 150,
      duration: "4",
      skewX: "5deg",
      skewY: "100deg",
    },
    17.5
  )
  .from(
    "#moyen_i_03",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "4.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    18.5
  )
  .from(
    "#moyen_point",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "5",
      skewX: "5deg",
      skewY: "100deg",
    },
    19.5
  )
  .from(
    "#moyen_point_02",
    {
      x: "-1500",
      y: "700",
      opacity: 0,
      rotation: 150,
      duration: "5.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    20.5
  )
  .from(
    "#moyen_point_exclamation",
    {
      x: "1500",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "6",
      skewX: "5deg",
      skewY: "100deg",
    },
    21.5
  )
  .from(
    "#grand_s",
    {
      x: "-700",
      y: "700",
      opacity: 0,
      rotation: 150,
      duration: "2",
      skewX: "5deg",
      skewY: "100deg",
    },
    26.5
  )
  .from(
    "#grand_c",
    {
      x: "700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "2.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    27.5
  )
  .from(
    "#grand_r",
    {
      x: "-700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "3",
      skewX: "5deg",
      skewY: "100deg",
    },
    28.5
  )
  .from(
    "#grand_i",
    {
      x: "-1300",
      y: "300",
      opacity: 0,
      rotation: 150,
      duration: "3.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    29.5
  )
  .from(
    "#grand_i_02",
    {
      x: "1300",
      y: "-300",
      opacity: 0,
      rotation: 150,
      duration: "4",
      skewX: "5deg",
      skewY: "100deg",
    },
    30.5
  )
  .from(
    "#grand_i_03",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "4.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    31.5
  )
  .from(
    "#grand_point",
    {
      x: "300",
      y: "1300",
      opacity: 0,
      rotation: 150,
      duration: "5",
      skewX: "5deg",
      skewY: "100deg",
    },
    32.5
  )
  .from(
    "#grand_point_02",
    {
      x: "-1500",
      y: "700",
      opacity: 0,
      rotation: 150,
      duration: "5.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    33.5
  )
  .from(
    "#grand_point_exclamation",
    {
      x: "1500",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "6",
      skewX: "5deg",
      skewY: "100deg",
    },
    34.5
  );
