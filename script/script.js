gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);

/*----Animations chapitre 2-----*/
let no2 = document.querySelector("#no2");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#no2",
      markers: true,
      pin: true,
      start: "50% 50%",
      end: "50% top",
      scrub: true,
      toggleActions: "restart complete reverse reset",
    },
  })
  .to("#julia", {
    duration: "4",
    scale: "0.250",
    x: "600",
    y: "-325",
  })
  .to(
    "#marie",
    {
      duration: "4",
      scale: "0.250",
      x: "530",
      y: "-325",
    },
    "<"
  );

/*----Animations chapitre 3-----*/
let no3 = document.querySelector("#no3");
let audio2 = new Audio("sons/door.wav");
let audio4 = new Audio("sons/indoor_rain.wav");

let chapitreTrois = document.querySelector("#no3");
chapitreTrois.addEventListener("pointerenter", function () {
  audio2.play();
  audio2.volume = 0.3;
  audio2.currentTime = 0;
  audio4.play();
  audio4.volume = 0.2;
  audio4.currentTime = 0;
});
chapitreTrois.addEventListener("pointerleave", function () {
  audio2.pause();
  audio2.volume = 0;
  audio4.pause();
  audio4.volume = 0;
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#no3",
      markers: true,
      pin: true,
      start: "50% 50%",
      end: "50% top",
      scrub: true,
      toggleActions: "restart complete reverse reset",
    },
  })
  .from(".texte-3", {
    x: "-135",
    scale: "0.1",
    delay: 2,
    opacity: 0,
    ease: "none",
    duration: "3",
  })
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

/*----Animations chapitre 4-----*/
let no4 = document.querySelector("#no4");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#no4",
      markers: true,
      pin: true,
      start: "50% 50%",
      end: "50% top",
      scrub: true,
      toggleActions: "restart complete reverse reset",
    },
  })
  .to("#julia2", {
    scale: "1",
  })
  .to("#julia2", {
    duration: "4",
    scale: "0.650",
    y: "-125",
  })
  .to("#julia2", {
    duration: "4",
    scale: "0.650",
    y: "-125",
    x: "240",
  })
  .to("#julia2", {
    duration: "4",
    y: "25",
    x: "240",
    scaleX: -1,
    scaleY: 1,
  })
  .to("#julia2", {
    duration: "4",
    y: "25",
    x: "-1000",
    scaleX: -1,
    scaleY: 1,
  })
  .to("#julia2", {
    duration: "4",
    y: "25",
    x: "-1000",
    scaleX: 1,
    scaleY: 1,
  })
  .to("#marie-2", {
    x: "-400",
    duration: "4",
  })
  .to("#marie-2", {
    x: "-420",
    y: "20",
    duration: "4",
    scaleX: -1,
    scaleY: -1,
  })
  .to("#marie-2", {
    x: "-90",
    y: "-120",
    duration: "4",
    scaleX: -0.5,
    scaleY: -0.5,
  })
  .to("#marie-2", {
    x: "-100",
    y: "-270",
    duration: "15",
    scaleX: 0.5,
    scaleY: -0.5,
  })
  .to("#marie-2", {
    x: "-80",
    y: "20",
    duration: "4",
    scaleX: 1,
    scaleY: -1,
  })
  .to("#marie-2", {
    x: "-400",
    y: "20",
    duration: "4",
    scaleX: 1,
    scaleY: -1,
  });

/*----Animations chapitre 5-----*/
let no5 = document.querySelector("#no5");

gsap.to("#no5", {
  scrollTrigger: {
    trigger: "#no5",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: true,
    toggleActions: "restart complete reverse reset",
  },
});

