import React from "react";
import styled from "styled-components";
import { MdLocalHospital } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom/dist";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <MainLogo>
        <MdLocalHospital />
        띵동
      </MainLogo>
      <Title>진료 예약 서비스</Title>
      <RightMenu onClick={() => navigate("/")}>
        <div>
          <AiFillHome style={{ width: "100%" }} />
        </div>
        처음으로
      </RightMenu>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ebebeb;
  font-size: 20px;
`;

const MainLogo = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const RightMenu = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

export default Nav;
