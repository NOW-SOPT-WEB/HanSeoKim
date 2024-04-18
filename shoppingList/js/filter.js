import { SHOPPING_LIST } from "./shoppingList.js";

//list
function showItems(category, containerId, titleText) {
    const container = document.getElementById(containerId);
    makeTitle(container, titleText);
    const itemWrapper = document.createElement("section");
    container.appendChild(itemWrapper);
    itemWrapper.classList.add(`${category}_items`, "wrapper");

    SHOPPING_LIST.forEach((item, index) => {
        if (item.category === category || category === "all") {
            makeList(itemWrapper, index);
        }
    });
}

//title
function makeTitle(container, titleText) {
    const title = document.createElement("h2");
    container.appendChild(title);
    title.textContent = titleText;
}

//section
function makeList(container, index) {
    const item = document.createElement("article");
    item.classList.add("items");
    item.innerHTML = `
        <img src="${SHOPPING_LIST[index].imgUrl}" alt="${SHOPPING_LIST[index].name}">
        <p><i class="fa-solid fa-heart"></i></p>
        <p>${SHOPPING_LIST[index].name}</p>
        <p>${SHOPPING_LIST[index].price}원</p>
    `;
    container.appendChild(item);
}

//화면 렌더링
document.addEventListener("DOMContentLoaded", function() {
    showItems("all", "all_wrapper", "ALL");
    showItems("top", "top_wrapper", "TOP");
    showItems("pants", "pants_wrapper", "PANTS");
    showItems("outer", "outer_wrapper", "OUTER");
    
    navClick();
});


//nav select
function navClick() {
    const navItems = document.querySelectorAll(".nav_select");
    const allSections = document.querySelectorAll(".sect");
  
    navItems.forEach(function(navItem) {
      navItem.addEventListener("click", function() {
        const navId = this.id;

        allSections.forEach(function(section) {
          section.classList.add("hidden");
        });

        if (navId == "n1") {
          document.getElementById("all_wrapper").classList.remove("hidden");
        } else if (navId == "n2") {
          document.getElementById("top_wrapper").classList.remove("hidden");
        } else if (navId == "n3") {
          document.getElementById("pants_wrapper").classList.remove("hidden");
        } else if (navId == "n4") {
          document.getElementById("outer_wrapper").classList.remove("hidden");
        }
      });
    });
  }

  //cart
const eachItems = document.querySelector(".items");
document.addEventListener("click",function(){
    const result = confirm("장바구니에 담으시겠습니까?");
    if (result) {
        window.location.href = "cart.html";
    } else {
      
    }

})
  