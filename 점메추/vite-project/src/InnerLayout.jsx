/** @jsxImportSource @emotion/react */
import { FirstStep } from "./components/step/firstStep";
import { Result } from "./components/step/Result";
import { SecondStep } from "./components/step/SecondStep";
import { ThirdStep } from "./components/step/ThirdStep";
import { FourthStep } from "./components/step/FourthStep";

const InnerLayout = ({ step, setStep, secondMenu, thirdSelect }) => {
  console.log("스텝: ", step);
  switch (step) {
    case 0:
      return (
        <>
          <FirstStep setStep={setStep}></FirstStep>
        </>
      );

    case 1:
      return (
        <>
          <SecondStep setStep={setStep}></SecondStep>
        </>
      );

    case 2:
      return (
        <>
          <ThirdStep setStep={setStep} secondMenu={secondMenu}></ThirdStep>
        </>
      );

    case 3:
      return (
        <>
          <FourthStep
            setStep={setStep}
            secondMenu={secondMenu}
            thirdSelect={thirdSelect}
          ></FourthStep>
        </>
      );

    case 4:
      return (
        <>
          <Result setStep={setStep} secondMenu={secondMenu}></Result>
        </>
      );
  }
};

export default InnerLayout;
