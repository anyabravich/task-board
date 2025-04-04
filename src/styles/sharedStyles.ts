import { css } from "styled-components";
import { rem } from "polished";

export const inputStyles = css`
  outline: none;
  border: ${rem(2)} solid ${({ theme }) => theme.colors.gray};
  height: ${rem(44)};
  border-radius: ${rem(10)};
  padding: ${rem(16)};
  font-size: ${rem(16)};
  font-family: "Outfit", "Arial", sans-serif;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    font-size: ${rem(14)};
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const labelStyles = css`
  font-size: ${rem(14)};
  margin-bottom: ${rem(4)};
  color: ${({ theme }) => theme.colors.darkGray};
`;
