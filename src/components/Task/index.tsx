import styled from "styled-components";
import { rem } from "polished";
import { ITask } from "./types";
import getBackgroundColor from "./utils/getBackgroundColor";
import getIconStatus from "./utils/getIconStatus";
import getStatusBackground from "./utils/getStatusBackground";
import { usePopup } from "../../redux/hooks/usePopup";
import { usePopupActions } from "../../redux/hooks/usePopupActions";

const Task = ({ icon, title, status, description }: ITask) => {
  const Icon = getIconStatus(status || "");

  const { openPopup } = usePopup();
  const { togglePopup } = usePopupActions();

  return (
    <TaskContainer $status={status} onClick={() => togglePopup(!openPopup)}>
      <TaskInformation>
        <TaskImageContainer>{icon}</TaskImageContainer>
        <div>
          <TaskTitle>{title}</TaskTitle>
          {description && <TaskDescription>{description}</TaskDescription>}
        </div>
      </TaskInformation>
      {status && (
        <TaskStatus $status={status}>
          <Icon />
        </TaskStatus>
      )}
    </TaskContainer>
  );
};

const TaskContainer = styled.li<{ $status?: string }>`
  display: flex;
  background: ${({ $status, theme }) =>
    getBackgroundColor($status || "", theme)};
  justify-content: space-between;
  padding: ${rem(16)};
  border-radius: ${rem(16)};
  cursor: pointer;
`;

const TaskInformation = styled.div`
  display: flex;
  gap: ${rem(20)};
  align-items: center;
`;

const TaskImageContainer = styled.div`
  --size: ${rem(44)};

  width: var(--size);
  height: var(--size);

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${rem(8)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskTitle = styled.p`
  font-size: ${rem(20)};
  font-weight: 600;
  line-height: 1.25rem;
`;

const TaskDescription = styled.p`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 1.25rem;
  margin-top: ${rem(8)};
`;

const TaskStatus = styled.div<{ $status?: string }>`
  --size: ${rem(44)};

  width: var(--size);
  height: var(--size);

  background: ${({ $status, theme }) =>
    getStatusBackground($status || "", theme)};
  border-radius: ${rem(8)};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    --size: ${rem(20)};

    width: var(--size);
    height: var(--size);
  }
`;

export default Task;
