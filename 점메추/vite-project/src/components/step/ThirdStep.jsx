import { KOR_CATEGORY, JAP_CATEGORY, WEST_CATEGORY } from "../../data/CATEGORY";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";
import NextBtn from "../@common/Button/Button";

export const ThirdStep = ({
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
        {KOR_CATEGORY.map((item, index) => {
          return (
            <ContentsBox key={index} onClick={() => setThird(item)}>
              {item}
            </ContentsBox>
          );
        })}
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
        {JAP_CATEGORY.map((item, index) => {
          return (
            <ContentsBox key={index} onClick={() => setThird(item)}>
              {item}
            </ContentsBox>
          );
        })}
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
        {WEST_CATEGORY.map((item, index) => {
          return (
            <ContentsBox key={index} onClick={() => setThird(item)}>
              {item}
            </ContentsBox>
          );
        })}
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
