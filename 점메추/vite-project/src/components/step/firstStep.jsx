import { MENUS } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { useState } from "react";
import { ContentsText } from "../@common/ContentsBox/ContentsBox.style";
import { alignBoxes } from "../@common/ContentsBox/ContentsBox.style";

export const FirstStep = ({ innerText, onClick, setStep }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const Taste = () => {
    return (
      <>
        <ContentsBox>
          <p>취향대로 추천!</p>
        </ContentsBox>
        <NextBtn
          innerText={"Start!"}
          onClick={onClick}
          setStep={setStep}
          selectedMethod={selectedMethod}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  const Random = () => {
    return (
      <>
        <ContentsBox>
          <p>랜덤 추천!</p>
        </ContentsBox>
        <NextBtn
          innerText={"Start!"}
          onClick={onClick}
          setStep={setStep}
          selectedMethod={selectedMethod}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };
  console.log("selectedMethod:", selectedMethod);
  return (
    <>
      {!selectedMethod ? (
        <>
          <p css={ContentsText}>원하는 추천 방식을 골라줘!</p>
          <div css={alignBoxes}>
            <ContentsBox onClick={() => setSelectedMethod(MENUS[0].category)}>
              <p>취향대로 추천!</p>
            </ContentsBox>
            <ContentsBox onClick={() => setSelectedMethod(MENUS[1].category)}>
              <p>랜덤 추천!</p>
            </ContentsBox>
          </div>
        </>
      ) : selectedMethod === "taste" ? (
        <Taste />
      ) : (
        <Random />
      )}
    </>
  );
};
