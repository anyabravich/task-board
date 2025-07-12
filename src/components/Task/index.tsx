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
    <Container $status={status} onClick={() => togglePopup(!openPopup)}>
      <Information>
        <ImageContainer>{icon}</ImageContainer>

        <div>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </div>
      </Information>
      {status && (
        <Status $status={status}>
          <Icon />
        </Status>
      )}
    </Container>
  );
};

const Container = styled.div<{ $status?: string }>`
  cursor: pointer;

  display: flex;
  width: 100%;
  background: ${({ $status, theme }) =>
    getBackgroundColor($status || "", theme)};
  justify-content: space-between;
  padding: ${rem(16)};
  border-radius: ${rem(16)};
`;

const Information = styled.div`
  display: flex;
  gap: ${rem(20)};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${rem(12)};
  }
`;

const ImageContainer = styled.span`
  --size: ${rem(44)};

  width: var(--size);
  height: var(--size);

  flex-shrink: 0;
  border-radius: ${rem(8)};
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: ${rem(20)};
  font-weight: 600;
  line-height: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${rem(18)};
  }
`;

const Description = styled.p`
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 1.25rem;
  margin-top: ${rem(8)};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${rem(14)};
    margin-top: ${rem(4)};
  }
`;

const Status = styled.div<{ $status?: string }>`
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
