import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist";

const ChoiceMenu = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ReservationArea>
        <ReservationBtn onClick={() => navigate("/reservation")}>
          예약하기
        </ReservationBtn>
      </ReservationArea>
      <ReservationArea>
        <ReservationBtn onClick={() => navigate("/check")}>
          예약조회
        </ReservationBtn>
      </ReservationArea>
    </Wrapper>
  );
};
export default ChoiceMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReservationBtn = styled.button`
  width: 70%;
  height: 60%;
  border-radius: 20px;
  text-decoration: none;
  border: #ebebeb;
  font-size: 2vh;
  background-color: #ebebeb;
  box-shadow: 0px 0px 2px 4px #ebebeb;
  :hover {
    width: 80%;
    height: 70%;
    transition: width 0.5s, height 0.5s;
  }
`;

const ReservationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  text-align: center;
`;
