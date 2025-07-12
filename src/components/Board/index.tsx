import Task from "../Task";
import styled from "styled-components";
import { rem } from "polished";
import AddTask from "../AddTask";
import PopupTask from "../PopupTask";
import { usePopup } from "../../redux/hooks/usePopup";
import { TASKS } from "./data";

const Board = () => {
  const { openPopup } = usePopup();

  return (
    <Container>
      <Title>My Task</Title>
      <Description>Tasks to keep organised</Description>
      <List>
        {TASKS.map((task) => (
          <li key={task.id}>
            <Task {...task} />
          </li>
        ))}
      </List>
      <AddTask />
      {openPopup && <PopupTask />}
    </Container>
  );
};

const Container = styled.div`
  padding-block: ${rem(32)};
  max-width: ${rem(552)};
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${rem(40)};
  font-weight: 400;
  line-height: 2.5rem;
  margin-bottom: ${rem(34)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${rem(20)};
  }
`;

const Description = styled.p`
  font-size: ${rem(16)};
  line-height: 1rem;
  margin-bottom: ${rem(28)};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  margin-bottom: ${rem(22)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${rem(10)};
    margin-bottom: ${rem(10)};
  }
`;

export default Board;
