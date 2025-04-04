import styled from "styled-components";
import { rem, rgba } from "polished";
import Input from "../Input";
import Textarea from "../Textarea";
import IconChoice from "../IconChoice";
import StatusChoice from "../StatusChoice";

const PopupTask = () => {
  return (
    <PopupTaskOverlay>
      <PopupTaskContainer>
        <PopupTaskTitle>Task details</PopupTaskTitle>
        <PopupTaskFields>
          <Input label="Task name" placeholder="Enter name" />
          <Textarea label="Description" placeholder="Enter description" />
          <IconChoice />
          <StatusChoice />
        </PopupTaskFields>
      </PopupTaskContainer>
    </PopupTaskOverlay>
  );
};

const PopupTaskOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${rem(16)};
  display: flex;
  justify-content: flex-end;
  background: ${rgba("#000000", 0.3)};
`;

const PopupTaskContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  padding: ${rem(20)};
  max-width: ${rem(700)};
  border-radius: ${rem(16)};
`;

const PopupTaskTitle = styled.p`
  margin-bottom: ${rem(20)};
  font-size: ${rem(24)};
  font-weight: 500;
  line-height: 1.5rem;
`;

const PopupTaskFields = styled.form`
  display: flex;
  gap: ${rem(16)};
  flex-direction: column;
`;

export default PopupTask;
