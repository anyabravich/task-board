import styled from "styled-components";
import { rem, rgba } from "polished";
import Input from "../Input";
import Textarea from "../Textarea";
import IconChoice from "../IconChoice";
import StatusChoice from "../StatusChoice";
import Button from "../Button";
import Icons from "../Icons";
import { IPopupTask } from "./types";

const PopupTask = ({ setOpenPopup }: IPopupTask) => {
  return (
    <Overlay onClick={() => setOpenPopup(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>Task details</Title>
        <Fields>
          <Input label="Task name" placeholder="Enter name" />
          <Textarea label="Description" placeholder="Enter description" />
          <IconChoice />
          <StatusChoice />
          <Buttons>
            <Button variant="secondary">
              <span>Delete</span>
              <Icons.trash />
            </Button>
            <Button variant="primary">
              <span>Save</span>
              <Icons.check />
            </Button>
          </Buttons>
        </Fields>
      </Container>
    </Overlay>
  );
};

const Overlay = styled.div`
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

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  padding: ${rem(18)} ${rem(22)};
  max-width: ${rem(628)};
  border-radius: ${rem(10)};
  overflow-y: auto;
`;

const Title = styled.p`
  font-weight: 500;
  line-height: 1.5rem;
  font-size: ${rem(20)};
  margin-bottom: ${rem(22)};
`;

const Fields = styled.form`
  display: flex;
  gap: ${rem(18)};
  flex-direction: column;
  min-height: calc(100% - ${rem(50)});
`;

const Buttons = styled.div`
  display: flex;
  gap: ${rem(16)};
  margin-top: auto;
  justify-content: flex-end;
`;

export default PopupTask;
