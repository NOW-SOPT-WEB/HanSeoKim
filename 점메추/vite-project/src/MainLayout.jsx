/** @jsxImportSource @emotion/react */
import Header from "./components/@common/Header/Header";
import { btnStyle } from "./components/@common/Button/Button.style";
import { BoxWrapper } from "./components/@common/ContentsBox/ContentsBox";
import NextBtn from "./components/@common/Button/Button";
import { mainStyle } from "./MainLayout.style";

const MainLayout = () => {
  return (
    <div css={mainStyle}>
      <Header></Header>
      <NextBtn css={btnStyle}>처음으로</NextBtn>

      <BoxWrapper></BoxWrapper>
    </div>
  );
};
export default MainLayout;
