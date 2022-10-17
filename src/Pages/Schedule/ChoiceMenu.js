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
  width: 100vw;
  height: 100vh;
  padding: 0% 10%;
`;

const ReservationBtn = styled.button`
  width: 50%;
  height: 50%;
  border-radius: 20px;
  text-decoration: none;
  border: #ebebeb;
  font-size: 2rem;
  background-color: #f7d436;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  :hover {
    cursor: pointer;
    transform: translateY(-1rem);
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
