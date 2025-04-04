import styled from "styled-components";
import { rem } from "polished";

import { IButton } from "./types";

const Button = ({ children, variant }: IButton) => {
  return (
    <Container type="button" $variant={variant}>
      {children}
    </Container>
  );
};

const Container = styled.button<{ $variant?: "primary" | "secondary" }>`
  background: none;
  border: none;
  font-size: ${rem(16)};
  font-weight: 500;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: ${rem(10)} ${rem(16)};
  border-radius: 100vmax;
  background: ${({ $variant, theme }) => {
    if ($variant === "primary") {
      return theme.colors.blue;
    }
    return theme.colors.darkGray;
  }};
  display: flex;
  align-items: center;
  gap: ${rem(8)};

  svg {
    --size: ${rem(24)};

    width: var(--size);
    height: var(--size);

    flex-shrink: 0;
  }
`;

export default Button;
