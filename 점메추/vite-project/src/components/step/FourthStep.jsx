import { SPICY, EXPEN } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { useState } from "react";

export const FourthStep = ({
  setStep,
  onClick,
  secondMenu,
  innerText,
  thirdSelect,
}) => {
  const [fourthSelect, setFourth] = useState("");
  console.log("44secondMennuu: ", secondMenu);
  console.log("4step", step);
  const Spicy = () => {
    return (
      <>
        {SPICY.map((item, index) => {
          return (
            <>
              <ContentsBox key={index} onClick={() => setFourth(item)}>
                {item}
              </ContentsBox>
            </>
          );
        })}
        <NextBtn
          setStep={setStep}
          onClick={onClick}
          innerText={"Next"}
          fourthSelect={fourthSelect}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  const Ex = () => {
    return (
      <>
        {EXPEN.map((item, index) => {
          return (
            <>
              <ContentsBox key={index} onClick={() => setFourth(item)}>
                {item}
              </ContentsBox>
            </>
          );
        })}

        <NextBtn
          setStep={setStep}
          onClick={onClick}
          innerText={"Next"}
          fourthSelect={fourthSelect}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  if (secondMenu === "양식") return <Spicy />;
  else return <Ex />;
};
