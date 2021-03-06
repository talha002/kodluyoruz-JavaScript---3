const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/* Butonlar??n eklenmesi i??in gerekli olan kodlar */
const buttonsContainerDOM = document.querySelector(".btn-container");
const buttons = ["All", "Korean", "Japan", "Chinese"];

buttons.forEach(item => {
  const buttonDOM = document.createElement("button");
  buttonDOM.classList.add("btn-item");
  buttonDOM.setAttribute("onclick", `${item}(), pressed(this)`);
  buttonDOM.innerHTML = item;
  buttonsContainerDOM.append(buttonDOM)
});

/* Butonlar??n stili i??in gerekli olan kodlar */
let unpressedButtons = document.querySelectorAll(".btn-item");
unpressedButtons.forEach(myFunction)

function myFunction(item) {
  unpressedButtonClasses = item.classList.value
}

function pressed(item) {
  let unpressedButtons = document.querySelectorAll(".btn-item");
  unpressedButtons.forEach(myFunction)

  function myFunction(element) {
    unpressedButtonClasses = element.classList
    if (unpressedButtonClasses.value.includes("pressed")){
      unpressedButtonClasses.value = "btn-item"
    }
  }
  item.classList.add("pressed")
}

/* Kategorilere g??re men??lerin tan??mlanmas?? i??in gerekli olan kodlar*/
let menuKorean = []
let menuJapan = []
let menuChinese = []

for (let i = 0; i < menu.length; i++) {
  if (menu[i].category == "Korea"){
    menuKorean.push(menu[i]);
  }
  else if (menu[i].category == "Japan"){
    menuJapan.push(menu[i]);
  }
  else if (menu[i].category == "China"){
    menuChinese.push(menu[i]);
  };
}

/* Men??lerin eklenmesi i??in gerekli olan fonksiyonlar */
function All() {
  let sectionDOM = document.querySelector(".menu");
  let oldMenuContainerDOM = document.querySelector("#menu-container");
  oldMenuContainerDOM.remove();
  let newMenuContainerDOM = document.createElement("div");
  newMenuContainerDOM.classList.add("section-center","row");
  newMenuContainerDOM.setAttribute("id", "menu-container");
  sectionDOM.append(newMenuContainerDOM);
  for (let i = 0; i < menu.length; i++) {
    let titleDOM = menu[i].title;
    let priceDOM = menu[i].price;
    let imgDOM = menu[i].img;
    let descDOM = menu[i].desc;
    menuItemsDOM = document.createElement("div");
    menuItemsDOM.classList.add("menu-items","col-lg-6", "col-sm-12");
    menuItemsDOM.innerHTML = `
    <img src="${imgDOM}" alt="${titleDOM}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${titleDOM}</h4>
        <h4 class="price">${priceDOM}</h4>
      </div>
      <div class="menu-text">
        ${descDOM}
      </div>
    </div>`;
    newMenuContainerDOM.append(menuItemsDOM)
 }
}

function Korean() {
  let sectionDOM = document.querySelector(".menu");
  let oldMenuContainerDOM = document.querySelector("#menu-container");
  oldMenuContainerDOM.remove();
  let newMenuContainerDOM = document.createElement("div");
  newMenuContainerDOM.classList.add("section-center","row");
  newMenuContainerDOM.setAttribute("id", "menu-container");
  sectionDOM.append(newMenuContainerDOM);
  for (let i = 0; i < menuKorean.length; i++) {
    let titleDOM = menuKorean[i].title;
    let priceDOM = menuKorean[i].price;
    let imgDOM = menuKorean[i].img;
    let descDOM = menuKorean[i].desc;
    menuItemsDOM = document.createElement("div");
    menuItemsDOM.classList.add("menu-items","col-lg-6", "col-sm-12");
    menuItemsDOM.innerHTML = `
    <img src="${imgDOM}" alt="${titleDOM}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${titleDOM}</h4>
        <h4 class="price">${priceDOM}</h4>
      </div>
      <div class="menu-text">
        ${descDOM}
      </div>
    </div>`;
    newMenuContainerDOM.append(menuItemsDOM)
 }
}

function Japan() {
  let sectionDOM = document.querySelector(".menu");
  let oldMenuContainerDOM = document.querySelector("#menu-container");
  oldMenuContainerDOM.remove();
  let newMenuContainerDOM = document.createElement("div");
  newMenuContainerDOM.classList.add("section-center","row");
  newMenuContainerDOM.setAttribute("id", "menu-container");
  sectionDOM.append(newMenuContainerDOM);
  for (let i = 0; i < menuJapan.length; i++) {
    let titleDOM = menuJapan[i].title;
    let priceDOM = menuJapan[i].price;
    let imgDOM = menuJapan[i].img;
    let descDOM = menuJapan[i].desc;
    menuItemsDOM = document.createElement("div");
    menuItemsDOM.classList.add("menu-items","col-lg-6", "col-sm-12");
    menuItemsDOM.innerHTML = `
    <img src="${imgDOM}" alt="${titleDOM}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${titleDOM}</h4>
        <h4 class="price">${priceDOM}</h4>
      </div>
      <div class="menu-text">
        ${descDOM}
      </div>
    </div>`;
    newMenuContainerDOM.append(menuItemsDOM)
 }
}

function Chinese() {
  let sectionDOM = document.querySelector(".menu");
  let oldMenuContainerDOM = document.querySelector("#menu-container");
  oldMenuContainerDOM.remove();
  let newMenuContainerDOM = document.createElement("div");
  newMenuContainerDOM.classList.add("section-center","row");
  newMenuContainerDOM.setAttribute("id", "menu-container");
  sectionDOM.append(newMenuContainerDOM);
  for (let i = 0; i < menuChinese.length; i++) {
    let titleDOM = menuChinese[i].title;
    let priceDOM = menuChinese[i].price;
    let imgDOM = menuChinese[i].img;
    let descDOM = menuChinese[i].desc;
    menuItemsDOM = document.createElement("div");
    menuItemsDOM.classList.add("menu-items","col-lg-6", "col-sm-12");
    menuItemsDOM.innerHTML = `
    <img src="${imgDOM}" alt="${titleDOM}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${titleDOM}</h4>
        <h4 class="price">${priceDOM}</h4>
      </div>
      <div class="menu-text">
        ${descDOM}
      </div>
    </div>`;
    newMenuContainerDOM.append(menuItemsDOM)
 }
}