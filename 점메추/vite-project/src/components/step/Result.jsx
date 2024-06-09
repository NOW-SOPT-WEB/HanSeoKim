import { useState } from "react";
import { MENUS, SELECTIONS } from "../../data/CATEGORY";
import CountDown from "./Countdown";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";

export const Result = ({
  selectedMenu,
  setSelectedMenu,
  setStep,
  selectedMethod,
}) => {
  console.log("결과: ", selectedMethod);
  const [count, setCount] = useState(3);
  const targetMenu = SELECTIONS[0];
  const randomMenu = SELECTIONS.sort(() => Math.random() - 0.5)[0];
  return (
    <>
      {count > 0 && selectedMethod === "random" ? (
        <CountDown count={count} setCount={setCount}></CountDown>
      ) : (
        <ContentsBox>
          <img src={randomMenu.url} />
          <h3>{randomMenu.name}</h3>
        </ContentsBox>
      )}
    </>
  );
};
