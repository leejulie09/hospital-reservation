import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "moment/locale/ko";

import ReservationCarousel from "./ReservationCarousel";

const Reservation = () => {
  const [transformValueIndex, setTransformValueIndex] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [selectedDepartment, setselectedDepartment] = useState("");
  const [onCalendar, setOnCalendar] = useState(false);
  const modalElement = useRef(null);
  const [value, onChange] = useState(new Date());

  const changeClientName = (e) => {
    const { value } = e.target;
    setClientName(value);
  };
  const changeClientPhoneNumber = (e) => {
    const { value } = e.target;
    setClientPhoneNumber(value);
  };
  console.log(transformValueIndex);
  const pageNextClick = () => {
    if (transformValueIndex < 2 && (clientName && clientPhoneNumber) !== "") {
      setTransformValueIndex((prev) => prev + 1);
    } else if ((clientName || clientPhoneNumber) === "") {
      alert("이름과 휴대폰번호를 작성해주세요!");
    }
  };
  const pagePrevClick = () => {
    if (0 < transformValueIndex && transformValueIndex <= 2) {
      setTransformValueIndex((prev) => prev - 1);
    }
  };
  const confrimClick = () => {};
  const departmentClick = () => {
    setOnCalendar(true);
  };

  const offModal = (e) => {
    if (!modalElement.current.contains(e.target)) {
      setOnCalendar(false);
    }
  };
  console.log(clientName);
  return (
    <>
      {onCalendar && (
        <CalendarModalBackground onClick={offModal}>
          <CalendarModalWindow ref={modalElement}>
            <CalendarTitle>예약 날짜 선택</CalendarTitle>
            <CalendarUIBox>
              <Calendar onChange={onChange} value={value} />
            </CalendarUIBox>
          </CalendarModalWindow>
        </CalendarModalBackground>
      )}
      <Container>
        <Wrapper>
          <SelectionBox>
            <ReservationProgressBox>
              <ReservationCarousel
                transformValueIndex={transformValueIndex}
                changeClientName={changeClientName}
                clientName={clientName}
                changeClientPhoneNumber={changeClientPhoneNumber}
                clientPhoneNumber={clientPhoneNumber}
                departmentClick={departmentClick}
                setselectedDepartment={setselectedDepartment}
              />
              <PagenationButtonBox>
                <PrevButton onClick={pagePrevClick}>이 전</PrevButton>
                {transformValueIndex === 2 ? (
                  <NextButton onClick={confrimClick}>확 인</NextButton>
                ) : (
                  <NextButton onClick={pageNextClick}>다 음</NextButton>
                )}
              </PagenationButtonBox>
            </ReservationProgressBox>
          </SelectionBox>
          <PreviewBox>
            <PreviewTitle>예약정보 확인</PreviewTitle>
            <PreviewContents>
              <PreviewValueBox>
                <PreviewLabel>이 름</PreviewLabel>
                <PreviewValue>{clientName}</PreviewValue>
              </PreviewValueBox>
              <PreviewValueBox>
                <PreviewLabel>번 호</PreviewLabel>
                <PreviewValue>{clientPhoneNumber}</PreviewValue>
              </PreviewValueBox>
              <PreviewValueBox>
                <PreviewLabel>과 목</PreviewLabel>
                <PreviewValue>{selectedDepartment}</PreviewValue>
              </PreviewValueBox>
              <PreviewValueBox>
                <PreviewLabel>날 짜</PreviewLabel>
                <PreviewValue>{}</PreviewValue>
              </PreviewValueBox>
            </PreviewContents>
          </PreviewBox>
        </Wrapper>
      </Container>
    </>
  );
};
export default Reservation;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5%;
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90rem;
  height: 45rem;
  min-width: 80rem;
  min-height: 35rem;
`;
const SelectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const ReservationProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  width: 95%;
  height: 95%;
`;

const PagenationButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 15%;
`;

const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  font-size: 2rem;
  font-weight: 700;
  background-color: #f7d436;
  border-radius: 1rem;
  :hover {
    cursor: pointer;
  }
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 80%;
  font-size: 2rem;
  font-weight: 700;
  background-color: #f7d436;
  border-radius: 1rem;
  :hover {
    cursor: pointer;
  }
`;
const PreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  height: 70%;
  border-radius: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

const PreviewTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 1px solid #dbdbdb;
`;

const PreviewContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 5% 9% 5% 5%;
`;
const PreviewValueBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 4%;
`;
const PreviewLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
`;
const PreviewValue = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: 0.1rem solid #dbdbdb;
`;

const CalendarModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const CalendarModalWindow = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: white;
  border-radius: 3rem;
`;
const CalendarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18%;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 0.1rem solid #dbdbdb;
`;
const CalendarUIBox = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
`;
