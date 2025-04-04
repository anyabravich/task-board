import styled from "styled-components";
import { labelStyles } from "../../styles/sharedStyles";
import Status from "../Status";
import { status } from "./status";
import { rem } from "polished";
import { useState } from "react";

const StatusChoice = () => {
  const [activeStatus, setActiveStatus] = useState("progress");

  return (
    <StatusChoiceContainer>
      <StatusChoiceTitle>Status</StatusChoiceTitle>
      <StatusChoiceGrid>
        {status.map(({ status, text }) => (
          <Status
            status={status}
            text={text}
            key={status}
            active={status === activeStatus}
            onClick={() => setActiveStatus(status)}
          />
        ))}
      </StatusChoiceGrid>
    </StatusChoiceContainer>
  );
};

const StatusChoiceContainer = styled.div``;

const StatusChoiceTitle = styled.p`
  ${labelStyles}
`;

const StatusChoiceGrid = styled.div`
  display: grid;
  gap: ${rem(6)} ${rem(12)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(224)}, 1fr));
`;

export default StatusChoice;
