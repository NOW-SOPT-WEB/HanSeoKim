import { SPICY, EXPEN } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";

export const FourthStep = ({
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
