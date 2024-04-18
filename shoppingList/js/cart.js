import { SHOPPING_LIST } from "./shoppingList.js";

const allItemsContainer = document.querySelector(".all_items");

document.addEventListener('DOMContentLoaded', function() {
    if (allItemsContainer) {
        allItemsContainer.addEventListener("click", function(event) {
            const item = event.target.closest(".items");
            if (item) {
                const result = confirm("장바구니에 담으시겠습니까?");
                if (result) {
                    const itemName = item.querySelector(".itemName").textContent; 
                    const itemPrice = parseInt(item.querySelector(".itemPrice").textContent).toLocaleString(); 
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
        item_img: imgSrc
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    return newItem;
}

function deleteItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1); //선택한 index로부터 1개 제거
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // 변경된 장바구니 정보를 다시 저장
    loadCart();
}

function loadCart() {
    const cartList = document.querySelector(".ol_container");
    cartList.innerHTML = "";
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach(function(cartItem) {
        const cartItemElement = document.createElement("ul");
        cartItemElement.classList.add("list_contents");
        cartList.appendChild(cartItemElement);
        cartItemElement.innerHTML = `
            <li><input class="check" type="checkbox" value=""></li>
            <li><div class="image_name"><img src="${cartItem.item_img}"><p class="info">${cartItem.item_name}</p></div></li>
            <li><p class="info">${cartItem.item_price} 원</p></li>
            <li><p class="info">${cartItem.item_category}</p></li>
            <li><button type="submit">삭제</button></li>
        `;
    });
}


document.addEventListener("DOMContentLoaded", function() {
    loadCart();
    const cartList = document.querySelector(".ol_container");

    // 삭제 버튼에 클릭 이벤트를 추가
    cartList.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") { 
            const button = event.target;
            const listItem = button.closest("ul"); // 클릭된 버튼의 상위 요소인 ul 태그
            const index = Array.from(cartList.children).indexOf(listItem); // 삭제할 상품의 인덱스
            deleteItem(index);
        }
    });
});