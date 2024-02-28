// popular cakes part *********************************************************

// frist take a data ****************************************
const designcake_data = [
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-2.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-3.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-4.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-5.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-6.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-7.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-8.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-9.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-10.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-11.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-12.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-13.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-14.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-15.jpg",
  },
];

// selector

const container = document.querySelector(".Dconatainer");

function DesignCakesContainer() {
  designcake_data.forEach((designcake, i) => {
    const li = document.createElement("li"); ///li
    li.setAttribute("class", "imagep"); //take className

    li.innerHTML = `
          <img src="${designcake.image}" />
          <p>${designcake.order}</p>
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

DesignCakesContainer();
