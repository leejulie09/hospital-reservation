import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

const ReservationCheck = () => {
  return (
    <Wrap>
      <Container>
        <AiOutlineCheck />
        예약 조회
        <CheckArea>
          <CheckName placeholder="예약하신 이름 혹은 예약번호를 입력해주세요"></CheckName>
        </CheckArea>
        <SubmitBtn>조회하기</SubmitBtn>
      </Container>
    </Wrap>
  );
};

export default ReservationCheck;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 40px;
`;
const Container = styled.div`
  width: 50%;
  border: 1px solid #a0a0a0;
  padding: 40px;
  text-align: center;
  margin-top: 40px;
`;

const CheckArea = styled.div``;

const CheckName = styled.input`
  width: 600px;
  margin: 40px;
  padding: 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid #a0a0a0;
  :placeholder-shown {
    text-align: center;
  }
`;

const SubmitBtn = styled.button`
  cursor: pointer;
`;
