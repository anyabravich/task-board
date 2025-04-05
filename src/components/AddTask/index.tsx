import styled from "styled-components";
import { rem } from "polished";
import Icons from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPopup } from "../../redux/slices/popupSlice";
import { RootState } from "../../redux/store";

const AddTask = () => {
  const dispatch = useDispatch();
  const openPopup = useSelector((state: RootState) => state.popup.openPopup);

  return (
    <AddTaskContainer onClick={() => dispatch(setOpenPopup(!openPopup))}>
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
