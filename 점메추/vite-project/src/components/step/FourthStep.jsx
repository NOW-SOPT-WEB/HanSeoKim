import { SPICY, EXPEN } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";

export const FourthStep = ({
  step,
  setStep,
  onClick,
  secondMenu,
  innerText,
  fourthSelect,
  setFourth,
}) => {
  console.log("44secondMennuu: ", secondMenu);
  const Spicy = () => {
    return (
      <>
        <p>{step}/3</p>
        {SPICY.map((item, index) => {
          return (
            <>
              <ContentsBox key={index} onClick={() => setFourth(item)}>
                {item}
              </ContentsBox>
            </>
          );
        })}
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
        {EXPEN.map((item, index) => {
          return (
            <>
              <ContentsBox key={index} onClick={() => setFourth(item)}>
                {item}
              </ContentsBox>
            </>
          );
        })}

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

  if (secondMenu === "양식")
    return (
      <Ex
        setStep={setStep}
        secondMenu={secondMenu}
        fourthSelect={fourthSelect}
        setFourth={setFourth}
      />
    );
  else
    return (
      <Spicy
        setStep={setStep}
        secondMenu={secondMenu}
        fourthSelect={fourthSelect}
        setFourth={setFourth}
      />
    );
};
