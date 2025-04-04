import styled from "styled-components";
import { rem } from "polished";
import { IInput } from "./types";
import { inputStyles } from "../../styles/sharedStyles";

const Input = ({ label, type = "text", placeholder }: IInput) => {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputField type={type} placeholder={placeholder} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: ${rem(14)};
  margin-bottom: ${rem(6)};
  color: ${({ theme }) => theme.colors.darkGray};
`;

const InputField = styled.input`
  ${inputStyles}
`;

export default Input;
