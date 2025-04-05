import Task from "../Task";
import styled from "styled-components";
import { rem } from "polished";
import AddTask from "../AddTask";
import PopupTask from "../PopupTask";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Board = () => {
  const openPopup = useSelector((state: RootState) => state.popup.openPopup);

  return (
    <BoardContainer>
      <BoardTitle>My Task Board</BoardTitle>
      <BoardDescription>Tasks to keep organised</BoardDescription>
      <BoardList>
        <Task icon="⏰" title="Task in Progress" status="progress" />
        <Task icon="🏋" title="Task Completed" status="completed" />
        <Task icon="☕️" title="Task Won't Do" status="wontdo" />
        <Task
          icon="📚"
          title="Task To Do"
          description="Work on a devChallenges.io learn TypeScript."
        />
      </BoardList>
      <AddTask />
      {openPopup && <PopupTask />}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  padding-block: ${rem(32)};
  max-width: ${rem(552)};
  margin: 0 auto;
`;

const BoardTitle = styled.h1`
  font-size: ${rem(40)};
  font-weight: 400;
  line-height: 2.5rem;
  margin-bottom: ${rem(34)};
`;

const BoardDescription = styled.p`
  font-size: ${rem(16)};
  line-height: 1rem;
  margin-bottom: ${rem(28)};
`;

const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  margin-bottom: ${rem(22)};
`;

export default Board;
