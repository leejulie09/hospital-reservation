import React from "react";
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
import { Button } from "@mui/material";

const Reservation = () => {
  const [value, onChange] = useState(new Date());
  const [togle, setTogle] = useState({
    date: false,
    time: false,
  });

  return (
    <Wrap>
      <Container>
        예약증
        <PickArea>
          <BorderTag>
            <IoIosPerson />
            <InputName placeholder="이름"></InputName>
          </BorderTag>
        </PickArea>
        <PickArea>
          <BorderTag>
            <CiStethoscope placeholder="d" />
            <Department>
              <option>외과</option>
              <option>내과</option>
              <option>산부인과</option>
              <option>안과</option>
            </Department>
          </BorderTag>
        </PickArea>
        <PickArea>
          <BorderTag>
            <BsCalendar3 />
            &nbsp;{moment(value).format("MM. DD (dddd)")} &nbsp;
            {togle.date ? (
              <IoIosArrowDropup
                style={{ cursor: "pointer" }}
                onClick={() => setTogle({ ...togle, date: false })}
              />
            ) : (
              <IoIosArrowDropdown
                style={{ cursor: "pointer" }}
                onClick={() => setTogle({ ...togle, date: true })}
              />
            )}
          </BorderTag>

          {togle.date && (
            <TogleArea>
              {" "}
              <Calendar
                onChange={onChange}
                value={value}
                formatDay={(locale, date) =>
                  date.toLocaleString("en", { day: "numeric" })
                }
              />
            </TogleArea>
          )}
        </PickArea>
        <PickArea>
          <BorderTag>
            <AiOutlineClockCircle />
            &nbsp;시간 선택 &nbsp;
            {togle.time ? (
              <IoIosArrowDropup
                style={{ cursor: "pointer" }}
                onClick={() => setTogle({ ...togle, time: false })}
              />
            ) : (
              <IoIosArrowDropdown
                style={{ cursor: "pointer" }}
                onClick={() => setTogle({ ...togle, time: true })}
              />
            )}
          </BorderTag>

          {togle.time && (
            <TogleArea>
              <BtnArea>
                <TimeBtn>오전</TimeBtn>
                <TimeBtn>오후</TimeBtn>
                <TimeBtn>야간</TimeBtn>
              </BtnArea>
            </TogleArea>
          )}
        </PickArea>
        <PickArea>
          <SumbitBtn>예약 하기</SumbitBtn>
        </PickArea>
      </Container>
    </Wrap>
  );
};
export default Reservation;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

const Container = styled.div`
  min-width: 800px;
  height: 100%;
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  border: 1px solid #a0a0a0;
`;

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
