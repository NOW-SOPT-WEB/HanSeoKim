/** @jsxImportSource @emotion/react */

import { btnStyle } from "./Button.style";
import { useReducer } from "react";

const NextBtn = ({ innerText, setSelectedMenu, selectedMethod, setStep }) => {
  const reducer = (state, action) => {
    if (action.category === "taste") {
      return setStep(state + 1);
    } else if (action.category === "random") {
      return setStep(4);
    }
  };
  const [, dispatch] = useReducer(reducer, 0);

  const handleStep = () => {
    switch (innerText) {
      case "Start!":
        dispatch({ category: selectedMethod });
        break;

      case "Next":
        setStep((prev) => prev + 1);
        break;

      case "다시하기":
        setStep(0);
        break;

      case "처음으로":
        setStep(0);
        break;
    }
  };

  return (
    <button css={btnStyle} onClick={handleStep}>
      {innerText}
    </button>
  );
};

export default NextBtn;
