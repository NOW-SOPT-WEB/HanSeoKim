import kimchi from "../assets/kimchi.png";
import soondubu from "../assets/soondubu.png";
import bibim from "../assets/bibim.png";
import janchi from "../assets/janchi.png";
import galbi from "../assets/galbi.png";
import samgyeob from "../assets/samgyeob.png";
import baekban from "../assets/baekban.png";
import gatsudong from "../assets/gatsudong.png";
import udong from "../assets/udong.png";
import ramen from "../assets/ramen.png";
import yakiniku from "../assets/yakiniku.png";
import skiyaki from "../assets/skiyaki.png";
import pizza from "../assets/pizza.png";
import pasta from "../assets/pasta.png";
import cheese from "../assets/cheese.png";
import escargo from "../assets/escargo.png";
import hamburger from "../assets/hamburger.png";
import steak from "../assets/steak.png";

export const MENUS = [
  {
    category: "taste",
    title: "취향대로 추천",
  },
  {
    category: "random",
    title: "랜덤 추천",
  },
];

export const SECOND_MENU = ["한식", "일식", "양식"];
export const KOR_CATEGORY = ["찌개", "면", "고기"];
export const JAP_CATEGORY = ["밥", "면", "고기"];
export const WEST_CATEGORY = ["이탈리아", "프랑스", "미국"];
export const SPICY = ["매운거", "안매운거"];
export const EXPEN = ["비싼거", "안비싼거"];

export const SELECTIONS = [
  {
    id: 0,
    name: "김치찌개",
    type_nation: "한식",
    type_shape: "찌개",
    type_spicy: "매운거",
    url: kimchi,
  },
  {
    id: 1,
    name: "순두부찌개",
    type_nation: "한식",
    type_shape: "찌개",
    type_spicy: "안매운거",
    url: soondubu,
  },
  {
    id: 2,
    name: "비빔국수",
    type_nation: "한식",
    type_shape: "면",
    type_spicy: "매운거",
    url: bibim,
  },
  {
    id: 3,
    name: "잔치국수",
    type_nation: "한식",
    type_shape: "면",
    type_spicy: "안매운거",
    url: janchi,
  },
  {
    id: 4,
    name: "매운갈비",
    type_nation: "한식",
    type_shape: "고기",
    type_spicy: "매운거",
    url: galbi,
  },
  {
    id: 4,
    name: "삼겹살",
    type_nation: "한식",
    type_shape: "고기",
    type_spicy: "매운거",
    url: samgyeob,
  },
  {
    id: 5,
    name: "일본가정식",
    type_nation: "일식",
    type_shape: "밥",
    type_spicy: "안매운거",
    url: baekban,
  },
  {
    id: 6,
    name: "가츠동",
    type_nation: "일식",
    type_shape: "밥",
    type_spicy: "매운거",
    url: gatsudong,
  },
  {
    id: 7,
    name: "우동",
    type_nation: "일식",
    type_shape: "면",
    type_spicy: "안매운거",
    url: udong,
  },
  {
    id: 8,
    name: "라멘",
    type_nation: "일식",
    type_shape: "면",
    type_spicy: "매운거",
    url: ramen,
  },
  {
    id: 9,
    name: "야끼니꾸",
    type_nation: "일식",
    type_shape: "고기",
    type_spicy: "안매운거",
    url: yakiniku,
  },
  {
    id: 10,
    name: "스키야키",
    type_nation: "일식",
    type_shape: "고기",
    type_spicy: "매운거",
    url: skiyaki,
  },
  {
    id: 11,
    name: "피자",
    type_nation: "양식",
    type_shape: "이탈리아",
    type_price: "안비싼거",
    url: pizza,
  },
  {
    id: 12,
    name: "파스타",
    type_nation: "양식",
    type_shape: "이탈리아",
    type_price: "비싼거",
    url: pasta,
  },
  {
    id: 13,
    name: "치즈",
    type_nation: "양식",
    type_shape: "프랑스",
    type_price: "안비싼거",
    url: cheese,
  },
  {
    id: 14,
    name: "에스카르고",
    type_nation: "양식",
    type_shape: "프랑스",
    type_price: "비싼거",
    url: escargo,
  },
  {
    id: 15,
    name: "햄버거",
    type_nation: "양식",
    type_shape: "미국",
    type_price: "안비싼거",
    url: hamburger,
  },
  {
    id: 16,
    name: "스테이크",
    type_nation: "양식",
    type_shape: "미국",
    type_price: "비싼거",
    url: steak,
  },
];
