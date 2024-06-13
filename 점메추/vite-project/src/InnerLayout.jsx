/** @jsxImportSource @emotion/react */
import { FirstStep } from "./components/step/firstStep";
import { Result } from "./components/step/Result";
import { SecondStep } from "./components/step/SecondStep";
import { ThirdStep } from "./components/step/ThirdStep";
import { FourthStep } from "./components/step/FourthStep";

const InnerLayout = ({
  step,
  setStep,
  selectedMethod,
  fourthSelect,
  secondMenu,
  thirdSelect,
  setSelectedMethod,
  setFourth,
  setSecond,
  setThird,
}) => {
  switch (step) {
    case 0:
      return (
        <>
          <FirstStep
            setStep={setStep}
            setSelectedMethod={setSelectedMethod}
            selectedMethod={selectedMethod}
          ></FirstStep>
        </>
      );

    case 1:
      return (
        <>
          <SecondStep
            setStep={setStep}
            setSecond={setSecond}
            secondMenu={secondMenu}
          ></SecondStep>
        </>
      );

    case 2:
      return (
        <>
          <ThirdStep
            setStep={setStep}
            secondMenu={secondMenu}
            setThird={setThird}
          ></ThirdStep>
        </>
      );

    case 3:
      return (
        <>
          <FourthStep
            setStep={setStep}
            secondMenu={secondMenu}
            fourthSelect={fourthSelect}
            setFourth={setFourth}
          ></FourthStep>
        </>
      );

    case 4:
      return (
        <>
          <Result
            setStep={setStep}
            secondMenu={secondMenu}
            fourthSelect={fourthSelect}
            thirdSelect={thirdSelect}
            selectedMethod={selectedMethod}
          ></Result>
        </>
      );
  }
};

export default InnerLayout;
