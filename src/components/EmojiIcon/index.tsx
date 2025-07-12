import styled from "styled-components";

import { rem } from "polished";
import { IEmojiIcon } from "./types";
import { theme } from "../../utils/theme";

const EmojiIcon = ({ icon, active, onClick }: IEmojiIcon) => {
  return (
    <Container $active={active} onClick={onClick}>
      {icon}
    </Container>
  );
};

const Container = styled.div<{ $active: boolean }>`
  --size: ${rem(44)};

  width: var(--size);
  height: var(--size);

  background: ${({ $active }) =>
    $active ? theme.colors.yellow : theme.colors.gray};
  border-radius: ${rem(14)};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export default EmojiIcon;
