import { useState } from "react";
import { SECOND_MENU } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { ThirdStep } from "./ThirdStep";

export const SecondStep = ({
  step,
  innerText,
  setStep,
  onClick,
  setSecond,
  secondMenu,
}) => {
  return (
    <>
      <p>{step}/3</p>
      {SECOND_MENU.map((title, index) => {
        return (
          <ContentsBox
            key={index}
            onClick={() => setSecond(title)}
            secondMenu={secondMenu}
          >
            {title}
          </ContentsBox>
        );
      })}
      <NextBtn innerText={"이전으로"} onClick={onClick} setStep={setStep}>
        {innerText}
      </NextBtn>
      <NextBtn
        setStep={setStep}
        onClick={onClick}
        innerText={"Next"}
        secondMenu={secondMenu}
      >
        {innerText}
      </NextBtn>
    </>
  );
};
