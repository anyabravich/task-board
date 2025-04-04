import styled from "styled-components";
import { rem, rgba } from "polished";

const PopupTask = () => {
  return (
    <PopupTaskOverlay>
      <PopupTaskContainer>
        <PopupTaskTitle>Task details</PopupTaskTitle>
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

const PopupTaskTitle = styled.p``;

export default PopupTask;