/*----Animations chapitre 6-----*/
let no6 = document.querySelector("#no6");

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#no6",
      markers: true,
      pin: true,
      start: "50% 50%",
      end: "50% top",
      toggleActions: "restart complete reverse reset",
    },
    repeat: -1,
  })
  .from("#cercle_01", {
    x: "-700",
    y: "700",
    opacity: 0,
    rotation: 150,
    duration: "2",
    skewX: "5deg",
    skewY: "100deg",
  })
  .from(
    "#cercle_02",
    {
      x: "700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "2.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    2
  )
  .from(
    "#cercle_03",
    {
      x: "-700",
      y: "-700",
      opacity: 0,
      rotation: 150,
      duration: "3.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    3
  )
  .from(
    "#cercle_04",
    {
      x: "-1300",
      y: "300",
      opacity: 0,
      rotation: 150,
      duration: "4.5",
      skewX: "5deg",
      skewY: "100deg",
    },
    4
  )
  .from("#point_interrogation", {
    scaleX: 1,
    x: "-1300",
    y: "300",
    duration: 2,
    opacity: 1,
    rotation: 150,
    skewX: "5deg",
    skewY: "100deg",
  })
  .from("#point_interrogation", {
    scaleX: -1,
  })
  .from("#point_interrogation", {
    scaleX: 1,
  })
  .from("#point_interrogation", {
    scaleX: -1,
  })
  .from("#point_interrogation", {
    scaleX: 1,
  })
  .from("#point_interrogation", {
    scaleX: -1,
  })
  .to("#point_interrogation", {
    scaleX: 1,
    opacity: 0,
    duration: 1,
  })
  .to("#cercle", {
    opacity: 0,
    duration: 2,
  })
  .to("#cercle", {
    opacity: 1,
    duration: 2,
  })
  .to("#cercle", {
    opacity: 0,
    duration: 2,
  })
  .to("#cercle", {
    opacity: 1,
    duration: 2,
  })
  .to("#cercle", {
    opacity: 0,
    duration: 2,
  })
  .to("#cercle", {
    opacity: 1,
    duration: 2,
  });

/*----Animations chapitre 7-----*/
let no7 = document.querySelector("#no7");

gsap.to("#no7", {
  scrollTrigger: {
    trigger: "#no7",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: true,
    toggleActions: "restart complete reverse reset",
  },
});

/*----Animations chapitre 8-----*/
let no8 = document.querySelector("#no8");

gsap.to("#no8", {
  scrollTrigger: {
    trigger: "#no8",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: true,
    toggleActions: "restart complete reverse reset",
  },
});

/*----Animations chapitre 9-----*/
let no9 = document.querySelector("#no9");

gsap.to("#no9", {
  scrollTrigger: {
    trigger: "#no9",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: true,
    toggleActions: "restart complete reverse reset",
  },
});

/*----Animations chapitre 10-----*/
let no10 = document.querySelector("#no10");

gsap.to("#no10", {
  scrollTrigger: {
    trigger: "#no10",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: true,
    toggleActions: "restart complete reverse reset",
  },
});

/*----Animations chapitre 11-----*/
let no11 = document.querySelector("#no11");
let murGauche = document.querySelector("#mur_gauche");
let murDroit = document.querySelector("#mur_droit");

gsap.to("#no11", {
  scrollTrigger: {
    trigger: "#no11",
    markers: true,
    pin: true,
    start: "50% 50%",
    end: "50% top",
    scrub: 0.5,
    toggleActions: "restart complete reverse reset",
  },
  backgroundPosition: "50% 50%",
  ease: "none",
});

gsap
  .timeline({
    ease: "none",
    scrollTrigger: {
      trigger: "#no11",
      start: "50% 50%",
      end: "50% top",
      scrub: true,
    },
  })
  .from(
    "#mur_droit",
    {
      xPercent: "-575",
      ease: "none",
      scrollTrigger: {
        trigger: "#no11",
        start: "50% 50%",
        end: "50% top",
        scrub: true,
      },
    },
    "1"
  )
  .from(
    "#mur_gauche",
    {
      xPercent: "575",
      ease: "none",
      scrollTrigger: {
        trigger: "#no11",
        start: "50% 50%",
        end: "50% top",
        scrub: true,
      },
    },
    "<"
  )
  .from("#escalier", {
    x: "-2000",
    y: "-2000",
    rotation: -75,
    skewY: "8deg",
  })
  .from("#escalier_02", {
    x: "2000",
    y: "-2000",
    rotation: 75,
    skewY: "-8deg",
  })
  .from("#escalier_03", {
    x: "-2000",
    y: "-2000",
    rotation: -75,
    skewY: "8deg",
  })
  .from("#escalier_04", {
    x: "2000",
    y: "-2000",
    rotation: 75,
    skewY: "-8deg",
  })
  .from("#escalier_05", {
    x: "-2000",
    y: "-2000",
    rotation: -75,
    skewY: "8deg",
  })
  .from("#escalier_06", {
    x: "2000",
    y: "-2000",
    rotation: 75,
    skewY: "-8deg",
  })
  .from("#escalier_07", {
    x: "-2000",
    y: "-2000",
    rotation: -75,
    skewY: "8deg",
  })
  .from("#escalier_08", {
    x: "2000",
    y: "-2000",
    rotation: 75,
    skewY: "-8deg",
  })
  .from("#escalier_09", {
    x: "-2000",
    y: "-2000",
    rotation: -75,
    skewY: "8deg",
  });

let audio = new Audio("sons/darkness_tension.mp3");
let header = document.querySelector("#no1");
header.addEventListener("pointerenter", function () {
  audio.play();
  audio.volume = 1;
  audio.currentTime = 0;
});
header.addEventListener("pointerleave", function () {
  audio.pause();
  audio.volume = 0;
});

const body = document.querySelector("body");
let isScrolling;

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});

let anim = gsap.timeline({}).to(".bi-file-arrow-down", {
  y: "1vmin",
  yoyo: true,
  ease: "none",
  repeat: -1,
});

/*Javascript textes:
-----------------------------
-----------------------------
*/
const texteUn = gsap.timeline();

texteUn
  .from(".texte-1", 1.8, {
    x: -970,
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
const texteDeux = gsap.timeline();

texteDeux
  .from(".texte-2", 1.8, {
    x: -1500,
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

const texteQuatre = gsap.timeline();

texteQuatre.from(".texte-4", {
  x: "-345",
  scale: "0.1",
  ease: "none",
  delay: 5,
  opacity: 0,
  duration: "3",
});
const texteCinq = gsap.timeline();

texteCinq.from(".texte-5", {
  x: "-260",
  scale: "0.1",
  ease: "none",
  delay: 8,
  opacity: 0,
  duration: "3",
});
/*Javascript feuilles:
----------------------
----------------------
*/

let audio1 = new Audio("sons/rustling_leaves.mp3");
let audio3 = new Audio("sons/wind.wav");
let vegetal = document.querySelector("#no2");

vegetal.addEventListener("pointerenter", function () {
  audio1.play();
  audio1.volume = 1;
  audio1.currentTime = 0;
  audio3.play();
  audio3.volume = 0.4;
  audio3.currentTime = 0;
});
vegetal.addEventListener("pointerleave", function () {
  audio1.pause();
  audio1.volume = 0;
  audio3.pause();
  audio3.volume = 0;
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
gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      start: "50% 50%",
      end: "50% top",
      toggleActions: "restart complete reverse reset",
      trigger: "#no4",
    },
    repeat: -1,
  })
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
