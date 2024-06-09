import { useCallback, useEffect } from "react";
import { ContentsBox } from "../@common/ContentsBox/ContentsBox";

const CountDown = ({ count, setCount }) => {
  const countDownTimer = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  useEffect(() => {
    const timerId = setInterval(countDownTimer, 1000);
    return () => clearInterval(timerId);
  }, [count, countDownTimer]);

  return (
    <ContentsBox>
      <p>{count}</p>
    </ContentsBox>
  );
};

export default CountDown;
