import { useState } from "react";
import { SECOND_MENU } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { ThirdStep } from "./ThirdStep";

export const SecondStep = ({ innerText, setStep, onClick }) => {
  const [secondMenu, setSecond] = useState("");

  return (
    <>
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
