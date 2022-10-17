import { useState } from "react";
import styled from "styled-components";

function DepartmentSelectButtonBox({
  departmentClick,
  text,
  setselectedDepartment,
}) {
  const [style, setStyle] = useState(false);

  const onClick = () => {
    if (style) {
      setStyle((prev) => !prev);
    } else if (!style) {
      setStyle((prev) => !prev);
      departmentClick();
      setselectedDepartment(text);
    }
  };
  return (
    <Buttons
      onClick={onClick}
      backgroundColor={style ? "#f7d436" : "white"}
      borderStyle={style ? "none" : "0.2rem solid #dbdbdb"}
    >
      {text}
    </Buttons>
  );
}

export default DepartmentSelectButtonBox;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
  font-size: 1.6rem;
  font-weight: 700;
  border: ${(props) => props.borderStyle};
  border-radius: 2rem;
  transition: 0.3s all;
  background-color: ${(props) => props.backgroundColor};
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
