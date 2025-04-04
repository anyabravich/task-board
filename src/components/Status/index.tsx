import styled from "styled-components";
import { IStatus } from "./types";
import { rem } from "polished";
import getIconStatus from "../Task/utils/getIconStatus";
import getStatusBackground from "../Task/utils/getStatusBackground";
import Icons from "../Icons";

const Status = ({ status, text, active, onClick }: IStatus) => {
  const Icon = getIconStatus(status || "");

  return (
    <StatusContainer onClick={onClick}>
      <StatusIconContainer $status={status}>
        <Icon />
      </StatusIconContainer>
      <p>{text}</p>
      {active && (
        <StatusCheck>
          <Icons.check />
        </StatusCheck>
      )}
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${rem(16)};
  align-items: center;
  border: ${rem(2)} solid ${({ theme }) => theme.colors.gray};
  border-radius: ${rem(16)};
  padding: ${rem(4)};
  cursor: pointer;
`;

const StatusIconContainer = styled.div<{ $status: string }>`
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
    --size: ${rem(24)};

    width: var(--size);
    height: var(--size);
  }
`;

const StatusCheck = styled.div`
  --size: ${rem(20)};

  width: var(--size);
  height: var(--size);

  position: absolute;
  right: ${rem(14)};
  top: 50%;
  transform: translateY(-50%);

  border-radius: 100vmax;
  background: ${({ theme }) => theme.colors.blue};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    --size: ${rem(12)};

    width: var(--size);
    height: var(--size);
  }
`;

export default Status;
