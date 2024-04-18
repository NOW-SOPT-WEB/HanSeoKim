import { SHOPPING_LIST } from "./shoppingList.js";

//home화면으로 이동
const mainLogo = document.querySelector("#main_logo");
function goHome() {
  window.location.href = "index.html";
}

mainLogo.addEventListener("click", goHome);


//장바구니로 이동
const cartPage = document.querySelector("#cart");
document.addEventListener('DOMContentLoaded',function(){
    if(cartPage){
        function goCart() {
            window.location.href = "cart.html";
        }
        cartPage.addEventListener("click",goCart);
    }
    
});



//사이드 메뉴
const menu_btn = document.querySelector(".sideMenu_btn");
const menu = document.querySelector(".side_bar");
const back_btn = document.querySelector(".back_btn");
let keyframes = [
    {transform: "translate3d(100%, 0, 0)"},
    {transform: "translateZ(0)"}
  ];
let options = {
  	duration: 500,
  	fill: "backwards"
};

document.addEventListener('DOMContentLoaded',function(){
    if (menu_btn){
        menu_btn.addEventListener("click",function(){
            menu.classList.remove("hidden");
            menu.animate(keyframes, options);

        });
    }

    if (back_btn){
        back_btn.addEventListener("click",function(){
            menu.classList.add("hidden");
        });
    }
});


//배너 
const slider = document.querySelector(".slider");
const imageBox = document.createElement("div");
document.addEventListener('DOMContentLoaded',function(){
    imageBox.classList.add("image-box");
    if (slider){
        slider.appendChild(imageBox);
        function makeImg(){
            SHOPPING_LIST.forEach((a,i) => {
                const bannerImg = document.createElement("img");
                bannerImg.src = `${SHOPPING_LIST[i].imgUrl}`;
                bannerImg.alt= `${SHOPPING_LIST[i].name}`;
                document.querySelector(".image-box").append(bannerImg);
            }
            )
        }

    let i = 0;
    while (i<2){
        makeImg();
        i += 1;
    }

    }
        
});










 

