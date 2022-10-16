import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";
const ReservationCheck = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const [searchField, setSearchField] = useState({
    name: "",
    phoneNumber: "",
  });
  const [filterData, setFilterData] = useState({});
  useEffect(() => {
    axios("http://localhost:3000/mockData.json").then((res) =>
      setHospitalData(res.data.data)
    );
  }, []);
  const handleChange = (e) => {
    setSearchField({ ...searchField, [e.target.name]: e.target.value });
  };

  const onCheck = () => {
    setFilterData(
      hospitalData[0].client_data.filter((data) => {
        if (
          searchField.name === data.name &&
          searchField.phoneNumber === data.phone_number
        )
          return data;
      })
    );
  };

  return (
    <Wrap>
      <SearchContainer>
        {console.log(hospitalData[0])}
        {console.log(filterData)}
        {console.log(typeof searchField)}
        <AiOutlineCheck />
        예약 조회
        <CheckArea>
          <CheckName
            placeholder="예약하신 이름을 입력해주세요"
            onChange={handleChange}
            name="name"
          ></CheckName>
        </CheckArea>
        <CheckArea>
          <CheckName
            placeholder="예약하신 전화번호를 입력해주세요"
            onChange={handleChange}
            name="phoneNumber"
          ></CheckName>
        </CheckArea>
        <SubmitBtn onClick={onCheck}>조회하기</SubmitBtn>
      </SearchContainer>
      <ResultContainer>
        <ReservationList>
          {filterData.length > 0 ? (
            filterData.map((data) => {
              return <div key={data.id}>{data.name}</div>;
            })
          ) : (
            <div>일치하는 데이터가 없습니다.</div>
          )}
        </ReservationList>
      </ResultContainer>
    </Wrap>
  );
};
export default ReservationCheck;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 40px;
  flex-direction: column;
`;
const SearchContainer = styled.div`
  width: 50%;
  border: 1px solid #a0a0a0;
  padding: 40px;
  text-align: center;
  margin-top: 40px;
`;
const ResultContainer = styled.div`
  background-color: yellow;
`;
const CheckArea = styled.div``;
const CheckName = styled.input`
  width: 30vw;
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
const ReservationList = styled.div`
  th,
  td {
    width: 100%;
    border: 1px solid black;
  }
`;
