import { KOR_CATEGORY, JAP_CATEGORY, WEST_CATEGORY } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";
import { ContentsWrapper } from "../@common/ContentsBox/ContentsBox.style";

export const ThirdStep = ({
  step,
  setStep,
  onClick,
  innerText,
  secondMenu,
  thirdSelect,
  setThird,
}) => {
  const Kor = () => {
    return (
      <>
        <p>{step}/3</p>
        <ContentsWrapper>
          {KOR_CATEGORY.map((item, index) => {
            return (
              <ContentsBox key={index} onClick={() => setThird(item)}>
                {item}
              </ContentsBox>
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
          thirdSelect={thirdSelect}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  const Jap = () => {
    return (
      <>
        <ContentsWrapper>
          {JAP_CATEGORY.map((item, index) => {
            return (
              <ContentsBox key={index} onClick={() => setThird(item)}>
                {item}
              </ContentsBox>
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
          thirdSelect={thirdSelect}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  const West = () => {
    return (
      <>
        <ContentsWrapper>
          {WEST_CATEGORY.map((item, index) => {
            return (
              <ContentsBox key={index} onClick={() => setThird(item)}>
                {item}
              </ContentsBox>
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
          thirdSelect={thirdSelect}
        >
          {innerText}
        </NextBtn>
      </>
    );
  };

  if (secondMenu === "한식") return <Kor></Kor>;
  else if (secondMenu === "일식") return <Jap></Jap>;
  else if (secondMenu === "양식") return <West></West>;
};
