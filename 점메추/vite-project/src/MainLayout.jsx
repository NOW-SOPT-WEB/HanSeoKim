/** @jsxImportSource @emotion/react */
import Header from "./components/@common/Header/Header";
import { BoxWrapper } from "./components/@common/ContentsBox/ContentsBox";
import { mainStyle } from "./MainLayout.style";
import InnerLayout from "./InnerLayout";
import { useState } from "react";

const MainLayout = () => {
  const [step, setStep] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [fourthSelect, setFourth] = useState("");
  const [secondMenu, setSecond] = useState("");
  const [thirdSelect, setThird] = useState("");

  return (
    <div css={mainStyle}>
      <Header></Header>
      <BoxWrapper>
        <InnerLayout
          step={step}
          setStep={setStep}
          selectedMethod={selectedMethod}
          fourthSelect={fourthSelect}
          secondMenu={secondMenu}
          thirdSelect={thirdSelect}
          setSelectedMethod={setSelectedMethod}
          setFourth={setFourth}
          setSecond={setSecond}
          setThird={setThird}
        ></InnerLayout>
      </BoxWrapper>
    </div>
  );
};
export default MainLayout;
