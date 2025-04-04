import styled from "styled-components";
import { ITextarea } from "./types";
import { InputLabel } from "../Input";
import { rem } from "polished";
import { inputStyles } from "../../styles/sharedStyles";

const Textarea = ({ label, placeholder }: ITextarea) => {
  return (
    <TextareaContainer>
      {label && <TextareaLabel>{label}</TextareaLabel>}
      <TextareaField placeholder={placeholder}></TextareaField>
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextareaLabel = styled(InputLabel)``;

const TextareaField = styled.textarea`
  ${inputStyles}
  height: ${rem(170)};
  resize: none;
  padding: ${rem(8)} ${rem(16)};
`;

export default Textarea;
