import styled from "styled-components";
import DepartmentSelectButtonBox from "./DepartmentSelectButtonBox";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";

function ReservationCarousel({
  transformValueIndex,
  changeClientName,
  clientName,
  changeClientPhoneNumber,
  clientPhoneNumber,
  departmentClick,
  setselectedDepartment,
}) {
  const [confirm, setConfirm] = useState(false);
  const transformValue = ["100%", "0%", "-100%"];
  const departmentArray = ["내 과", "외 과", "산부인과", "치과"];

  const confirmClick = () => {
    setConfirm((prev) => !prev);
  };
  return (
    <CarouselWrapper>
      <Carousel transformValue={transformValue[transformValueIndex]}>
        <TitleBox>STEP 1. 예약자 정보 입력</TitleBox>
        <ClientInformaitionBox>
          <InputBox>
            <Label flex="flex-start">이 름</Label>
            <Inputs
              type="text"
              onChange={changeClientName}
              value={clientName}
            />
          </InputBox>
          <InputBox>
            <Label flex="flex-start">휴대폰번호</Label>
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
            <Label flex="flex-start">진료 과목</Label>
            <ButtonBoxWrapper>
              {departmentArray.map((i) => (
                <DepartmentSelectButtonBox
                  departmentClick={departmentClick}
                  setselectedDepartment={setselectedDepartment}
                  text={i}
                />
              ))}
            </ButtonBoxWrapper>
          </InputBox>
          <InputBox>
            <Label flex="flex-start">예약 희망 날짜</Label>
            <ReservationDateBox>
              <ReservationDate>{}</ReservationDate>
              <DateChangeButton>예약 날짜 변경</DateChangeButton>
            </ReservationDateBox>
          </InputBox>
        </ClientInformaitionBox>
      </Carousel>
      <Carousel transformValue={transformValue[transformValueIndex]}>
        <TitleBox>STEP 3. 읽고 확인해주세요</TitleBox>
        <ClientInformaitionBox>
          <Label flex="center">❗방문이 어려울 경우 미리 말씀해주세요❗</Label>
          <NoShowWarnning>
            저희 병원은 병원 시스템의 원할한 가동을 위하여
            <br />
            <br /> 진료예약 후 연락 등의 조치 없이 방문이 없을 경우 추후에 진료
            예약에 불이익이 있을 수 있습니다.
            <br />
            <br /> 진료예약 후 방문이 어려워질 경우 반드시 미리 예약을 취소 또는
            변경하여 주시길 바랍니다.
          </NoShowWarnning>
          <ConfirmButtonBox>
            <ConfirmDescription>
              확인 후 체크버튼을 눌러주세요.
            </ConfirmDescription>
            <ConfirmButton
              onClick={confirmClick}
              backgroundColor={confirm ? "#f7d436" : "white"}
              border={confirm ? "none" : "0.2rem solid #dbdbdb"}
            >
              <BsCheckLg />
            </ConfirmButton>
          </ConfirmButtonBox>
        </ClientInformaitionBox>
      </Carousel>
    </CarouselWrapper>
  );
}

export default ReservationCarousel;

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
const ButtonBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
`;

const Label = styled.div`
  display: flex;
  justify-content: ${(props) => props.flex};
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

const NoShowWarnning = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 30%;
  padding: 0% 5%;
  font-size: 1.5rem;
  font-weight: 500;
`;

const ConfirmButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
`;
const ConfirmDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50%;
  font-size: 1rem;
  font-weight: 700;
`;

const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.3s all;
  border: ${(props) => props.border};
  :hover {
    cursor: pointer;
  }
`;
