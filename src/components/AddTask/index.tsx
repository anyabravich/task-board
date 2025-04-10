import styled from "styled-components";
import { rem } from "polished";
import Icons from "../Icons";
import { usePopup } from "../../redux/hooks/usePopup";
import { usePopupActions } from "../../redux/hooks/usePopupActions";

const AddTask = () => {
  const { openPopup } = usePopup();
  const { togglePopup } = usePopupActions();

  return (
    <AddTaskContainer onClick={() => togglePopup(!openPopup)}>
      <AddTaskIcon>
        <Icons.plus />
      </AddTaskIcon>
      <AddTaskText>Add new task</AddTaskText>
    </AddTaskContainer>
  );
};

const AddTaskContainer = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${rem(20)};
  background: none;
  border: none;
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;
  padding: ${rem(16)};
  border-radius: ${rem(16)};
  background: ${({ theme }) => theme.colors.lightOrange};
`;

const AddTaskIcon = styled.div`
  --size: ${rem(48)};

  width: var(--size);
  height: var(--size);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${rem(12)};
  background: ${({ theme }) => theme.colors.orange};

  svg {
    --size: ${rem(24)};

    width: var(--size);
    height: var(--size);
  }
`;

const AddTaskText = styled.p``;

export default AddTask;
