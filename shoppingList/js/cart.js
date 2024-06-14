import { SHOPPING_LIST } from "./shoppingList.js";
let buyList = [];
const allItemsContainer = document.querySelector(".all_items");
document.addEventListener("DOMContentLoaded", function () {
  if (allItemsContainer) {
    allItemsContainer.addEventListener("click", function (event) {
      const item = event.target.closest(".items");
      if (item) {
        const result = confirm("장바구니에 담으시겠습니까?");
        if (result) {
          const itemName = item.querySelector(".itemName").textContent;
          const itemPrice = parseInt(
            item.querySelector(".itemPrice").textContent
          );
          let itemCategory;
          let imgSrc;
          SHOPPING_LIST.forEach((a, i) => {
            if (itemName === SHOPPING_LIST[i].name) {
              itemCategory = SHOPPING_LIST[i].category;
              imgSrc = SHOPPING_LIST[i].imgUrl;
            }
          });

          addToCart(itemName, itemPrice, itemCategory, imgSrc);
        }
      }
    });
  }
});

function addToCart(itemName, itemPrice, itemCategory, imgSrc) {
  const newItem = {
    item_name: itemName,
    item_price: itemPrice,
    item_category: itemCategory,
    item_img: imgSrc,
  };

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(newItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  loadCart();
  return newItem;
}

function deleteItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1); //선택한 index로부터 1개 제거
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // 변경된 장바구니 정보를 다시 저장
  loadCart();
}

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function loadCart() {
  const cartList = document.querySelector(".ol_container");
  cartList.innerHTML = "";
  cartItems
    .map((cartItem) => {
      const cartItemElement = document.createElement("ul");
      cartItemElement.classList.add("list_contents");
      cartList.appendChild(cartItemElement);
      const price = cartItem.item_price.toLocaleString();
      cartItemElement.innerHTML = `
            <li><input data-item-name="${cartItem.item_name}" class="check_each" type="checkbox" value=""></li>
            <li><div class="image_name"><img src="${cartItem.item_img}"><p class="info">${cartItem.item_name}</p></div></li>
            <li><p class="info">${price} 원</p></li>
            <li><p class="info">${cartItem.item_category}</p></li>
            <li><button class=".delete_btn" type="submit">삭제</button></li>
        `;
    })
    .join("");
  pushCart();
}

function pushCart() {
  const checkboxes = document.querySelectorAll(".check_each");
  checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", (event) => {
      const isChecked = event.target.checked;
      const itemName = checkbox.dataset.itemName;

      const selectedItem = cartItems.find(
        (item) => item.item_name === itemName
      );

      if (isChecked && selectedItem) {
        buyList.push(selectedItem);
      } else if (!isChecked && selectedItem) {
        // 만약 체크가 해제되면 buyList에서 해당 아이템을 제거
        const index = buyList.findIndex((item) => item.item_name === itemName);
        if (index !== -1) {
          buyList.splice(index, 1);
        }
      }
    })
  );
  loadCart();
}

//modal화면 load
function loadModal() {
  const modal = document.querySelector(".modal");
  const modal_items = document.querySelector(".modal_items");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const checkboxes = document.querySelectorAll(".check_each");
  let totalPrice = 0;

  // 모달에 선택된 아이템들만 표시
  buyList.forEach((item) => {
    console.log("실행");
    const li = document.createElement("li");
    const price = parseInt(item.item_price);
    const priceString = price.toLocaleString();
    modal_items.appendChild(li);
    li.classList.add("modal_sect");
    li.innerHTML = `
            <img src="${item.item_img}">
            <p class="modal_info">${item.item_name} : ${priceString} 원</p>
        `;
    totalPrice += price;
  });

  // 총 가격 표시
  const totalPriceString = totalPrice.toLocaleString();
  const price = document.createElement("div");
  modal.appendChild(price);
  price.innerHTML = `
        <p class="totalPrice">총 금액 : ${totalPriceString} 원</p>
    `;
}

//modal
const buyBtn = document.querySelector(".purchase_btn");
const modalBuy = document.querySelector(".buy");
const modal = document.querySelector(".modal");
buyBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
});
function closeModal() {
  modal.classList.add("hidden");
}
if (modal) {
  loadModal();
  const back = document.querySelector(".back_btn");
  back.addEventListener("click", closeModal);
  modalBuy.addEventListener("click", function () {
    alert("구매 완료!");
    closeModal();
  });
}

//home으로 이동
const homeBtn = document.querySelector(".goHome");
function goHome() {
  window.location.href = "index.html";
}
homeBtn.addEventListener("click", goHome);

document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  const cartList = document.querySelector(".ol_container");
  console.log("cartList : ", cartList);

  // 삭제 버튼에 클릭 이벤트를 추가
  cartList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const listItem = button.closest("ul"); // 클릭된 버튼의 상위 요소인 ul 태그
      const index = Array.from(cartList.children).indexOf(listItem); // 삭제할 상품의 인덱스
      deleteItem(index);
    }
  });
});
