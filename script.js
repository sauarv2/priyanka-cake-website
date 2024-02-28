// Dom selection
//NAV BAR ------------
const BARel = document.querySelector(".menu-bar");
const navel = document.querySelector(".navbar");
//SLIDE--------
const slides = document.querySelectorAll(".projects");
const prevBtn = document.querySelector(".leftI");
const nextBtn = document.querySelector(".rightI");
const i1EL = document.querySelector(".i1");
const imSlide1EL = document.querySelector(".mSlide1");
const detailsEL = document.querySelector(".details");

//cake catagori -------------

const CatgoryEL = document.querySelector(".cakeCatgory ");

let slideIndex = 0; // take a index number

// WHEN WEBSITE IS APPER AT FRIST**********

window.addEventListener("load", () => {
  setTimeout(() => {
    i1EL.style.transform = "scale(1)"; //SLIDE IMAGE SCALE WILL BE 1 after 1 secound
    imSlide1EL.style.transform = "scale(1)"; //resposive img

    // imSlide1EL.style.transform = "scale(1)"; //SLIDE IMAGE SCALE WILL BE 1 after 1 secound
  }, 1000);
});
// Responsive*********
BARel.addEventListener("click", () => {
  navel.classList.toggle("slide"); // SLIDE TOGGLE MEANS SLIDE COME AND GOSE ON SAME BUTTTON
  BARel.classList.toggle("wcolor"); // COLOR WHITE CLICK THE BUTTTON
});

// ADD ACTIVE OR REMOVE ACTIVE*************
function showSlide(index) {
  slides.forEach((slide) => {
    //USING FOR EACH LOOP *** FRIST REMOVE THE ACTIVE
    slide.classList.remove("active");
    slide.classList.remove("scale"); // REMOVE SCALE
    // slide.classList.remove("activeTex"); // REMOVE SCALE
  });
  slides[index].classList.add("active");
  slides[index].classList.add("scale"); // ACTIVE SCALE **NEED EXTRA DIV NOT WORKING ON SAME DIV
}
setInterval(() => {
  slides[index].detailsEL.classList.remove("removeTex");
}, 3000);

// THIS FUNCTION BACKWARD THE SLIDE
function prevSlide() {
  slideIndex--; //DERECMENT
  if (slideIndex < 0) {
    // IF INDEX NUMBER LESS THEN 0
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex); // CALL THE FUNCTION
  // console.log(slideIndex);
}
// THIS FUNCTION FORWARD THE SLIDE
function nextSlide() {
  slideIndex++; // INCREMENT
  if (slideIndex >= slides.length) {
    // IF INDEX NUMBER  EQUAL TO TOTAL NUMBER OF SLIDE
    slideIndex = 0;
  }

  showSlide(slideIndex);
}
// ABOVE FUNCTION ARE CALL IF CLICK THISE BUTTON
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(() => {
  // CALL THIS FUNTION BY TIME USE SEINTERVAL
  nextSlide();
}, 6000);

// ---------------cake occation image dragable *****************

const Boxel = document.querySelector(".container"); //dom sellection
let dragable = false, // take a global vearyable dom
  x, //x accces
  y; //Y access

const dragstart = (e) => {
  dragable = true; //when i mouse down dragable true so it can drag
  x = e.pageX; //  It stores the initial horizontal mouse position in x.
  y = Boxel.scrollLeft; //It also stores the initial horizontal scroll position of the Boxel element in y.
};
const dragging = (e) => {
  if (!dragable) return; // It checks if dragable is true, and if not, it returns early, preventing any further action.

  e.preventDefault(); //It prevents the default behavior of mousemove,
  let positionDiff = e.pageX - x; //It calculates the horizontal difference between the current mouse position and the initial mouse position

  Boxel.scrollLeft = y - positionDiff; // It updates the horizontal scroll position of the Boxel element based on the initial scroll position y minus the positionDiff. This causes the element to scroll horizontally as the user drags the mouse.
};
const dragstop = (e) => {
  dragable = false;
};

Boxel.addEventListener("mousedown", dragstart);
Boxel.addEventListener("mouseup", dragstop);
Boxel.addEventListener("mousemove", dragging);

//These event listeners attach the previously defined event handlers to the mousedown, mouseup, and mousemove events on the Boxel element. When the user interacts with this element, the corresponding event handlers are executed.
