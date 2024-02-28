// popular cakes part *********************************************************

// frist take a data ****************************************
const trandingcake_data = [
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-2.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-3.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-4.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-5.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-6.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-7.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-8.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-9.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-10.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-11.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-12.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-13.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-14.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-15.jpg",
  },
];

// selector

const container = document.querySelector(".Tconatainer");

function TrandingCakesContainer() {
  trandingcake_data.forEach((trandingcake, i) => {
    const li = document.createElement("li"); ///li
    li.setAttribute("class", "imagep"); //take className

    li.innerHTML = `
          <img src="${trandingcake.image}" />
          <p>${trandingcake.order}</p>
        `;

    container.appendChild(li);
    // this type of function create html like this  ⬇****************

    /*  <div class="Pconatainer">
      <li class="imageP">
          <img src="" />
          <p>orderNow</p>
        </li> 
        </div>
        */
    // console.log(container);
  });
}

TrandingCakesContainer();
