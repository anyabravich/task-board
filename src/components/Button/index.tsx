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
  font-size: ${rem(14)};
  font-weight: 500;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: ${rem(6)} ${rem(23)};
  border-radius: 100vmax;
  background: ${({ $variant, theme }) => {
    if ($variant === "primary") {
      return theme.colors.blue;
    }
    return theme.colors.darkGray;
  }};
  display: flex;
  align-items: center;
  gap: ${rem(6)};

  svg {
    --size: ${rem(24)};

    width: var(--size);
    height: var(--size);

    flex-shrink: 0;
  }

  span {
    position: relative;
    top: ${rem(1)};
  }
`;

export default Button;
