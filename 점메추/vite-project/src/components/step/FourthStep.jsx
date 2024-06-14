import { SPICY, EXPEN } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { ContentsWrapper } from "../@common/ContentsBox/ContentsBox.style";

export const FourthStep = ({
  step,
  setStep,
  onClick,
  secondMenu,
  innerText,
  fourthSelect,
  setFourth,
}) => {
  const Spicy = () => {
    return (
      <>
        <p>{step}/3</p>
        <ContentsWrapper>
          {SPICY.map((item, index) => {
            return (
              <>
                <ContentsBox
                  key={index}
                  onClick={() => {
                    setFourth(item);
                  }}
                >
                  {item}
                </ContentsBox>
              </>
            );
          })}
        </ContentsWrapper>

        <NextBtn innerText={"이전으로"} onClick={onClick} setStep={setStep}>
          {innerText}
        </NextBtn>
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
        <ContentsWrapper>
          {EXPEN.map((item, index) => {
            return (
              <>
                <ContentsBox
                  key={index}
                  onClick={() => {
                    setFourth(item);
                  }}
                >
                  {item}
                </ContentsBox>
              </>
            );
          })}
        </ContentsWrapper>

        <NextBtn innerText={"이전으로"} onClick={onClick} setStep={setStep}>
          {innerText}
        </NextBtn>
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

  if (secondMenu === "양식") return <Ex />;
  else return <Spicy />;
};
