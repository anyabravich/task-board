import styled from "styled-components";
import { rem, rgba } from "polished";
import Input from "../Input";
import Textarea from "../Textarea";
import IconChoice from "../IconChoice";
import StatusChoice from "../StatusChoice";
import Button from "../Button";
import Icons from "../Icons";
import { RemoveScroll } from "react-remove-scroll";
import { usePopup } from "../../redux/hooks/usePopup";
import { usePopupActions } from "../../redux/hooks/usePopupActions";

const PopupTask = () => {
  const { openPopup } = usePopup();
  const { togglePopup } = usePopupActions();

  if (!openPopup) return null;

  return (
    <RemoveScroll>
      <Overlay onClick={() => togglePopup(false)}>
        <Container onClick={(e) => e.stopPropagation()}>
          <ButtonClose type="button" onClick={() => togglePopup(false)}>
            <Icons.close />
          </ButtonClose>
          <Title>Task details</Title>
          <Fields onSubmit={(e) => e.preventDefault()}>
            <Input label="Task name" placeholder="Enter name" />
            <Textarea label="Description" placeholder="Enter description" />
            <IconChoice />
            <StatusChoice />
            <Buttons>
              <Button variant="secondary" type="submit">
                <span>Delete</span>
                <Icons.trash />
              </Button>
              <Button variant="primary" type="submit">
                <span>Save</span>
                <Icons.check />
              </Button>
            </Buttons>
          </Fields>
        </Container>
      </Overlay>
    </RemoveScroll>
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;

const Container = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  padding: ${rem(18)} ${rem(22)};
  max-width: ${rem(628)};
  border-radius: ${rem(10)};
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 0;
  }
`;

const ButtonClose = styled.button`
  --size: ${rem(28)};

  width: var(--size);
  height: var(--size);

  position: absolute;
  top: ${rem(18)};
  right: ${rem(18)};
  background: none;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    --size: ${rem(44)};

    width: var(--size);
    height: var(--size);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
