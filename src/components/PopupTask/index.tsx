import styled from "styled-components";
import { rem, rgba } from "polished";
import Input from "../Input";
import Textarea from "../Textarea";
import IconChoice from "../IconChoice";
import StatusChoice from "../StatusChoice";
import Button from "../Button";
import Icons from "../Icons";

const PopupTask = () => {
  return (
    <Overlay>
      <Container>
        <Title>Task details</Title>
        <Fields>
          <Input label="Task name" placeholder="Enter name" />
          <Textarea label="Description" placeholder="Enter description" />
          <IconChoice />
          <StatusChoice />
          <Buttons>
            <Button variant="secondary">
              Delete <Icons.trash />
            </Button>
            <Button variant="primary">
              Save <Icons.check />
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
  padding: ${rem(20)};
  max-width: ${rem(700)};
  border-radius: ${rem(16)};
  overflow-y: auto;
`;

const Title = styled.p`
  margin-bottom: ${rem(20)};
  font-size: ${rem(24)};
  font-weight: 500;
  line-height: 1.5rem;
`;

const Fields = styled.form`
  display: flex;
  gap: ${rem(16)};
  flex-direction: column;
  height: calc(100% - ${rem(44)});
`;

const Buttons = styled.div`
  display: flex;
  gap: ${rem(16)};
  margin-top: auto;
  justify-content: flex-end;
  padding-bottom: ${rem(20)};
`;

export default PopupTask;
