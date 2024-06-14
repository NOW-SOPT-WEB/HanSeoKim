import { useState } from "react";
import { MENUS, SELECTIONS } from "../../data/CATEGORY";
import CountDown from "./Countdown";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";

export const Result = ({
  setStep,
  selectedMethod,
  secondMenu,
  thirdSelect,
  fourthSelect,
  onClick,
}) => {
  console.log();
  const [count, setCount] = useState(3);
  const target = SELECTIONS.filter(
    ({ type_nation, type_shape, type_spicy }) => {
      return (
        type_nation === secondMenu &&
        type_shape === thirdSelect &&
        type_spicy === fourthSelect
      );
    }
  );
  console.log("target배열: ", target);
  const targetMenu = target[0];
  const randomMenu = SELECTIONS.sort(() => Math.random() - 0.5)[0];
  let imgUrl, imgName;

  if (selectedMethod === "random") {
    imgUrl = randomMenu?.url;
    imgName = randomMenu?.name;
  } else if (selectedMethod === "taste") {
    imgUrl = targetMenu?.url;
    imgName = targetMenu?.name;
  }

  console.log(
    "secondMenu:",
    secondMenu,
    "thirdSelection:",
    thirdSelect,
    "fourthSelect:",
    fourthSelect,
    "randomMenu:",
    randomMenu,
    "targetMenu: ",
    targetMenu
  );
  return (
    <>
      {count > 0 && selectedMethod === "random" ? (
        <CountDown count={count} setCount={setCount}></CountDown>
      ) : (
        <>
          <ContentsBox>
            {imgUrl && <img src={imgUrl} />}
            {imgName && <h3>{imgName}</h3>}
          </ContentsBox>
          <NextBtn
            setStep={setStep}
            onClick={onClick}
            innerText={"다시하기"}
          ></NextBtn>
        </>
      )}
    </>
  );
};
