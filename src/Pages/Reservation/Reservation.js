import React, { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment/moment";
import "moment/locale/ko";
import { BsCalendar3 } from "react-icons/bs";
import { CiStethoscope } from "react-icons/ci";
import {
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoIosPerson,
} from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Button, ButtonBase } from "@mui/material";
import ButtonBox from "./ButtonBox";

const Reservation = () => {
  const [transformValueIndex, setTransformValueIndex] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [onCalendar, setOnCalendar] = useState(true);
  const modalElement = useRef(null);
  const [value, onChange] = useState(new Date());
  const [togle, setTogle] = useState({
    date: false,
    time: false,
  });
  console.log(value);
  const transformValue = ["100%", "0%", "-100%"];
  const departmentArray = ["내 과", "외 과", "산부인과", "치과"];
  const changeClientName = (e) => {
    const { value } = e.target;
    setClientName(value);
  };
  const changeClientPhoneNumber = (e) => {
    const { value } = e.target;
    setClientPhoneNumber(value);
  };
  const pageNextClick = () => {
    if (transformValueIndex < 2) {
      setTransformValueIndex((prev) => prev + 1);
    }
  };
  const pagePrevClick = () => {
    if (0 < transformValueIndex && transformValueIndex <= 2) {
      setTransformValueIndex((prev) => prev - 1);
    }
  };
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
              <CarouselWrapper>
                <Carousel transformValue={transformValue[transformValueIndex]}>
                  <TitleBox>STEP 1. 예약자 정보 입력</TitleBox>
                  <ClientInformaitionBox>
                    <InputBox>
                      <Label>이 름</Label>
                      <Inputs
                        type="text"
                        onChange={changeClientName}
                        value={clientName}
                      />
                    </InputBox>
                    <InputBox>
                      <Label>휴대폰번호</Label>
                      <Inputs
                        type="text"
                        onChange={changeClientPhoneNumber}
                        value={clientPhoneNumber}
                      />
                    </InputBox>
                  </ClientInformaitionBox>
                </Carousel>
                <Carousel transformValue={transformValue[transformValueIndex]}>
                  <TitleBox>STEP 2. 진료 과목 선택</TitleBox>
                  <ClientInformaitionBox>
                    <InputBox>
                      <Label>진료 과목</Label>
                      <ButtonBoxWrapper>
                        {departmentArray.map((i) => (
                          <ButtonBox
                            departmentClick={departmentClick}
                            text={i}
                          />
                        ))}
                      </ButtonBoxWrapper>
                    </InputBox>
                    <InputBox>
                      <Label>예약 희망 날짜</Label>
                      <ReservationDateBox>
                        <ReservationDate>
                          {"2022년 10월 30일 오후 3시 30분"}
                        </ReservationDate>
                        <DateChangeButton>예약 날짜 변경</DateChangeButton>
                      </ReservationDateBox>
                    </InputBox>
                  </ClientInformaitionBox>
                </Carousel>
                <Carousel transformValue={transformValue[transformValueIndex]}>
                  <TitleBox>STEP 3. 읽고 확인해주세요</TitleBox>
                  <ClientInformaitionBox>
                    <Label>방문이 어려울 경우 미리 말씀해주세요</Label>
                  </ClientInformaitionBox>
                </Carousel>
              </CarouselWrapper>
              <PagenationButtonBox>
                <PrevButton onClick={pagePrevClick}>이 전</PrevButton>
                <NextButton onClick={pageNextClick}>다 음</NextButton>
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
  width: 100rem;
  height: 55rem;
  min-width: 100rem;
  min-height: 55rem;
`;
const SelectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;
const ButtonBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
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

const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  height: 100%;
  transition: 0.3s all;
  transform: translateX(${(props) => props.transformValue});
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 2.5rem;
  font-weight: 700;
`;

const ClientInformaitionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 0% 5%;
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 2rem;
  font-weight: 700;
`;
const Inputs = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  font-size: 2rem;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.1rem solid #dbdbdb;
`;

const ReservationDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const ReservationDate = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 2rem;
  font-weight: 700;
`;
const DateChangeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 1.7rem;
  font-weight: 700;
  background-color: #f7d436;
  border-radius: 1rem;
  :hover {
    cursor: pointer;
  }
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

// const Container = styled.div`
//   min-width: 800px;
//   height: 100%;
//   margin-top: 40px;
//   padding: 20px;
//   text-align: center;
//   border: 1px solid #a0a0a0;
// `;

const PickArea = styled.div`
  margin: 60px;
`;
const BorderTag = styled.span`
  padding-bottom: 5px;
  border-bottom: 1px solid #a0a0a0;
  vertical-align: middle;
`;

const TogleArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const BtnArea = styled.div`
  display: flex;
  gap: 10px;
`;

const InputName = styled.input`
  border: none;
  outline: none;
`;

const Department = styled.select`
  border: none;
  outline: none;
`;

const TimeBtn = styled.button``;

const SumbitBtn = styled.button``;

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
